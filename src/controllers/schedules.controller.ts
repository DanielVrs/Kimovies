import { Request, Response } from "express";
import { RealEstate } from "../entities";
import {
  createScheduleService,
  readAllSchedulesRealEstateService,
} from "../services/schedules.service";

export const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { sub } = res.locals.decoded;
  await createScheduleService(req.body, sub);
  return res.status(201).json({ message: "Schedule created" });
};

export const readAllSchedulesRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const realEstate: RealEstate = await readAllSchedulesRealEstateService(Number(id));
  return res.status(200).json(realEstate);
};
