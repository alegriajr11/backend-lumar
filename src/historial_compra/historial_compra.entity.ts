import { PedidoEntity } from "src/pedido/pedido.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'historial_compra' })
export class HistorialCompraEntity {

    @PrimaryGeneratedColumn('increment')
    hist_id: number;

    @Column({ type: 'date', nullable: false })
    hist_fecha_compra: string;

    @OneToOne(() => PedidoEntity, pedido => pedido.historial_compra_pedido)
    pedido: PedidoEntity;
}