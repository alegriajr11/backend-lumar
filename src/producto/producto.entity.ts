import { ComentariosEntity } from "src/comentarios/comentarios.entity";
import { DetalleCarritoEntity } from "src/detalle_carrito/detalle_carrito.entity";
import { DetallePedidoEntity } from "src/detalle_pedido/detalle_pedido.entity";
import { ImagenProductoEntity } from "src/imagen_producto/imagen_producto.entity";
import { InventarioEntity } from "src/inventario/inventario.entity";
import { SubcategoriaEntity } from "src/subcategoria/subcategoria.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'producto' })
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    prod_id: number

    @Column({ type: 'varchar', length: 100, nullable: false })
    prod_nombre: string

    @Column({ type: 'varchar', length: 255, nullable: true })
    prod_descripcion: string

    @Column({ type: 'float', nullable: false })
    prod_precio: number

    @OneToOne(() => InventarioEntity, inventario => inventario.producto)
    inventario: InventarioEntity;

    // Relacion Muchos a Uno PRODUCTO - SUBCATEGORIA 
    @ManyToOne(type => SubcategoriaEntity, subcategoria => subcategoria.producto)
    subcategoria: SubcategoriaEntity;

    // Relacion Uno a Muchos PRODUCTO - COMENTARIOS
    @OneToMany(type => ComentariosEntity, comentarios => comentarios.producto)
    comentarios: ComentariosEntity[];

    // Relacion Uno a Muchos PRODUCTO - DETALLE_PEDIDO
    @OneToMany(type => DetallePedidoEntity, detalle_pedido => detalle_pedido.producto)
    detalle_pedido: DetallePedidoEntity[];

    // Relacion Muchos a Uno PRODUCTO - DETALLE CARRITO 
    @ManyToOne(type => DetalleCarritoEntity, detalle_carrito => detalle_carrito.producto)
    detalle_carrito: DetalleCarritoEntity;

    // Relacion Uno a Muchos PRODUCTO - IMAGEN_PRODUCTO
    @OneToMany(type => ImagenProductoEntity, imagen_producto => imagen_producto.producto)
    imagen_producto: ImagenProductoEntity[];
}