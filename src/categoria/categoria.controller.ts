import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('categoria')
export class CategoriaController {

    constructor(
        private readonly categoriaServices: CategoriaService
    ){}

    //@UseGuards(JwtAuthGuard) //GUARD PARA SOLO ACEPTAR SOLICITUD SI ESTÁ LOGUEADO
    @Get()
    async getAllCategorias(){
        return await this.categoriaServices.getAllCategorias();
    }

}
