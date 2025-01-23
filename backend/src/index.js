import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import { config } from "./config/index.js";
import authRoutes from "./routes/auth.routes.js";
import logger from "./utils/logger.js";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/user.route.js";
import { verifyToken } from "./middleware/auth.js";
import companyRoutes from "./routes/company.route.js";
import securityGroupRoutes from "./routes/security-group.route.js";
import securityRuleRoutes from "./routes/security-rule.route.js";
import menuRoutes from "./routes/menu.route.js";
import projectRoutes from "./routes/project.route.js";
import categoryRoutes from "./routes/category.route.js";
import newsRoutes from "./routes/news.route.js";

const CONTEXT_PATH = "api";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "100mb" }));

// Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
// });
// app.use(limiter);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});
app.use(`/${CONTEXT_PATH}/auth`, authRoutes);
app.use(`/${CONTEXT_PATH}/users`, verifyToken, userRoutes);
app.use(`/${CONTEXT_PATH}/companies`, verifyToken, companyRoutes);
app.use(`/${CONTEXT_PATH}/security-groups`, verifyToken, securityGroupRoutes);
app.use(`/${CONTEXT_PATH}/security-rules`, verifyToken, securityRuleRoutes);
app.use(`/${CONTEXT_PATH}/menus`, verifyToken, menuRoutes);
app.use(`/${CONTEXT_PATH}/projects`, verifyToken, projectRoutes);
app.use(`/${CONTEXT_PATH}/category`, verifyToken, categoryRoutes);
app.use(`/${CONTEXT_PATH}/news`, verifyToken, newsRoutes);

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.use(express.static("uploads"));
app.use(
  "/upload",
  express.static(path.join(process.cwd(), "upload"), {
    setHeaders: (res, path) => {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);
// Error handling
app.use((err, req, res, next) => {
  logger.error("Unhandled error", { error: err.message, stack: err.stack });
  res.status(500).json({ message: "Internal server error" });
});

app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
});
