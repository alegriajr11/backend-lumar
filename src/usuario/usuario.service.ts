import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioEntity } from './usuario.entity';
import { RolRepository } from 'src/rol/rol.repository';
import { RolEntity } from 'src/rol/rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class UsuarioService {

    constructor(

        @InjectRepository(RolEntity)
        private readonly rolRepository: RolRepository,
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: UsuarioRepository,
        private readonly jwtService: JwtService,
    ) { }


    /*LISTANDO USUARIO POR ID*/
    async findById(usu_id: number): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findOne({ where: { usu_id } });
        if (!usuario) {
            throw new NotFoundException(new MessageDto('El usuario no Existe'));
        }
        return usuario;
    }


    async findOneByResetPasswordToken(resetPasswordToken: string): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findOne({ where: { resetPasswordToken } });
        if (!usuario) {
            throw new NotFoundException(new MessageDto('Error'));
        }
        return usuario;
    }


}
