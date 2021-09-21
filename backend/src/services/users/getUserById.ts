import { getCustomRepository } from "typeorm";
import AppError from "../../config/AppError";
import UserRepository from "../../typeorm/repositories/UserRespository";

export default async function getUserById(userId: string) {
  const usersRepository = getCustomRepository(UserRepository);
  const userData = await usersRepository.findById(userId);
  if (!userData) {
    throw new AppError("User not found", 404);
  }
  return userData;
}
