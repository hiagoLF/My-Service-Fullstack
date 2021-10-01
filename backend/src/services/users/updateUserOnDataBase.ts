import { getRepository } from "typeorm";
import User from "../../typeorm/entities/Users";

export default async function updateUserOnDataBase(user: User): Promise<User> {
  const usersRepository = getRepository(User);

  const updatedUser = await usersRepository.save(user);

  return updatedUser;
}
