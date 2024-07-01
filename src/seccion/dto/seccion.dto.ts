import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class SeccionDto {

    @IsString()
    @IsNotEmpty({ message: 'El nombre de la sección no puede estar vacío' })
    @MaxLength(70, { message: 'Nombre de la sección máximo 70 caracteres' })
    secc_nombre: string

    constructor(secc_nombre: string) {
        this.secc_nombre = secc_nombre;
    }
}