import { Module } from '@nestjs/common';
import { MetodoPagoController } from './metodo_pago.controller';
import { MetodoPagoService } from './metodo_pago.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPagoEntity } from './metodo_pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoPagoEntity])],
  controllers: [MetodoPagoController],
  providers: [MetodoPagoService]
})
export class MetodoPagoModule {}
