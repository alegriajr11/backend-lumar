import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolNombre } from "./rol.enum";
import { UsuarioEntity } from "src/usuario/usuario.entity";

@Entity({name: 'rol'})
export class RolEntity {
    
    @PrimaryGeneratedColumn('increment')
    rol_id: number;

    @Column({type: 'varchar', length: 20, nullable: false, unique: false})
    rol_nombre: RolNombre;
    
    // //Relacion Muchos a Muchos ROL - USUARIOS
    @ManyToMany(type => UsuarioEntity, usuario => usuario.roles)
    usuarios: UsuarioEntity[];
}