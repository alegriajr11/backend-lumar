import { EntityRepository, Repository } from "typeorm";
import { SeccionEntity } from "./seccion.entity";

@EntityRepository(SeccionEntity)
export class SeccionRepository extends Repository<SeccionEntity> {
        
}