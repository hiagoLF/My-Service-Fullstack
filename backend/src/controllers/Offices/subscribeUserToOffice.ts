import { Request, Response } from "express";
import subscribeUserToOfficeInDataBase from "../../services/offices/subscribeUserToOfficeInDataBase";

export default async function subscribeUserToOffice(
  req: Request,
  res: Response
) {
  const { officeId } = req.params;
  const { user } = req;
  await subscribeUserToOfficeInDataBase(user, officeId);
  return res.status(200).json({ message: "user subscribed to office" });
}
