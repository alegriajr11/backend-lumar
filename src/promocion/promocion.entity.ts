import { CategoriaEntity } from "src/categoria/categoria.entity";
import { DescuentoEntity } from "src/descuento/descuento.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'promocion'})
export class PromocionEntity {
    
    @PrimaryGeneratedColumn('increment')
    prom_id: number;

    @Column({type: 'varchar', length: 255, nullable: true})
    prom_descripcion: string;

    @Column({type: 'date', nullable: false})
    prom_fecha_inicio: string;

    @Column({type: 'date', nullable: false})
    prom_fecha_final: string;

    @Column({type: 'varchar', length: 10, nullable: true})
    prom_estado: string;

    
    // Relacion Uno a Muchos PROMOCIÓN - DESCUENTO
    @OneToMany(type => DescuentoEntity, descuento => descuento.promocion)
    descuento: DescuentoEntity[];

    // Relacion Uno a Muchos PROMOCIÓN - CATEGORIA
    @OneToMany(type => CategoriaEntity, categoria => categoria.promocion)
    categoria: CategoriaEntity[];
}