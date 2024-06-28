import { IsArray, IsString, MaxLength } from "class-validator";

export class SubCategoriaDto {

    @IsString()
    @MaxLength(70, { message: 'Nombre de la sección máximo 70 caracteres' })
    sub_nombre: string

    @IsArray()
    categoria: number[]; // Supongo que los roles son representados por IDs
}