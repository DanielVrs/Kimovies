import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readAllUserController,
  updateUserController,
} from "../controllers/users.controller";
import { verifyUniqueEmailUser, verifyUserExists } from "../middlewares/users.middleware";
import {
  validateBody,
  verifyAdmin,
  verifyPermissions,
  verifyToken,
} from "../middlewares/globals.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";

export const usersRoute: Router = Router();

usersRoute.post(
  "/",
  validateBody(createUserSchema),
  verifyUniqueEmailUser,
  createUserController
);
usersRoute.get("/", verifyToken, verifyAdmin, readAllUserController);
usersRoute.patch(
  "/:id",
  validateBody(updateUserSchema),
  verifyToken,
  verifyUserExists,
  verifyPermissions,
  updateUserController
);
usersRoute.delete(
  "/:id",
  verifyToken,
  verifyUserExists,
  verifyPermissions,
  deleteUserController
);
