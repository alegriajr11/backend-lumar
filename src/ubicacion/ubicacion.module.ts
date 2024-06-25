import { Module } from '@nestjs/common';
import { UbicacionController } from './ubicacion.controller';
import { UbicacionService } from './ubicacion.service';

@Module({
  controllers: [UbicacionController],
  providers: [UbicacionService]
})
export class UbicacionModule {}
