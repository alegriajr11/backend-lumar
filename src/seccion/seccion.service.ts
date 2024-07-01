import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeccionEntity } from './seccion.entity';
import { MessageDto } from 'src/common/message.dto';
import { SeccionDto } from './dto/seccion.dto';
import { CategoriaEntity } from 'src/categoria/categoria.entity';

@Injectable()
export class SeccionService {

    constructor(
        @InjectRepository(SeccionEntity)
        private readonly seccionRepository,
        @InjectRepository(CategoriaEntity)
        private readonly categoriaRepository
    ) { }

    //LISTAR TODAS LAS SECCIONES
    async getAllSeccion(): Promise<SeccionEntity[]> {
        const seccion = await this.seccionRepository.createQueryBuilder('seccion')
            .select(['seccion'])
            .getMany()
        if (!seccion.length) throw new NotFoundException(new MessageDto('No hay secciiones en la lista'))
        return seccion
    }

    //CREAR SECCION
    async createSeccion(dto: SeccionDto): Promise<any> {
        const seccion = await this.seccionRepository.findOne({ where: { secc_nombre: dto.secc_nombre } });
        if (seccion) throw new BadRequestException('Esa seccion ya existe');
        await this.seccionRepository.save(dto as SeccionEntity);
        return new MessageDto('Seccion creada');
    }

    //ENCONTRAR UNA SECCION
    async findBySeccion(secc_id: number): Promise<SeccionEntity> {
        const seccion = await this.seccionRepository.findOne({ where: { secc_id } })
        if (!seccion) {
            throw new NotFoundException(new MessageDto('La Seccion no Existe'));
        }
        return seccion
    }

    // ELIMINAR SECCION
    async eliminarSeccion(secc_id: number): Promise<any> {
        const seccion = await this.findBySeccion(secc_id);

        //Verificar si esa seccion esta en categoria
        const categoria = await this.categoriaRepository.findOne({ where: { seccion: { secc_id } } });
        if (categoria) {
            throw new BadRequestException('La sección no se puede eliminar porque está siendo usada en una categoría.');
        }
        await this.seccionRepository.delete(seccion.secc_id);
        return new MessageDto('Seccion eliminada');
    }


    //ACTUALIZAR SECCION
    async actualizarSeccion(secc_id: number, dto: SeccionDto): Promise<any> {

        const seccion = await this.findBySeccion(secc_id);

        dto.secc_nombre ? seccion.secc_nombre = dto.secc_nombre : seccion.secc_nombre = seccion.secc_nombre;

        await this.seccionRepository.save(seccion);

        return new MessageDto(`La sección ha sido Actualizada`);
    }
}
