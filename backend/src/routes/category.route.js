import express from "express";
import { validateRequest } from "../middleware/validateRequest.js";
import { categoryValidation } from "../validations/category.validation.js";
import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  paginatedData,
  updateCategory,
} from "../controller/category.controller.js";
import { errorHandler } from "../handlers/errorHandler.js";

const categoryRoutes = express.Router();

// Get all categories
categoryRoutes.get("/", errorHandler(getCategories));

// Get single category
categoryRoutes.get("/:id", errorHandler(getCategory));

// Create category
categoryRoutes.post(
  "/",
  //   validateRequest(categoryValidation.create),
  errorHandler(createCategory)
);

// Update category
categoryRoutes.put(
  "/:id",
  //   validateRequest(categoryValidation.update),
  errorHandler(updateCategory)
);

// Delete category
categoryRoutes.delete("/:id", errorHandler(deleteCategory));

// Paginated data
categoryRoutes.post("/pagination", errorHandler(paginatedData));

export default categoryRoutes;
