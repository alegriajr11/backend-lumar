import { EntityRepository, Repository } from "typeorm";
import { RolEntity } from "./rol.entity";

@EntityRepository(RolEntity)
export class RolRepository extends Repository<RolEntity> {

}