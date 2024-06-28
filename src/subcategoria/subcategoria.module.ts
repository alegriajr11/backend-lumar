import { Module } from '@nestjs/common';
import { SubcategoriaController } from './subcategoria.controller';
import { SubcategoriaService } from './subcategoria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubcategoriaEntity } from './subcategoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubcategoriaEntity])],
  controllers: [SubcategoriaController],
  providers: [SubcategoriaService]
})
export class SubcategoriaModule {}
