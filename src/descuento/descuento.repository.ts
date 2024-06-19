import { EntityRepository, Repository } from "typeorm";
import { DescuentoEntity } from "./descuento.entity";

@EntityRepository(DescuentoEntity)
export class DescuentoRepository extends Repository<DescuentoEntity> {
        
}