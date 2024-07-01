import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetodoPagoEntity } from './metodo_pago.entity';
import { MetodoPagoRepository } from './metodo_pago.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class MetodoPagoService {

    constructor(
        @InjectRepository(MetodoPagoEntity)
        private readonly metodoPagoRepository: MetodoPagoRepository
    ) { }


    async getAllMetodos(): Promise<MetodoPagoEntity[]> {
        const metodo_pago = await this.metodoPagoRepository.createQueryBuilder('metodo_pago')
            .select(['metodo_pago'])
            .getMany()
        if(!metodo_pago.length) throw new NotFoundException(new MessageDto('No hay metodos de pago'))
        return metodo_pago
    }

    
}
