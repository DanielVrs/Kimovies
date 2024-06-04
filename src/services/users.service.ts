import { User } from "../entities";
import {
  UserCreate,
  UserReadReturn,
  UserReturn,
  UserUpdate,
} from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas/users.schema";

export const createUserService = async (data: UserCreate): Promise<UserReturn> => {
  const user: User = userRepo.create(data);

  await userRepo.save(user);

  return userReturnSchema.parse(user);
};

export const readAllUserService = async (): Promise<UserReadReturn> => {
  const users: User[] = await userRepo.find();

  return userReadSchema.parse(users);
};

export const updateUserService = async (
  data: UserUpdate,
  user: User
): Promise<UserReturn> => {
  const newUser: User = userRepo.create({ ...user, ...data });
  await userRepo.save(newUser);

  return userReturnSchema.parse(newUser);
};

export const deleteUserService = async (user: User): Promise<void> => {
  await userRepo.softRemove(user);
};
