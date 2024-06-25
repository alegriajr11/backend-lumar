import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UbicacionService {

    private apiToken = 'bx2kE0HludwvzhI0ewGMSu745zb0l5MqfP4hIIICkCLH_z146QQyETwhPbHNvrGrB-4';
    private userEmail = 'alegria.samir@yahoo.com';
    private authToken: string;

    //METODO PARA OBTENER TOKEN DE AUTENTICACION A LA API
    async getAccessToken(): Promise<string> {
        const response = await axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
            headers: {
                Accept: 'application/json',
                'api-token': this.apiToken,
                'user-email': this.userEmail
            }
        });
        this.authToken = response.data.auth_token;
        return this.authToken;
    }

    //OBTENER LOS PAISES
    async getCountries(): Promise<any> {
        //Llamar al metodo para obtener acceso al token de autenticacion
        await this.getAccessToken();
        // Usar el token para obtener la lista de países
        const countriesResponse = await axios.get('https://www.universal-tutorial.com/api/countries/', {
            headers: {
                Authorization: `Bearer ${this.authToken}`,
                Accept: 'application/json'
            }
        });

        return countriesResponse.data;
    }

    //OBTENER ESTADOS/DEPARTAMENTOS DEL PAIS
    async getStates(nombre_pais: string): Promise<any> {
        //Llamar al metodo para obtener acceso al token de autenticacion
        await this.getAccessToken();

        // Usar el token para obtener la lista de estados del pais
        const statesResponse = await axios.get(`https://www.universal-tutorial.com/api/states/${nombre_pais}`, {
            headers: {
                Authorization: `Bearer ${this.authToken}`,
                Accept: 'application/json'
            }
        });

        return statesResponse.data;
    }

    //OBTENER CIUDADES DEL ESTADO/DEPARTAMENTO
    async getCities(nombre_estado: string): Promise<any> {
        //Llamar al metodo para obtener acceso al token de autenticacion
        await this.getAccessToken();

        // Usar el token para obtener la lista de estados del pais
        const citiesResponse = await axios.get(`https://www.universal-tutorial.com/api/cities/${nombre_estado}`, {
            headers: {
                Authorization: `Bearer ${this.authToken}`,
                Accept: 'application/json'
            }
        });

        return citiesResponse.data;
    }

}
