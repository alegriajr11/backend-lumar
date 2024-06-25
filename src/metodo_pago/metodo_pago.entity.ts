import { PedidoEntity } from "src/pedido/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'metodo_pago' })
export class MetodoPagoEntity {

    @PrimaryGeneratedColumn('increment')
    met_id: number;

    @Column({ type: 'varchar', length: 60, nullable: false })
    met_nombre: number;

    // Relacion Uno a Muchos METODO_PAGO - PEDIDO
    @OneToMany(type => PedidoEntity, pedido => pedido.metodo_pago)
    pedido: PedidoEntity[];
}