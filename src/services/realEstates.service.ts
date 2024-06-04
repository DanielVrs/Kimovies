import { Address, Category, RealEstate } from "../entities";
import { CreateRealState } from "../interfaces/realEstates.interface";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

export const createRealEstateService = async (
  data: CreateRealState
): Promise<RealEstate> => {
  const category: Category | null = await categoryRepo.findOneBy({ id: data.categoryId });
  const address: Address | null = await addressRepo.save(data.address);
  const realEstate: RealEstate = await realEstateRepo.save({
    ...data,
    address,
    category: category!,
  });

  return realEstate;
};

export const readAllRealEstateService = async (): Promise<RealEstate[]> => {
  return await realEstateRepo.find({
    relations: {
      address: true,
    },
  });
};
