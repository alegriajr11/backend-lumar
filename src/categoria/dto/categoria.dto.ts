import { IsArray, IsString, MaxLength } from "class-validator";

export class CategoriaDto {

    @IsString()
    @MaxLength(70, { message: 'Nombre de la sección máximo 70 caracteres' })
    cat_nombre: string

    @IsArray()
    seccion: number[]; // Supongo que los roles son representados por IDs
}