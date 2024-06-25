import { ProductoEntity } from "src/producto/producto.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'inventario'})
export class InventarioEntity {
    
    @PrimaryGeneratedColumn('increment')
    inv_id: number;

    @Column({ type: 'integer', nullable: false })
    inv_cantidad_disponible: number;
    
    // Relacion UNO a UNO INVENTARIO - PRODUCTO
    @OneToOne(() => ProductoEntity, producto => producto.inventario)
    @JoinColumn()
    producto: ProductoEntity;
}