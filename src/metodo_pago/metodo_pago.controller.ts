import { Controller, Get, UseGuards } from '@nestjs/common';
import { MetodoPagoService } from './metodo_pago.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('metodo-pago')
export class MetodoPagoController {

    constructor(private readonly metodoPagoService: MetodoPagoService){}

    //@UseGuards(JwtAuthGuard)
    @Get()
    getAllMetodos(){
        return this.metodoPagoService.getAllMetodos();
    }
}
