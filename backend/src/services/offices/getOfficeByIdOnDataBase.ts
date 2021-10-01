import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../config/AppError";
import Office from "../../typeorm/entities/Office";
import OfficeRepository from "../../typeorm/repositories/OfficeRepository";

export default async function getOfficeByIdOnDataBase(
  id: string
): Promise<Office> {
  const officeRepository = getCustomRepository(OfficeRepository);

  const office = await officeRepository.findById(id);

  if (!office) {
    throw new AppError("Office does not exists");
  }

  return office;
}
