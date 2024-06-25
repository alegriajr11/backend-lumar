import { ProductoEntity } from 'src/producto/producto.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity({ name: 'imagen_producto' })
export class ImagenProductoEntity {

    @PrimaryGeneratedColumn()
    imagen_id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    imagen_url: string;

    @ManyToOne(() => ProductoEntity, producto => producto.imagen_producto)
    producto: ProductoEntity;
}
