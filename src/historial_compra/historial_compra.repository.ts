import { EntityRepository, Repository } from "typeorm";
import { HistorialCompraEntity } from "./historial_compra.entity";

@EntityRepository(HistorialCompraEntity)
export class HistorialCompraRepository extends Repository<HistorialCompraEntity>{

}