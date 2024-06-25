import { Module } from '@nestjs/common';
import { CarritoCompraController } from './carrito_compra.controller';
import { CarritoCompraService } from './carrito_compra.service';

@Module({
  controllers: [CarritoCompraController],
  providers: [CarritoCompraService]
})
export class CarritoCompraModule {}
