import { z } from "zod";
import {
  createCategorySchema,
  readAllCategorySchema,
} from "../schemas/categories.schema";
import { Repository } from "typeorm";
import { Category } from "../entities";

export type CreateCategory = z.infer<typeof createCategorySchema>;
export type readAllCategory = z.infer<typeof readAllCategorySchema>;

export type CategoryRepo = Repository<Category>;
