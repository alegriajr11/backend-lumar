import { Controller, Get, UseGuards } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('seccion')
export class SeccionController {

    constructor(private readonly seccionServicio: SeccionService){}

    //@UseGuards(JwtAuthGuard)
    @Get()
    async getAllSeccion(){
        return await this.seccionServicio.getAllSeccion();
    }
}
