import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErrors.error";
import { RealEstate, Schedule } from "../entities";
import { realEstateRepo, scheduleRepo } from "../repositories";

export const verifyAddressExistsInSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId } = req.body;

  const realEstate: RealEstate | null = await realEstateRepo.findOneBy({
    id: Number(realEstateId),
  });

  if (!realEstate) throw new AppError("RealEstate not found", 404);

  return next();
};

export const verifyRealEstatesSchedulesExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId, hour, date } = req.body;

  const schedules: Schedule | null = await scheduleRepo.findOne({
    where: {
      realEstate: {
        id: Number(realEstateId),
      },
      date,
      hour,
    },
  });

  if (schedules)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};

export const verifyUserSchedulesExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let { sub } = res.locals.decoded;
  sub = Number(sub);

  const { hour, date } = req.body;

  const schedules: Schedule | null = await scheduleRepo.findOne({
    where: {
      user: {
        id: sub,
      },
      date,
      hour,
    },
  });

  if (schedules)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};
