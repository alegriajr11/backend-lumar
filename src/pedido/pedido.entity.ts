import { ClienteEntity } from "src/cliente/cliente.entity";
import { DetallePedidoEntity } from "src/detalle_pedido/detalle_pedido.entity";
import { HistorialCompraEntity } from "src/historial_compra/historial_compra.entity";
import { MetodoPagoEntity } from "src/metodo_pago/metodo_pago.entity";
import { SeguimientoPedidoEntity } from "src/seguimiento_pedido/seguimiento_pedido.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pedido' })
export class PedidoEntity {

    @PrimaryGeneratedColumn('increment')
    ped_id: number;

    @Column({ type: 'date', nullable: false })
    ped_fecha: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    ped_precio_total: number;

    // Relacion UNO a UNO PEDIDO - SEGUIMIENTO_PEDIDO
    @OneToOne(() => SeguimientoPedidoEntity, seguimiento_pedido => seguimiento_pedido.pedido)
    @JoinColumn()
    seguimiento_pedido: SeguimientoPedidoEntity;

    // Relacion UNO a UNO PEDIDO - HISTORIAL_COMPRA
    @OneToOne(() => HistorialCompraEntity, historial_compra_pedido => historial_compra_pedido.pedido)
    @JoinColumn()
    historial_compra_pedido: HistorialCompraEntity;

    // Relacion Muchos a Uno PEDIDO - METODO_PAGO 
    @ManyToOne(type => MetodoPagoEntity, metodo_pago => metodo_pago.pedido)
    metodo_pago: MetodoPagoEntity;

    // Relacion Muchos a Uno PEDIDO - CLIENTE 
    @ManyToOne(type => ClienteEntity, cliente => cliente.pedido)
    cliente: ClienteEntity;

    // Relacion Uno a Muchos PEDIDO - DETALLE_PEDIDO
    @OneToMany(type => DetallePedidoEntity, detalle_pedido => detalle_pedido.pedido)
    detalle_pedido: DetallePedidoEntity[];
}