import { Module } from '@nestjs/common';
import { SeguimientoPedidoController } from './seguimiento_pedido.controller';
import { SeguimientoPedidoService } from './seguimiento_pedido.service';

@Module({
  controllers: [SeguimientoPedidoController],
  providers: [SeguimientoPedidoService]
})
export class SeguimientoPedidoModule {}
