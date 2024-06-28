import { MetodoPagoEntity } from "src/metodo_pago/metodo_pago.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pagos')
export class PagosEntity {
    @PrimaryGeneratedColumn()
    pago_id: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    pag_amount: number;

    @Column({ type: 'varchar', length: 10, nullable: false })
    pag_divisa: string;

    @Column({ type: 'varchar', length: 10, nullable: false })
    pag_estado: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    pag_createdAt: Date;

    // Relacion Muchos a Uno PAGO - MATODO DE PAGO 
    @ManyToOne(type => MetodoPagoEntity, metodo_pago => metodo_pago.pago)
    metodo_pago: MetodoPagoEntity;
}