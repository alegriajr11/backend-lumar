import { PromocionEntity } from "src/promocion/promocion.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'descuento'})
export class DescuentoEntity {
    
    @PrimaryGeneratedColumn('increment')
    desc_id: number;

    @Column({type: 'varchar', length: 255, nullable: true})
    desc_descripcion: string;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    desc_porcentaje: number;
    
    // Relacion Muchos a Uno DESCUENTO - PROMOCIÓN 
    @ManyToOne(type => PromocionEntity, promocion => promocion.descuento)
    promocion: PromocionEntity;
}