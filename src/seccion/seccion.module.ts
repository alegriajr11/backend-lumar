import { Module } from '@nestjs/common';
import { SeccionController } from './seccion.controller';
import { SeccionService } from './seccion.service';

@Module({
  controllers: [SeccionController],
  providers: [SeccionService]
})
export class SeccionModule {}
