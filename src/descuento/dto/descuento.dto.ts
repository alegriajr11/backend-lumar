import { IsDecimal, IsObject, IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";
import { PromocionEntity } from "src/promocion/promocion.entity";


export class DescuentoDto {

    @IsString()
    @MaxLength(255, { message: 'Descripción: longitud máxima de 255 caracteres' })
    desc_descripcion: string

    @IsDecimal()
    @IsNotBlank({ message: 'Debes asignar el porcentaje de descuento' })
    desc_porcentaje: number


    //ASIGNACIÓN DEL DESCUENTO AL QUE SE LE ASIGNARÁ LA PROMOCIÓN
    @IsObject({
        message: 'Debes asignarle el nombre de la promocion'
    })
    des_promocion: PromocionEntity;

}



