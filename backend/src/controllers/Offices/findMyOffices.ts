import { Request, Response } from "express";
import findOfficesOfUserByUserId from "../../services/offices/findOfficesOfUserByUserId";

export default function findMyOffices(req: Request, res: Response) {
  const { user } = req;
  const offices = findOfficesOfUserByUserId(user.id);
  return res.status(200).json(offices);
}
