import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { SeccionDto } from './dto/seccion.dto';

@Controller('seccion')
export class SeccionController {

    constructor(private readonly seccionService: SeccionService) { }

    //@UseGuards(JwtAuthGuard)
    @Get()
    async getAllSeccion() {
        return await this.seccionService.getAllSeccion();
    }

    //SOLICITUD CREAR SECCION
    @UseGuards(JwtAuthGuard)
    @Post()
    async createSeccion(@Body() createSeccionDto: SeccionDto) {
        try {
            return await this.seccionService.createSeccion(createSeccionDto);
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException('Ocurrió un error al crear la sección');
        }
    }

    //SOLICITUD ELIMINAR SECCION
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteSeccion(@Param('id', ParseIntPipe) id: number) {
        return await this.seccionService.eliminarSeccion(id)
    }

    //ACTUALIZAR SECCION
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: SeccionDto) {
        return await this.seccionService.actualizarSeccion(id, dto);
    }

}
