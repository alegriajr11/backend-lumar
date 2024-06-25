import { CarritoCompraEntity } from "src/carrito_compra/carrito_compra.entity";
import { ProductoEntity } from "src/producto/producto.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'detalle_carrito' })
export class DetalleCarritoEntity {

    @PrimaryGeneratedColumn('increment')
    det_id: number;

    @Column({ type: 'integer', nullable: false })
    det_carrito_cantidad: number;

    // Relacion Muchos a Uno DETALLE CARRITO - CARRITO DE COMPRA
    @ManyToOne(type => CarritoCompraEntity, carrito_compra => carrito_compra.detalle_carrito)
    carrito_compra: CarritoCompraEntity;

    
    // Relacion Uno a Muchos DETALLE CARRITO - PRODUCTO
    @OneToMany(type => ProductoEntity, producto => producto.detalle_carrito)
    producto: ProductoEntity[];

}