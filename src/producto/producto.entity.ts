import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'producto'})
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    prod_id: number

    @Column({type: 'varchar', length: 100, nullable: false})
    prod_nombre: string

    @Column({type: 'varchar', length: 255, nullable: true})
    prod_descripcion: string

    @Column({type: 'float', nullable: false})
    prod_precio: number
}