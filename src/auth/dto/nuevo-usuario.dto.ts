/* eslint-disable prettier/prettier */
import { IsEmail, IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";



export class NuevoUsuarioDto {

    @IsNotBlank({ message: "Cédula no puede estar vacia" })
    @IsString()
    @MaxLength(15, { message: "Cédula: Longitud máxima de 15" })
    usu_identifiacion: string

    @IsNotBlank({ message: "El nombre no puede estar vacio" })
    @IsString()
    @MaxLength(20, { message: "Nombre: Longitud máxima de 20" })
    usu_nombre: string;

    @IsNotBlank({ message: "El apellido no puede estar vacio" })
    @IsString()
    @MaxLength(20, { message: 'Apellido: Longitud máxima de 20' })
    usu_apellido: string;

    @IsNotBlank({ message: 'El email no puede estar vacio' })
    @IsEmail({}, { message: 'Email no valido' })
    usu_email: string;

    @IsNotBlank({ message: 'El nombre de usuario no puede estar vacio' })
    @MaxLength(10, { message: 'Nombre de usuario: Longitud máxima de 10' })
    usu_nombreUsuario: string;

    @IsNotBlank({ message: 'La contraseña del usuario no puede estar vacia' })
    usu_password: string;


}

