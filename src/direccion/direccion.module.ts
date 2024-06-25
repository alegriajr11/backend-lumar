import { Module } from '@nestjs/common';
import { DireccionController } from './direccion.controller';
import { DireccionService } from './direccion.service';

@Module({
  controllers: [DireccionController],
  providers: [DireccionService]
})
export class DireccionModule {}
