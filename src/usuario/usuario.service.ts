import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioEntity } from './usuario.entity';
import { RolRepository } from 'src/rol/rol.repository';
import { RolEntity } from 'src/rol/rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { PayloadInterface } from 'src/auth/payload.interface';
import { NuevoUsuarioDto } from 'src/auth/dto/nuevo-usuario.dto';
import { TokenDto } from 'src/auth/dto/token.dto';
import { RolNombre } from 'src/rol/rol.enum';

@Injectable()
export class UsuarioService {

    constructor(

        @InjectRepository(RolEntity)
        private readonly rolRepository: RolRepository,
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: UsuarioRepository,
        private readonly jwtService: JwtService,
    ) { }

    /*LISTANDO TODOS LOS USUARIOS */
    async getallUsers(): Promise<UsuarioEntity[]> {
        const usuario = await this.usuarioRepository.createQueryBuilder('usuario')
            .select(['usuario', 'roles.rol_nombre'])
            .innerJoin('usuario.roles', 'roles')
            .getMany()
        if (!usuario.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return usuario
    }


    /*LISTANDO USUARIO POR ID*/
    async findById(usu_id: number): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findOne({ where: { usu_id } });
        if (!usuario) {
            throw new NotFoundException(new MessageDto('El usuario no Existe'));
        }
        return usuario;
    }


    /*CREACIÓN USUARIO ADMINISTRADOR */
    async createAdmin(dto: NuevoUsuarioDto): Promise<any> {

        const { usu_nombreUsuario, usu_email, usu_identifiacion } = dto;
        const exists = await this.usuarioRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }, { usu_identifiacion: usu_identifiacion }] });
        if (exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        const rolAdmin = await this.rolRepository.findOne({ where: { rol_nombre: RolNombre.ADMIN } });
        if (!rolAdmin) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))

        //Crear el DTO del ADMIN
        const admin = this.usuarioRepository.create(dto);

        // Asignar el estado activo al usuario
        admin.usu_estado = 'true';
        admin.roles = [rolAdmin];
        await this.usuarioRepository.save(admin);

        return new MessageDto('Admin Creado');
    }

    /*CREACIÓN USUARIO POR ROL */
    async createUserRol(payloads: { dto: NuevoUsuarioDto, rolesIds: number[] }): Promise<any> {
        const { dto, rolesIds } = payloads;
        const { usu_nombreUsuario, usu_email, usu_identifiacion } = dto;
        // Verificar si el usuario ya existe
        const exists = await this.usuarioRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }, { usu_identifiacion: usu_identifiacion }] });
        if (exists) {
            throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        }
        // Crear el nuevo usuario DTO
        const user = this.usuarioRepository.create(dto);

        //ASIGNACIÓN DE ROLES
        const roles = await this.rolRepository.findByIds(rolesIds)
        user.roles = roles

        //GUARDAR USUARIO A LA BASE DE DATOS
        await this.usuarioRepository.save(user)

        return new MessageDto('Usuario Creado');
    }


    //METODO ELIMINAR USUARIO
    async deleteUser(id: number): Promise<MessageDto> {
        try {
            const usuario_eliminar = await this.findById(id);
            await this.usuarioRepository.delete(usuario_eliminar.usu_id);

            return new MessageDto(`Usuario eliminado`);
        } catch (error) {
            throw new Error(`Error al eliminar el usuario: ${error.message}`);
        }
    }

    async findOneByResetPasswordToken(resetPasswordToken: string): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findOne({ where: { resetPasswordToken } });
        if (!usuario) {
            throw new NotFoundException(new MessageDto('Error'));
        }
        return usuario;
    }


}
