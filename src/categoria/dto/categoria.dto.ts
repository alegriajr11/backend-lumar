import { IsArray, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CategoriaDto {

    @IsString()
    @IsNotEmpty( { message: 'El nombre de la categoria no puede estar vacio'})
    @MaxLength(70, { message: 'Nombre de la sección máximo 70 caracteres' })
    cat_nombre: string

    @IsNumber()
    @IsNotEmpty({ message: 'Debes escoger una seccion'})
    seccionId: number; // ID de la sección
}