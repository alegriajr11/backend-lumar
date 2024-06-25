import { Controller, Get, Param } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';

@Controller('ubicacion')
export class UbicacionController {

    constructor(private readonly ubicacionService: UbicacionService) { }

    //SOLICITUD LISTAR PAISES
    @Get('countries')
    async getCountries() {
        const countries = await this.ubicacionService.getCountries();
        return countries;
    }

    //SOLICITUD LISTAR ESTADOS/DEPARTAMENTOS DEL PAIS
    @Get('countrie/states/:pais')
    async getStates(@Param('pais') pais: string) {
        const states = await this.ubicacionService.getStates(pais);
        return states;
    }

    //SOLICITUD LISTAR ESTADOS/DEPARTAMENTOS DEL PAIS
    @Get('countrie/state/cities/:state')
    async getCities(@Param('state') state: string) {
        const cities = await this.ubicacionService.getCities(state);
        return cities;
    }


}
