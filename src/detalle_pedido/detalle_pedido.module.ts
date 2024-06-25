import { Module } from '@nestjs/common';
import { DetallePedidoController } from './detalle_pedido.controller';
import { DetallePedidoService } from './detalle_pedido.service';

@Module({
  controllers: [DetallePedidoController],
  providers: [DetallePedidoService]
})
export class DetallePedidoModule {}
