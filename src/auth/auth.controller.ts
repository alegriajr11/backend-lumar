import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { LoginUsuarioDto } from './dto/login.dto';
import { TokenDto } from './dto/token.dto';
import { RessetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { GetUser } from './dto/get-user.decorator';
import { UsuarioEntity } from 'src/usuario/usuario.entity';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.authService.getallUsers()
    }


    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('login')
    login(@Body() dto: LoginUsuarioDto) {
        return this.authService.login(dto);
    }

    //REFRESCAR TOKEN
    @Post('refresh')
    refresh(@Body() dto: TokenDto) {
        return this.authService.refresh(dto)
    }


    // SOLICITUD PARA CREAR EL TOKEN DE REESTABLECER CONTRASEÑA
    @UseGuards(JwtAuthGuard)
    @Patch('request-reset-password/:id')
    requestResetPassword(@Param('id', ParseIntPipe) id: number): Promise<any> {
        return this.authService.requestResetPassword(id);
    }


    //REESTABLECER CONTRASEÑA
    @UseGuards(JwtAuthGuard)
    @Patch('reset-password')
    resetPassword(@Body() resetPasswordDto: RessetPasswordDto): Promise<void> {
        return this.authService.resetPassword(resetPasswordDto);
    }


    //CAMBIAR CONTRASEÑA
    @UseGuards(JwtAuthGuard)
    @Patch('change-password')
    changePassword(@Body() changePasswordDto: ChangePasswordDto, @GetUser() usuario: UsuarioEntity): Promise<void> {
        const a = 1
        return this.authService.changePassword(changePasswordDto, usuario)
    }

}
