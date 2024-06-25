import { EntityRepository, Repository } from "typeorm";
import { SeguimientoPedidoEntity } from "./seguimiento_pedido.entity";

@EntityRepository(SeguimientoPedidoEntity)
export class SeguiminetoPedidoRepository extends Repository<SeguimientoPedidoEntity> {
        
}