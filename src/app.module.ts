import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constans';
import { ProductoModule } from './producto/producto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { DescuentoModule } from './descuento/descuento.module';
import { PromocionModule } from './promocion/promocion.module';
import { InventarioModule } from './inventario/inventario.module';
import { SubcategoriaModule } from './subcategoria/subcategoria.module';
import { CategoriaModule } from './categoria/categoria.module';
import { SeccionModule } from './seccion/seccion.module';
import { SeguimientoPedidoModule } from './seguimiento_pedido/seguimiento_pedido.module';
import { PedidoModule } from './pedido/pedido.module';
import { MetodoPagoModule } from './metodo_pago/metodo_pago.module';
import { HistorialCompraModule } from './historial_compra/historial_compra.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { ClienteModule } from './cliente/cliente.module';
import { DetallePedidoModule } from './detalle_pedido/detalle_pedido.module';
import { DireccionModule } from './direccion/direccion.module';
import { CarritoCompraModule } from './carrito_compra/carrito_compra.module';
import { DetalleCarritoModule } from './detalle_carrito/detalle_carrito.module';
import { ImagenProductoModule } from './imagen_producto/imagen_producto.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true //Para reconocer todas las variables globales de todo el proyecto
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: false
      }),
      inject: [ConfigService],
    }),
    ProductoModule,
    UsuarioModule,
    RolModule,
    DescuentoModule,
    PromocionModule,
    InventarioModule,
    SubcategoriaModule,
    CategoriaModule,
    SeccionModule,
    SeguimientoPedidoModule,
    PedidoModule,
    MetodoPagoModule,
    HistorialCompraModule,
    ComentariosModule,
    ClienteModule,
    DetallePedidoModule,
    DireccionModule,
    CarritoCompraModule,
    DetalleCarritoModule,
    ImagenProductoModule,
    UbicacionModule,
    AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
