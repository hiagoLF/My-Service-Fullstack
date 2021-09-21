import { Request, Response } from "express";
import createNewOfficeInDataBase from "../../services/offices/createNewOfficeInDataBase";

export default async function createNewOffice(req: Request, res: Response) {
  const { name, imageUrl } = req.body;

  const newOffice = await createNewOfficeInDataBase({ name, imageUrl });

  return res.status(200).json(newOffice);
}
