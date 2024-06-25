import { EntityRepository, Repository } from "typeorm";
import { DetallePedidoEntity } from "./detalle_pedido.entity";

@EntityRepository(DetallePedidoEntity)
export class DetallePedidoRepository extends Repository<DetallePedidoEntity>{

}