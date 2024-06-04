import { Request, Response } from "express";
import { Category } from "../entities";
import {
  createCategoryService,
  readAllCategoryService,
  readCategoryByIdService,
} from "../services/categories.service";
import { readAllCategory } from "../interfaces/categories.interface";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const category: Category = await createCategoryService(req.body);
  return res.status(201).json(category);
};

export const readAllCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: readAllCategory = await readAllCategoryService();
  return res.status(200).json(categories);
};

export const readCategoryByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const category: Category = await readCategoryByIdService(Number(id));
  return res.status(200).json(category);
};
