import { MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class LoginUsuarioDto {

    @IsNotBlank({message: 'el nombre de usuario no puede estar vacio'})
    @MaxLength(10, {message: 'nombre de usuario: longitud máxima de 10'})
    usu_nombreUsuario: string;


    @IsNotBlank({message: 'la contraseña del usuario no puede estar vacia'})
    usu_password: string;
}