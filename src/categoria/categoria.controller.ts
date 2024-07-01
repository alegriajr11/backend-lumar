import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CategoriaDto } from './dto/categoria.dto';

@Controller('categoria')
export class CategoriaController {

    constructor(
        private readonly categoriaServices: CategoriaService
    ) { }

    //@UseGuards(JwtAuthGuard) //GUARD PARA SOLO ACEPTAR SOLICITUD SI ESTÁ LOGUEADO
    @Get()
    async getAllCategorias() {
        return await this.categoriaServices.getAllCategorias();
    }

    //SOLICITUD ELIMINAR SECCION
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteCategoria(@Param('id', ParseIntPipe) id: number) {
        return await this.categoriaServices.eliminarCategoria(id)
    }

    //SOLICITUD CREAR CATEGORIA
    @UseGuards(JwtAuthGuard)
    @Post()
    async createCategoria(@Body() createCategoriaDto: CategoriaDto) {
        try {
            return await this.categoriaServices.createCategoria(createCategoriaDto);
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException('Ocurrió un error al crear la categoria');
        }
    }

}
