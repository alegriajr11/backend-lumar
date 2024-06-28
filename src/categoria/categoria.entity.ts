import { PromocionEntity } from "src/promocion/promocion.entity";
import { SeccionEntity } from "src/seccion/seccion.entity";
import { SubcategoriaEntity } from "src/subcategoria/subcategoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categoria' })
export class CategoriaEntity {

    @PrimaryGeneratedColumn('increment')
    cat_id: number;

    @Column({ type: 'varchar', length: 70, nullable: false })
    cat_nombre: string;

    // Relacion Uno a Muchos CATEGORIA - SUBCATEGORIA
    @OneToMany(type => SubcategoriaEntity, subcategoria => subcategoria.categoria)
    subcategoria: SubcategoriaEntity[];

    // Relacion Muchos a Uno CATEGORIA - SECCION 
    @ManyToOne(type => SeccionEntity, seccion => seccion.categoria)
    seccion: SeccionEntity;

    // Relacion Muchos a Uno CATEGORIA - PROMOCION 
    @ManyToOne(type => PromocionEntity, promocion => promocion.categoria)
    promocion: PromocionEntity;
}