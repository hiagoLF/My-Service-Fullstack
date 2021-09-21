import { getCustomRepository } from "typeorm";
import AppError from "../../config/AppError";
import Office from "../../typeorm/entities/Office";
import OfficeRepository from "../../typeorm/repositories/OfficeRepository";

type CreateNewOfficeInDataBaseProps = {
  name: string;
  imageUrl: string;
};

export default async function createNewOfficeInDataBase({
  name,
  imageUrl,
}: CreateNewOfficeInDataBaseProps): Promise<Office | undefined> {
  const officeRepository = getCustomRepository(OfficeRepository);

  const existentOffice = await officeRepository.findByName(name);

  if (existentOffice) {
    throw new AppError("Office already exists");
  }

  console.log(name, imageUrl)

  const newOffice = await officeRepository.save({ name, imageUrl });

  return newOffice;
}
