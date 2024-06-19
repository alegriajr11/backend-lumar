import { Module } from '@nestjs/common';
import { DescuentoController } from './descuento.controller';
import { DescuentoService } from './descuento.service';

@Module({
  controllers: [DescuentoController],
  providers: [DescuentoService]
})
export class DescuentoModule {}
