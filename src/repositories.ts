import User from "./entities/User.entity";
import { AppDataSource } from "./data-source";
import Category from "./entities/Categories.entity";
import { Address, RealEstate, Schedule } from "./entities";
import { ScheduleRepo } from "./interfaces/schedules.interface";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstates.interface";
import { CategoryRepo } from "./interfaces/categories.interface";
import { UserRepo } from "./interfaces/users.interface";

export const userRepo: UserRepo = AppDataSource.getRepository(User);
export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address);
export const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate);
