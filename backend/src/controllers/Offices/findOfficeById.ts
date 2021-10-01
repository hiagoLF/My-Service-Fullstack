import { Request, Response } from "express";
import getOfficeByIdOnDataBase from "../../services/offices/getOfficeByIdOnDataBase";

export default async function findOfficeById(req: Request, res: Response) {
  const { id } = req.params;
  const office = await getOfficeByIdOnDataBase(id)
  return res.status(200).json(office)
}
