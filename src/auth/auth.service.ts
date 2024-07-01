import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolEntity } from 'src/rol/rol.entity';
import { RolRepository } from 'src/rol/rol.repository';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { UsuarioRepository } from 'src/usuario/usuario.repository';
import { UsuarioService } from 'src/usuario/usuario.service';
import { EncoderService } from './encoder.service';
import { JwtService } from '@nestjs/jwt';
import { MessageDto } from 'src/common/message.dto';
import { PayloadInterface } from './payload.interface';
import { RolNombre } from 'src/rol/rol.enum';
import { LoginUsuarioDto } from './dto/login.dto';
import { compare } from 'bcrypt';
import { TokenDto } from './dto/token.dto';
import { v4 } from 'uuid';
import { RessetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';


@Injectable()
export class AuthService {

    constructor(

        @InjectRepository(RolEntity)
        private readonly rolRepository: RolRepository,
        @InjectRepository(UsuarioEntity)
        private readonly authRepository: UsuarioRepository,
        private readonly jwtService: JwtService,
        private readonly usuarioService: UsuarioService,
        private readonly encoderService: EncoderService,
    ) { }


    //OBTENER LOS USUARIOS DEL SISTEMA
    async getallUsers(): Promise<UsuarioEntity[]> {
        const usuario = await this.authRepository.find();
        if (!usuario.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return usuario;
    }


    //METODO LOGIN USUARIO
    async login(dto: LoginUsuarioDto): Promise<any> {
        try {
            const { usu_nombreUsuario } = dto;
            const usuario = await this.authRepository.findOne({
                where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_nombreUsuario }],
            });
            if (!usuario) {
                throw new UnauthorizedException(new MessageDto('El usuario no existe'));
            }
            const passordOK = await compare(dto.usu_password, usuario.usu_password);
            if (!passordOK) {
                throw new UnauthorizedException(new MessageDto('Contraseña Incorrecta'));
            }
            
            const payload: PayloadInterface = {
                usu_id: usuario.usu_id,
                usu_nombre: usuario.usu_nombre,
                usu_apellido: usuario.usu_apellido,
                usu_nombreUsuario: usuario.usu_nombreUsuario,
                usu_email: usuario.usu_email,
                usu_estado: usuario.usu_estado,
                usu_roles: usuario.roles.map((rol) => rol.rol_nombre as RolNombre),
            };

            const token = await this.jwtService.sign(payload, { expiresIn: '1h' }); // El token expirará en 1 hora

            if (payload.usu_estado == 'false') {
                throw new UnauthorizedException(new MessageDto('Acceso Denegado Comunicarse con el Administrador'));
            }

            return { token };
        } catch (error) {
            // Capturamos y manejamos la excepción
            throw error;
        }
    }



    //METODO REFRESH TOKEN
    async refresh(dto: TokenDto): Promise<any> {
        const usuario = await this.jwtService.decode(dto.token);
        const payload: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        }
        const token = await this.jwtService.sign(payload);
        return { token };
    }


    //SOLICITUD RESTABLECER CONTRASEÑA
    async requestResetPassword(usu_id: number): Promise<void> {
        try {
            const usuario: UsuarioEntity = await this.usuarioService.findById(usu_id);

            if (!usuario) {
                // Si el usuario no se encuentra, lanzamos una excepción NotFoundException
                throw new NotFoundException('Usuario no encontrado');
            }

            // Generamos un token y lo asignamos al usuario
            usuario.resetPasswordToken = v4();

            // Guardamos los cambios en la base de datos
            await this.authRepository.save(usuario);
        } catch (error) {
            // Capturamos y manejamos la excepción
            console.error('Error en requestResetPassword:', error);
            throw error;
        }
    }



    //METODO REESTABLECER CONTRASEÑA
    async resetPassword(resetPasswordDto: RessetPasswordDto): Promise<any> {
        try {
            const { resetPasswordToken, password } = resetPasswordDto;

            // Intenta buscar el usuario por el token
            const usuario: UsuarioEntity = await this.usuarioService.findOneByResetPasswordToken(resetPasswordToken);

            if (!usuario) {
                // El usuario no fue encontrado, puedes lanzar una excepción personalizada
                throw new Error('El token de restablecimiento de contraseña no es válido');
            }

            // Cambia la contraseña y elimina el token de restablecimiento
            usuario.usu_password = await this.encoderService.encodePassword(password);
            usuario.resetPasswordToken = null;

            // Guarda los cambios en la base de datos
            await this.authRepository.save(usuario);

            return new MessageDto('Contraseña Restablecida');
        } catch (error) {
            // Captura y maneja la excepción
            console.error('Error en resetPassword:', error);
            throw error;
        }
    }

    //METODO CAMBIAR CONTRASEÑA

    async changePassword(changePasswordDto: ChangePasswordDto, usuario: UsuarioEntity): Promise<any> {
        try {
            const { oldPassword, newPassword } = changePasswordDto;

            // Verificamos si la contraseña antigua coincide
            if (await this.encoderService.checkPassword(oldPassword, usuario.usu_password)) {
                // Cambiamos la contraseña
                usuario.usu_password = await this.encoderService.encodePassword(newPassword);

                // Guardamos los cambios en la base de datos
                await this.authRepository.save(usuario);

                return new MessageDto('La contraseña ha sido cambiada exitosamente');
            } else {
                throw new BadRequestException('La contraseña antigua no es correcta');
            }
        } catch (error) {
            // Capturamos y manejamos la excepción
            console.error('Error en changePassword:', error);
            throw error;
        }
    }
}
