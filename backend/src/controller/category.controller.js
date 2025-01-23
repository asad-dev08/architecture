import { prismaClient } from "../index.js";
import { auditLog } from "../utils/audit.js";
import { HttpResponse } from "../utils/httpResponse.js";
import { getPaginatedData } from "../utils/pagination.js";

export const getCategories = async (req, res) => {
  const categories = await prismaClient.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return HttpResponse.success(
    "Categories fetched successfully",
    categories
  ).send(res);
};

export const getCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await prismaClient.category.findUnique({
      where: { id },
      include: {
        Projects: true,
        News: true,
      },
    });

    if (!category) {
      return HttpResponse.notFound("Category not found").send(res);
    }

    return HttpResponse.success("Category fetched successfully", category).send(
      res
    );
  } catch (error) {
    return HttpResponse.internalError(
      "Failed to fetch category",
      error.message
    ).send(res);
  }
};

export const createCategory = async (req, res) => {
  const result = await prismaClient.$transaction(async (tx) => {
    const { id, ...rest } = req.body;
    const category = await tx.category.create({
      data: {
        ...rest,
        created_by: req.user.id,
        created_ip: req.ip,
        company_id: req.user.company_id,
      },
    });

    await auditLog(
      "categories",
      category.id,
      "CREATE",
      null,
      category,
      req.user.id,
      req
    );

    return category;
  });

  return HttpResponse.created("Category created successfully", result).send(
    res
  );
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await prismaClient.$transaction(async (tx) => {
      const existingCategory = await tx.category.findUnique({
        where: { id },
      });

      if (!existingCategory) {
        throw new Error("Category not found");
      }

      const updatedCategory = await tx.category.update({
        where: { id },
        data: {
          ...req.body,
          updated_by: req.user.id,
          updated_ip: req.ip,
        },
      });

      await auditLog(
        "categories",
        id,
        "UPDATE",
        existingCategory,
        updatedCategory,
        req.user.id,
        req
      );

      return updatedCategory;
    });

    return HttpResponse.success("Category updated successfully", result).send(
      res
    );
  } catch (error) {
    if (error.message === "Category not found") {
      return HttpResponse.notFound("Category not found").send(res);
    }
    return HttpResponse.internalError(
      "Failed to update category",
      error.message
    ).send(res);
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await prismaClient.$transaction(async (tx) => {
      const category = await tx.category.findUnique({
        where: { id },
      });

      if (!category) {
        throw new Error("Category not found");
      }

      // Check if category has related projects or news

      await tx.category.delete({
        where: { id },
      });

      await auditLog(
        "categories",
        id,
        "DELETE",
        category,
        null,
        req.user.id,
        req
      );

      return category;
    });

    return HttpResponse.success("Category deleted successfully").send(res);
  } catch (error) {
    if (error.message === "Category not found") {
      return HttpResponse.notFound("Category not found").send(res);
    }
    if (error.message.includes("associated projects or news")) {
      return HttpResponse.badRequest(error.message).send(res);
    }
    return HttpResponse.internalError(
      "Failed to delete category",
      error.message
    ).send(res);
  }
};

export const paginatedData = async (req, res) => {
  try {
    const data = await getPaginatedData({
      model: "category",
      ...req.body,
      include: {
        Projects: true,
        News: true,
      },
    });
    return HttpResponse.success("Data fetched successfully", data).send(res);
  } catch (error) {
    return HttpResponse.internalError(
      "Failed to fetch paginated data",
      error.message
    ).send(res);
  }
};
