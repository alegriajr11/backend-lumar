import { Controller, Get, UseGuards } from '@nestjs/common';
import { SubcategoriaService } from './subcategoria.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('subcategoria')
export class SubcategoriaController {

    constructor(
        private readonly subcategoriaService: SubcategoriaService
    ){}

    //@UseGuards(JwtAuthGuard)
    @Get()
    async getAllSubcategorias() {
        return await this.subcategoriaService.getAllSubcategorias()
    }
}
