import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EncoderService } from './encoder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { RolEntity } from 'src/rol/rol.entity';
import { AuthRepository } from './auth.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JWT_SECRET } from 'src/config/constans';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsuarioService } from 'src/usuario/usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity, RolEntity, AuthRepository]),
  PassportModule.register({
    defaultStrategy: 'jwt'
  }),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get(JWT_SECRET),
      signOptions: {
        expiresIn: 7200
      }
    }),
    inject: [ConfigService],
  }),],
  controllers: [AuthController],
  providers: [AuthService, EncoderService, JwtStrategy, UsuarioService, ConfigService],
  exports: [PassportModule, JwtStrategy]
})
export class AuthModule { }
