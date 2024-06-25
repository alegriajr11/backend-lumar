import { IsDate, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class PromocionDto {

    @IsString()
    @MaxLength(255, { message: 'Descripción: longitud máxima de 255 caracteres' })
    prom_descripcion: string

    @IsNotBlank({ message: 'el nombre no puede estar vacio' })
    @IsString()
    @MaxLength(100, { message: 'nombre: longitud máxima de 100' })
    pre_nombre: string;

    @IsDate()
    @IsNotBlank({ message: 'la fecha inicial de la promocion no puede estar vacia' })
    prom_fecha_inicio: string;

    @IsDate()
    @IsNotBlank({ message: 'la fecha final de la promocion no puede estar vacia' })
    prom_fecha_final: string;


}