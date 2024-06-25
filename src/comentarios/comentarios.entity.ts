import { ClienteEntity } from "src/cliente/cliente.entity";
import { ProductoEntity } from "src/producto/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'comentarios' })
export class ComentariosEntity {

    @PrimaryGeneratedColumn('increment')
    com_id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    com_comentario: string;

    @Column({ type: 'integer', nullable: false })
    com_calificacion: number;

    @Column({ type: 'date', nullable: false })
    com_fecha_comentario: string;

    // Relacion Muchos a Uno COMENTARIOS - CLIENTE
    @ManyToOne(type => ClienteEntity, cliente => cliente.comentarios)
    cliente: ClienteEntity;

    // Relacion Muchos a Uno COMENTARIOS - PRODUCTO
    @ManyToOne(type => ProductoEntity, producto => producto.comentarios)
    producto: ProductoEntity;
}