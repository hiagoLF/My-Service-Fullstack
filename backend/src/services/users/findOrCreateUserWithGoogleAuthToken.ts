import AppError from "../../config/AppError";
import User from "../../typeorm/entities/Users";
import getUserProfileFromGoogle from "../google/getUserEmailFromGoogle";
import createNewUser from "./createNewUser";
import getUserByEmail from "./getUserByEmail";

export default async function findOrCreateUserWithGoogleAuthToken(
  token: string
): Promise<User | undefined> {
  const { email, name, imageUrl } = await getUserProfileFromGoogle(token);

  if (!email) {
    throw new AppError("Failed to get user email");
  }

  const userOnDataBase = await getUserByEmail(email);

  if (userOnDataBase) {
    return userOnDataBase;
  }

  const newUser = await createNewUser({ email, name, imageUrl });

  if (!newUser) {
    throw new AppError("Failed on user creation", 400);
  }

  return newUser
}
