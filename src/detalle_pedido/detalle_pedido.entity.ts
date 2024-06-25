import { PedidoEntity } from "src/pedido/pedido.entity";
import { ProductoEntity } from "src/producto/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'detalle_pedido' })
export class DetallePedidoEntity {

    @PrimaryGeneratedColumn('increment')
    det_id: number;

    @Column({ type: 'integer', nullable: false })
    det_pedido_cantidad: number;

    @Column({ type: 'float', nullable: false })
    det_precio_unitario: number;

    // Relacion Muchos a Uno DETALLE_PEDIDO - PRODUCTO 
    @ManyToOne(type => ProductoEntity, producto => producto.detalle_pedido)
    producto: ProductoEntity;

    // Relacion Muchos a Uno DETALLE_PEDIDO - PRODUCTO 
    @ManyToOne(type => PedidoEntity, pedido => pedido.detalle_pedido)
    pedido: PedidoEntity;

}