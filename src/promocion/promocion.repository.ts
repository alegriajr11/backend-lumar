import { EntityRepository, Repository } from "typeorm";
import { PromocionEntity } from "./promocion.entity";

@EntityRepository(PromocionEntity)
export class PromocionRepository extends Repository<PromocionEntity> {
        
}