import { EntityRepository, Repository } from "typeorm";
import { MetodoPagoEntity } from "./metodo_pago.entity";

@EntityRepository(MetodoPagoEntity)
export class MetodoPagoRepository extends Repository<MetodoPagoEntity>{

}