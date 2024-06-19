import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoEntity } from './producto.entity';
import { ProductoRepository } from './producto.repository';

@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(ProductoEntity) private productoRepository: ProductoRepository
    ) { }

    async getAll(): Promise<ProductoEntity[]>{
        const producto_lista = await this.productoRepository.find();
        if (!producto_lista.length){
            throw new NotFoundException({message: 'No hay productos en la lista'})
        }
        return producto_lista
    }

    async findById(prod_id: number): Promise<ProductoEntity>{
        const producto = await this.productoRepository.findOne({ where: { prod_id: prod_id } });
        if(!producto){
            throw new NotFoundException({message: 'No Existe'})
        }
        return producto
    } 
}
