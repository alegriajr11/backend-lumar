import { Module } from '@nestjs/common';
import { ImagenProductoController } from './imagen_producto.controller';
import { ImagenProductoService } from './imagen_producto.service';

@Module({
  controllers: [ImagenProductoController],
  providers: [ImagenProductoService]
})
export class ImagenProductoModule {}
