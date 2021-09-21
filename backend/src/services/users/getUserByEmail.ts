import { getCustomRepository, getRepository } from "typeorm";
import User from "../../typeorm/entities/Users";
import UserRepository from '../../typeorm/repositories/UserRespository'

export default async function getUserEmailFromGoogle(
  email: string
): Promise<User | undefined> {
  const usersRepository = getCustomRepository(UserRepository);

  const user = await usersRepository.findByEmail(email);

  return user
}
