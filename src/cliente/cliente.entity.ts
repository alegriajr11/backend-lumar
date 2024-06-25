import { CarritoCompraEntity } from "src/carrito_compra/carrito_compra.entity";
import { ComentariosEntity } from "src/comentarios/comentarios.entity";
import { DireccionEntity } from "src/direccion/direccion.entity";
import { PedidoEntity } from "src/pedido/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cliente' })
export class ClienteEntity {

    @PrimaryGeneratedColumn('increment')
    cli_id: number;

    @Column({ type: 'varchar', length: 30, nullable: false })
    cli_identificacion: string;

    @Column({ type: 'varchar', length: 60, nullable: false })
    cli_nombre: string;

    @Column({ type: 'varchar', length: 60, nullable: false })
    cli_apellido: string;

    @Column({ type: 'varchar', length: 80, nullable: false })
    cli_email: string;

    @Column({ type: 'varchar', length: 15, nullable: false })
    cli_telefono: string;

    // Relacion Uno a Muchos CLIENTE - COMENTARIOS
    @OneToMany(type => ComentariosEntity, comentarios => comentarios.cliente)
    comentarios: ComentariosEntity[];

    // Relacion Uno a Muchos CLIENTE - DIRECCION
    @OneToMany(type => DireccionEntity, direccion => direccion.cliente)
    direccion: DireccionEntity[];

    // Relacion Uno a Muchos CLIENTE - DIRECCION
    @OneToMany(type => PedidoEntity, pedido => pedido.cliente)
    pedido: PedidoEntity[];

    // Relacion Uno a Muchos CLIENTE - CARRITO DE COMPRA
    @OneToMany(type => CarritoCompraEntity, carrito_compra => carrito_compra.cliente)
    carrito_compra: CarritoCompraEntity[];
}