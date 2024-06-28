import { IsString, MaxLength } from "class-validator";

export class SeccionDto {

    @IsString()
    @MaxLength(70, {message: 'Nombre de la sección máximo 70 caracteres'})
    secc_nombre: string
}