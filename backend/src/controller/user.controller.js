import bcrypt from "bcryptjs";
import { prismaClient } from "../index.js";
import { auditLog } from "../utils/audit.js";
import { HttpResponse } from "../utils/httpResponse.js";
import { getPaginatedData } from "../utils/pagination.js";

export const getUsers = async (req, res) => {
  const users = await prismaClient.user.findMany();

  return HttpResponse.success("Users fetched successfully", users).send(res);
};

export const checkAvailableUsername = async (req, res) => {
  const { name } = req.body;

  const user = await prismaClient.$queryRawUnsafe(
    `SELECT * FROM users where LOWER(username)=LOWER(?)`,
    name
  );
  let isAvailable = user.length > 0 ? false : true;
  return HttpResponse.success("Username available", isAvailable).send(res);
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await prismaClient.user.findUnique({
    where: {
      id,
    },
    include: {
      UserGroups: true,
    },
  });
  return HttpResponse.success("User fetched successfully", user).send(res);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const previousData = await prismaClient.user.findUnique({
    where: {
      id,
    },
    include: {
      UserGroups: true,
    },
  });
  await prismaClient.userGroup.deleteMany({
    where: { user_id: id },
  });
  await prismaClient.user.delete({
    where: {
      id,
    },
  });
  await auditLog("users", id, "DELETE", previousData, null, req.user.id, req);
  return HttpResponse.success("User deleted successfully").send(res);
};

export const createUser = async (req, res) => {
  const {
    email,
    password,
    fullname,
    address,
    username,
    phone,
    is_active,
    is_admin,
    is_password_reset,
    user_type,
    company_id,
    UserGroups,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  let user; // Define user outside the transaction scope
  const loggedUser = req.user;
  const result = await prismaClient.$transaction(async (tx) => {
    user = await tx.user.create({
      data: {
        fullname,
        username,
        email,
        password: hashedPassword,
        address,
        phone,
        is_active,
        is_admin,
        is_password_reset,
        user_type,
        created_by: req.user.id,
        created_ip: req.ip || "",
        company_id,
        UserGroups: {
          create: UserGroups.map((group) => ({
            group_id: group.group_id,
            created_at: new Date(),
            created_by: loggedUser.id,
            created_ip: req.ip,
            company_id: loggedUser.company_id,
          })),
        },
      },
      include: {
        UserGroups: true,
      },
    });
    auditLog("users", user.id, "CREATE", null, user, req.user.id, req);

    return user;
  });
  return HttpResponse.created("User created successfully", user).send(res);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    email,
    password,
    fullname,
    address,
    username,
    phone,
    is_active,
    is_admin,
    is_password_reset,
    user_type,
    company_id,
    UserGroups = [],
  } = req.body;
  const loggedUser = req.user;

  try {
    const result = await prismaClient.$transaction(async (prisma) => {
      // Get existing user data for audit
      const existingUser = await prisma.user.findUnique({
        where: { id },
        include: {
          UserGroups: true,
        },
      });

      if (!existingUser) {
        return HttpResponse.notFound("User not found").send(res);
      }

      // First delete existing user groups
      await prisma.userGroup.deleteMany({
        where: { user_id: id },
      });

      // Update user and create new user groups
      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          email,
          fullname,
          address,
          username,
          phone,
          is_active,
          is_admin,
          is_password_reset,
          user_type,
          company_id,
          updated_at: new Date(),
          updated_by: loggedUser.id,
          updated_ip: req.ip,
          UserGroups: {
            deleteMany: {},
            create: UserGroups.map((group) => ({
              group_id: group.group_id,
              created_at: new Date(),
              created_by: loggedUser.id,
              created_ip: req.ip,
              company_id: loggedUser.company_id,
            })),
          },
        },
        include: {
          UserGroups: true,
        },
      });

      // Create audit log for user update
      await auditLog(
        "users",
        id,
        "UPDATE",
        {
          ...existingUser,
          UserGroups: undefined,
        },
        {
          ...updatedUser,
          UserGroups: undefined,
        },
        loggedUser.id,
        req
      );

      // Create audit log for user groups update
      await auditLog(
        "user_group",
        id,
        "UPDATE",
        existingUser.UserGroups,
        updatedUser.UserGroups,
        loggedUser.id,
        req
      );

      return updatedUser;
    });

    return HttpResponse.success("User updated successfully", result).send(res);
  } catch (error) {
    console.error("Update transaction failed:", error);

    if (error.message === "User not found") {
      return HttpResponse.notFound("User not found").send(res);
    }

    if (error.code === "P2002") {
      return HttpResponse.conflict("A user with this name already exists").send(
        res
      );
    }

    return HttpResponse.error("Failed to update user", error.message).send(res);
  }
};

export const paginatedData = async (req, res) => {
  const data = await getPaginatedData({
    model: "user",
    ...req.body,
  });
  return HttpResponse.success("Data fetched successfully", data).send(res);
};
