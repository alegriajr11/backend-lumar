import { IsString } from "class-validator";

export class MetodoPagoDto{

    @IsString()
    met_nombre: string

    @IsString()
    stripeMethodId: string

}