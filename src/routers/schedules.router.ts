import { Router } from "express";
import {
  createScheduleController,
  readAllSchedulesRealEstateController,
} from "../controllers/schedules.controller";
import {
  validateBody,
  verifyAdmin,
  verifyPermissions,
  verifyToken,
} from "../middlewares/globals.middleware";
import { createScheduleSchema } from "../schemas/schedules.schema";
import {
  verifyAddressExistsInSchedule,
  verifyRealEstatesSchedulesExists,
  verifyUserSchedulesExists,
} from "../middlewares/schedules.middleware";

export const schedulesRoute: Router = Router();

schedulesRoute.post(
  "/",
  verifyToken,
  validateBody(createScheduleSchema),
  verifyAddressExistsInSchedule,
  verifyRealEstatesSchedulesExists,
  verifyUserSchedulesExists,
  createScheduleController
);
schedulesRoute.get(
  "/realEstate/:id",
  verifyToken,
  verifyAdmin,
  readAllSchedulesRealEstateController
);
