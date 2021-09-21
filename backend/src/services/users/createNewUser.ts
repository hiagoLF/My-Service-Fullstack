import { getRepository } from "typeorm";
import User from "../../typeorm/entities/Users";

type createUserProps = {
  email: string;
  name?: string;
  imageUrl?: string;
};

export default async function createNewUser({
  email,
  name,
  imageUrl,
}: createUserProps): Promise<User | undefined> {
  const userRepository = getRepository(User);

  const newUser = await userRepository.save({ email, name, imageUrl });

  if (!newUser) return undefined;

  return newUser;
}
