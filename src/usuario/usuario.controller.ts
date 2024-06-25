import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {

    //VALIDATION
    // @UsePipes(new ValidationPipe({whitelist: true}))
}
