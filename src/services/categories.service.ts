import { Category } from "../entities";
import { readAllCategory } from "../interfaces/categories.interface";
import { categoryRepo } from "../repositories";

export const createCategoryService = async (data: Category): Promise<Category> => {
  return await categoryRepo.save(data);
};

export const readAllCategoryService = async (): Promise<readAllCategory> => {
  return await categoryRepo.find();
};

export const readCategoryByIdService = async (id: number): Promise<Category> => {
  const category: Category | null = await categoryRepo.findOne({
    where: {
      id,
    },
    relations: {
      realEstate: true,
    },
  });
  return category!;
};
