import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { NuevoUsuarioDto } from 'src/auth/dto/nuevo-usuario.dto';
import { TokenDto } from 'src/auth/dto/token.dto';
import { UsuarioService } from './usuario.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) { }

    //LISTAR TODOS LOS USUARIOS
    @UseGuards(JwtAuthGuard) //GUARD PARA SOLO ACEPTAR SOLICITUD SI ESTÁ LOGUEADO
    @Get()
    async getAll() {
        return await this.usuarioService.getallUsers()
    }

    //SOLICITUD CREAR USUARIO ADMINISTRADOR
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post()
    async createAdmin(@Body() dto: NuevoUsuarioDto) {
        return this.usuarioService.createAdmin(dto);
    }

    //CREAR USUARIO POR ROLES
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('rol')
    async createUserRol(@Body() payload: { dto: NuevoUsuarioDto, rolesIds: number[] }) {
        const { dto, rolesIds } = payload;
        return this.usuarioService.createUserRol(payload);
    }

    //ELIMINAR USUARIO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.usuarioService.deleteUser(id);
    }


}
