import { EntityRepository, Repository } from "typeorm";
import Office from "../entities/Office";

@EntityRepository(Office)
class OfficeRepository extends Repository<Office> {
  public async findByName(name: string): Promise<Office | undefined> {
    const office = await this.findOne({
      where: {
        name,
      },
    });

    return office;
  }
}

export default OfficeRepository;
