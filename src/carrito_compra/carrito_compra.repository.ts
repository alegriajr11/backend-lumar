import { EntityRepository, Repository } from "typeorm";
import { CarritoCompraEntity } from "./carrito_compra.entity";

@EntityRepository(CarritoCompraEntity)
export class CarritoCompraRepository extends Repository<CarritoCompraEntity>{

}