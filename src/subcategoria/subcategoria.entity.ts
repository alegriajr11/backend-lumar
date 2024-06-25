import { CategoriaEntity } from "src/categoria/categoria.entity";
import { ProductoEntity } from "src/producto/producto.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'subcategoria' })
export class SubcategoriaEntity {

    @PrimaryGeneratedColumn('increment')
    sub_id: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    sub_nombre: string;

    // Relacion Uno a Muchos SUBCATEGORIA - PRODUCTO
    @OneToMany(type => ProductoEntity, producto => producto.subcategoria)
    producto: ProductoEntity[];

    // Relacion Muchos a Uno SUBCATEGORIA - CATEGORIA 
    @ManyToOne(type => CategoriaEntity, categoria => categoria.subcategoria)
    categoria: CategoriaEntity;
}