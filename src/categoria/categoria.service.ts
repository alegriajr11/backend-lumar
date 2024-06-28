import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaRepository } from './categoria.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(CategoriaEntity)
        private readonly categoriaRepository: CategoriaRepository
    ) { }

    //LISTANDO CATEGORIAS
    async getAllCategorias(): Promise<CategoriaEntity[]> {
        const categoria = await this.categoriaRepository.createQueryBuilder('categoria')
            .select(['categoria', 'seccion.secc_nombre'])
            .innerJoin('categoria.seccion', 'seccion')
            .getMany()
        if(!categoria.length) throw new NotFoundException(new MessageDto('No hay categorias en la lista'))
        return categoria
    }
}
