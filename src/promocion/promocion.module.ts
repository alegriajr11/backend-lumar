import { Module } from '@nestjs/common';
import { PromocionController } from './promocion.controller';
import { PromocionService } from './promocion.service';

@Module({
  controllers: [PromocionController],
  providers: [PromocionService]
})
export class PromocionModule {}
