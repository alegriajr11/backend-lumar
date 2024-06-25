import { Module } from '@nestjs/common';
import { MetodoPagoController } from './metodo_pago.controller';
import { MetodoPagoService } from './metodo_pago.service';

@Module({
  controllers: [MetodoPagoController],
  providers: [MetodoPagoService]
})
export class MetodoPagoModule {}
