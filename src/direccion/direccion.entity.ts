import { ClienteEntity } from "src/cliente/cliente.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'direccion'})
export class DireccionEntity {
    
    @PrimaryGeneratedColumn('increment')
    dir_id: number;

    @Column({type: 'varchar', length: 55, nullable: true})
    dir_direccion: string;
    
    // Relacion Muchos a Uno DIRECCION - CLIENTE 
    @ManyToOne(type => ClienteEntity, cliente => cliente.direccion)
    cliente: ClienteEntity;
}