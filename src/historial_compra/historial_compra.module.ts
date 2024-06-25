import { Module } from '@nestjs/common';
import { HistorialCompraController } from './historial_compra.controller';
import { HistorialCompraService } from './historial_compra.service';

@Module({
  controllers: [HistorialCompraController],
  providers: [HistorialCompraService]
})
export class HistorialCompraModule {}
