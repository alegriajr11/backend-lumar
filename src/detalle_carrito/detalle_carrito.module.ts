import { Module } from '@nestjs/common';
import { DetalleCarritoController } from './detalle_carrito.controller';
import { DetalleCarritoService } from './detalle_carrito.service';

@Module({
  controllers: [DetalleCarritoController],
  providers: [DetalleCarritoService]
})
export class DetalleCarritoModule {}
