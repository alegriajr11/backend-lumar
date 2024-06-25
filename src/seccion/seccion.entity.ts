import { CategoriaEntity } from "src/categoria/categoria.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'seccion' })
export class SeccionEntity {

    @PrimaryGeneratedColumn('increment')
    secc_id: number;

    @Column({ type: 'varchar', length: 70, nullable: false })
    secc_nombre: string;

    // Relacion Uno a Muchos SECCION - CATEGORIA
    @OneToMany(type => CategoriaEntity, categoria => categoria.seccion)
    categoria: CategoriaEntity[];
}