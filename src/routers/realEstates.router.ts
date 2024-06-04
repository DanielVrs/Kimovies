import { Router } from "express";
import {
  createRealEstateController,
  readAllRealEstateController,
} from "../controllers/realEstates.controller";
import { verifyAddressExistsInRealEstate } from "../middlewares/realEstates.middleware";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import { createRealEstateSchema } from "../schemas/realEstates.schema";

export const realStatesRoute: Router = Router();

realStatesRoute.post(
  "/",
  verifyToken,
  verifyAdmin,
  validateBody(createRealEstateSchema),
  verifyAddressExistsInRealEstate,
  createRealEstateController
);
realStatesRoute.get("/", readAllRealEstateController);
