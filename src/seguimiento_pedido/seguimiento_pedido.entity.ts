import { PedidoEntity } from "src/pedido/pedido.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'seguimiento_pedido' })
export class SeguimientoPedidoEntity {

    @PrimaryGeneratedColumn('increment')
    seg_id: number;

    @Column({ type: 'varchar', length: 15, nullable: false })
    seg_numero_seguimiento: string;

    @Column({ type: 'boolean' })
    seg_estado: boolean;

    @Column({type: 'date', nullable: false})
    seg_fecha_actualizada: string;

    // Relacion Uno a Muchos SEGUIMIENTO_PEDIDO - USUARIO
    @ManyToOne(type => UsuarioEntity, usuario => usuario.seguimiento_pedido)
    usuario: UsuarioEntity;

    @OneToOne(() => PedidoEntity, pedido => pedido.seguimiento_pedido)
    pedido: PedidoEntity;
}