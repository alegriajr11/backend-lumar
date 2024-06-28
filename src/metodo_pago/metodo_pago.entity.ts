import { PagosEntity } from "src/pagos/pagos.entity";
import { PedidoEntity } from "src/pedido/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'metodo_pago' })
export class MetodoPagoEntity {

    @PrimaryGeneratedColumn('increment')
    met_id: number;

    @Column({ type: 'varchar', length: 60, nullable: false })
    met_nombre: number;

    @Column()
    stripeMethodId: string; // Identificador del método de pago en Stripe

    // Relacion Uno a Muchos METODO_PAGO - PEDIDO
    @OneToMany(type => PedidoEntity, pedido => pedido.metodo_pago)
    pedido: PedidoEntity[];

    // Relacion Uno a Muchos METODO_PAGO - PAGOS
    @OneToMany(type => PagosEntity, pago => pago.metodo_pago)
    pago: PedidoEntity[];
}