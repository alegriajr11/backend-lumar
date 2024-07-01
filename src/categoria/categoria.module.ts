import { Module } from '@nestjs/common';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEntity } from './categoria.entity';
import { SeccionEntity } from 'src/seccion/seccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEntity, SeccionEntity])],
  controllers: [CategoriaController],
  providers: [CategoriaService]
})
export class CategoriaModule {}
