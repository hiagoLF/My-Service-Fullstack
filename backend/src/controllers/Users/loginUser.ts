import { Request, Response } from "express";
import findOrCreateUserWithGoogleAuthToken from "../../services/users/findOrCreateUserWithGoogleAuthToken";
import AppError from "../../config/AppError";
import generateUserSessionToken from "../../services/users/generateUserSessionToken";

export default async function loginUser(req: Request, res: Response) {
  const { token } = req.body;

  const userLogged = await findOrCreateUserWithGoogleAuthToken(token);

  if (!userLogged) {
    throw new AppError("Login failed", 404);
  }

  const jwtToken = generateUserSessionToken(userLogged.id);

  return res.status(200).json({ message: "user logged", authToken: jwtToken });
}
