import { Request, Response } from "express";
import { LoginReturn } from "../interfaces/users.interface";
import { loginService } from "../services/login.service";

export const loginController = async (req: Request, res: Response): Promise<Response> => {
  const token: LoginReturn = await loginService(req.body);
  return res.status(200).json(token);
};
