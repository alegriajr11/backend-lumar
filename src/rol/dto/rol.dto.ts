/* eslint-disable prettier/prettier */

import { IsEnum } from "class-validator";
import { RolNombre } from "../rol.enum";

export class CreateRolDto {
    
    @IsEnum(RolNombre, {message: 'el rol solo puede ser admin, sic, sp, pamec o res'})
    rol_nombre: RolNombre;
    
}