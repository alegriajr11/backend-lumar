import { EntityRepository, Repository } from "typeorm";
import { PedidoEntity } from "./pedido.entity";

@EntityRepository(PedidoEntity)
export class PedidoRepository extends Repository<PedidoEntity>{

}