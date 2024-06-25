import { ClienteEntity } from "src/cliente/cliente.entity";
import { DetalleCarritoEntity } from "src/detalle_carrito/detalle_carrito.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'carrito_compra' })
export class CarritoCompraEntity {

    @PrimaryGeneratedColumn('increment')
    car_id: number;

    @Column({ type: 'date', nullable: false })
    car_fecha_creacion: string;

    // Relacion Muchos a Uno CARRITO DE COMPRA - CLIENTE 
    @ManyToOne(type => ClienteEntity, cliente => cliente.carrito_compra)
    cliente: ClienteEntity;

    // Relacion Uno a Muchos CLIENTE - CARRITO DE COMPRA
    @OneToMany(type => DetalleCarritoEntity, detalle_carrito => detalle_carrito.carrito_compra)
    detalle_carrito: DetalleCarritoEntity[];

}