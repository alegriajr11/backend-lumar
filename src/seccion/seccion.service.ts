import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeccionEntity } from './seccion.entity';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class SeccionService {

    constructor(
        @InjectRepository(SeccionEntity)
        private readonly seccionRepository
    ) { }

    //LISTAR TODAS LAS SECCIONES
    async getAllSeccion(): Promise<SeccionEntity[]> {
        const seccion = await this.seccionRepository.createQueryBuilder('seccion')
            .select(['seccion'])
            .getMany()
        if(!seccion.length) throw new NotFoundException(new MessageDto('No hay secciiones en la lista'))
        return seccion
    }
}
