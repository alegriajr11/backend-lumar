import { Module } from '@nestjs/common';
import { SubcategoriaController } from './subcategoria.controller';
import { SubcategoriaService } from './subcategoria.service';

@Module({
  controllers: [SubcategoriaController],
  providers: [SubcategoriaService]
})
export class SubcategoriaModule {}
