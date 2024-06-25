import { IsArray, IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class UsuarioDto {
    
    @IsString()
    @MaxLength(15, {message: 'identificación: longitud maxima de 15 caracteres'})
    usu_identifiacion: string;

    @IsString()
    @MaxLength(20, {message: 'nombre: longitud máxima de 20'})
    usu_nombre: string;

    @IsString()
    @MaxLength(20, {message: 'apellido: longitud máxima de 20'})
    usu_apellido: string;

    @IsString()
    @MaxLength(30, {message: 'email: longitud máxima de 30'})
    usu_email: string;

    @IsNotBlank({message: 'el nombre de usuario no puede estar vacio'})
    @MaxLength(10, {message: 'nombre de usuario: longitud máxima de 10'})
    usu_nombreUsuario: string;

    @IsNotBlank({ message: 'La contraseña del usuario no puede estar vacia' })
    usu_password: string;
    
    @IsString()
    usu_estado: string;

    @IsArray()
    roles: number[]; // Supongo que los roles son representados por IDs

}