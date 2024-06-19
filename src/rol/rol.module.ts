import { Module } from '@nestjs/common';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';

@Module({
  controllers: [RolController],
  providers: [RolService]
})
export class RolModule {}
