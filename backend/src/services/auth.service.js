import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { config } from "../config/index.js";
import { PERMITTED_MENU_QUERY } from "../query/menu.query.js";
import { prismaClient } from "../index.js";

const prisma = new PrismaClient();

export class AuthService {
  static async generateTokens(user, menus) {
    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        company_id: user.company_id,
        username: user.username,
      },
      config.jwt.accessSecret,
      { expiresIn: config.jwt.accessExpiration }
    );

    let refreshToken = null;
    if (config.jwt.useRefreshToken) {
      refreshToken = jwt.sign({ id: user.id }, config.jwt.refreshSecret, {
        expiresIn: config.jwt.refreshExpiration,
      });

      await prisma.refreshToken.create({
        data: {
          token: refreshToken,
          userId: user.id,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        },
      });
    }
    const loggedUser = {
      id: user.id,
      email: user.email,
      company_id: user.company_id,
      username: user.username,
      is_admin: user.is_admin,
    };
    const data = {
      user: loggedUser,
      token: accessToken,
      menus,
      refreshToken,
    };

    return data;
  }

  static async refreshToken(token) {
    if (!config.jwt.useRefreshToken) {
      throw new Error("Refresh token functionality is disabled");
    }

    const refreshTokenData = await prisma.refreshToken.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!refreshTokenData || refreshTokenData.isRevoked) {
      throw new Error("Invalid refresh token");
    }

    if (new Date() > refreshTokenData.expiresAt) {
      throw new Error("Refresh token expired");
    }

    return this.generateTokens(refreshTokenData.user);
  }

  static async register(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return this.generateTokens(user);
  }

  static async login(username, password) {
    const user = await prisma.user.findFirst({
      where: { username: username },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }
    let menus = [];
    if (user.is_admin) {
      menus = await prismaClient.$queryRawUnsafe(
        PERMITTED_MENU_QUERY.GET_ALL_MENU_FOR_ADMIN
      );
    } else {
      menus = await prismaClient.$queryRawUnsafe(
        PERMITTED_MENU_QUERY.GET_PERMITTED_MENU_FROM_RULE,
        user.id
      );
    }
    menus = menus.map((menu) => ({
      ...menu,
      can_view: Boolean(menu.can_view),
      can_create: Boolean(menu.can_create),
      can_update: Boolean(menu.can_update),
      can_delete: Boolean(menu.can_delete),
      can_report: Boolean(menu.can_report),
      menu_id: Number(menu.menu_id),
    }));

    return this.generateTokens(user, menus);
  }
  static async verifyToken(req, res) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return HttpResponse.unauthorized("No token provided").send(res);
    }

    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
      return HttpResponse.unauthorized("Invalid token format").send(res);
    }

    try {
      const decoded = jwt.verify(token, config.jwt.accessSecret);

      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
      });

      if (!user) {
        return HttpResponse.unauthorized("User no longer exists").send(res);
      }
      let menus = [];
      if (user.is_admin) {
        menus = await prismaClient.$queryRawUnsafe(
          PERMITTED_MENU_QUERY.GET_ALL_MENU_FOR_ADMIN
        );
      } else {
        menus = await prismaClient.$queryRawUnsafe(
          PERMITTED_MENU_QUERY.GET_PERMITTED_MENU_FROM_RULE,
          user.id
        );
      }
      menus = menus.map((menu) => ({
        ...menu,
        can_view: Boolean(menu.can_view),
        can_create: Boolean(menu.can_create),
        can_update: Boolean(menu.can_update),
        can_delete: Boolean(menu.can_delete),
        can_report: Boolean(menu.can_report),
        menu_id: Number(menu.menu_id),
      }));

      const loggedUser = {
        id: user.id,
        email: user.email,
        company_id: user.company_id,
        username: user.username,
        is_admin: user.is_admin,
      };
      const data = {
        user: loggedUser,
        menus,
      };

      return data;
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return HttpResponse.unauthorized("Token expired").send(res);
      }
      throw error;
    }
  }

  static async logout(refreshToken) {
    if (!config.jwt.useRefreshToken) {
      return true;
    }

    await prisma.refreshToken.update({
      where: { token: refreshToken },
      data: { isRevoked: true },
    });

    return true;
  }
}
