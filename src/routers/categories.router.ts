import { Router } from "express";
import {
  createCategoryController,
  readAllCategoryController,
  readCategoryByIdController,
} from "../controllers/categories.controller";
import {
  verifyCategoryExists,
  verifyUniqueCategoryName,
} from "../middlewares/categories.middleware";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import { createCategorySchema } from "../schemas/categories.schema";

export const categoriesRoute: Router = Router();

categoriesRoute.post(
  "/",
  validateBody(createCategorySchema),
  verifyToken,
  verifyAdmin,
  verifyUniqueCategoryName,
  createCategoryController
);
categoriesRoute.get("/", readAllCategoryController);
categoriesRoute.get("/:id/realEstate", verifyCategoryExists, readCategoryByIdController);
