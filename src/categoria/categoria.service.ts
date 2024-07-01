import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaRepository } from './categoria.repository';
import { MessageDto } from 'src/common/message.dto';
import { SeccionDto } from 'src/seccion/dto/seccion.dto';
import { CategoriaDto } from './dto/categoria.dto';
import { SeccionRepository } from 'src/seccion/seccion.repository';
import { SeccionEntity } from 'src/seccion/seccion.entity';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(CategoriaEntity)
        private readonly categoriaRepository: CategoriaRepository,
        @InjectRepository(SeccionEntity)
        private readonly seccionRepository: SeccionRepository
    ) { }

    //LISTANDO CATEGORIAS
    async getAllCategorias(): Promise<CategoriaEntity[]> {
        const categoria = await this.categoriaRepository.createQueryBuilder('categoria')
            .select(['categoria', 'seccion.secc_nombre'])
            .innerJoin('categoria.seccion', 'seccion')
            .orderBy('seccion.secc_nombre', 'ASC')
            .getMany()
        if (!categoria.length) throw new NotFoundException(new MessageDto('No hay categorias en la lista'))
        return categoria
    }

    //ENCONTRAR UNA CATEGORIA
    async findByCategoria(cat_id: number): Promise<CategoriaEntity> {
        const categoria = await this.categoriaRepository.findOne({ where: { cat_id } })
        if (!categoria) {
            throw new NotFoundException(new MessageDto('La Categoria no Existe'));
        }
        return categoria
    }

    //ELIMINAR UNA CATEGORIA
    async eliminarCategoria(cat_id: number): Promise<any> {
        const categoria = await this.findByCategoria(cat_id);

        await this.categoriaRepository.delete(categoria.cat_id);
        return new MessageDto('Categoria eliminada');
    }

    //CREAR CATEGORIA
    async createCategoria(dto: CategoriaDto): Promise<MessageDto> {
        const { cat_nombre, seccionId } = dto;
        if (!cat_nombre) {
            throw new BadRequestException('El nombre de la categoría no puede ser vacio');
        } else if (!seccionId) {
            throw new BadRequestException('Debes escoger una sección');
        }

        const seccion = await this.seccionRepository.findOne({ where: { secc_id: seccionId } });
        if (!seccion) {
            throw new BadRequestException('La sección proporcionada no es válida');
        }

        const categoria = this.categoriaRepository.create(dto);
        categoria.seccion = seccion;
        await this.categoriaRepository.save(categoria);

        return new MessageDto('La categoría ha sido creada');
    }
}
