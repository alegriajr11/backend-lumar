import { Module } from '@nestjs/common';
import { SeccionController } from './seccion.controller';
import { SeccionService } from './seccion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeccionEntity } from './seccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeccionEntity])],
  controllers: [SeccionController],
  providers: [SeccionService]
})
export class SeccionModule {}
