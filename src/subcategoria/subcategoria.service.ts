import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubcategoriaEntity } from './subcategoria.entity';
import { SubcategoriaRepository } from './subcategoria.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class SubcategoriaService {

    constructor(
        @InjectRepository(SubcategoriaEntity)
        private readonly subcategoriaRepository: SubcategoriaRepository
    ) { }

    //Listando todas las subcategorias
    async getAllSubcategorias(): Promise<SubcategoriaEntity[]> {
        const subcategoria = await this.subcategoriaRepository.createQueryBuilder('subcategoria')
            .select(['subcategoria', 'categoria.cat_nombre'])
            .innerJoin('subcategoria.categoria', 'categoria')
            .getMany()
        if(!subcategoria.length) throw new NotFoundException(new MessageDto('No hay subcategorias en la lista'));
        return subcategoria
    }

    
}
