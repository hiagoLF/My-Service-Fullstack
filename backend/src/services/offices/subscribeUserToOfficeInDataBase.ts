import Office from "../../typeorm/entities/Office";
import User from "../../typeorm/entities/Users";
import updateUserOnDataBase from "../users/updateUserOnDataBase";
import getOfficeByIdOnDataBase from "./getOfficeByIdOnDataBase";

export default async function subscribeUserToOfficeInDataBase(
  user: User,
  officeId: string
): Promise<User> {
  const office = await getOfficeByIdOnDataBase(officeId);

  user.offices.push(office);

  const updatedUser = await updateUserOnDataBase(user);

  return updatedUser;
}
