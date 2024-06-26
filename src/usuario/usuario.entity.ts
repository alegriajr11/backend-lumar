import { hash } from "bcrypt";
import { RolEntity } from "src/rol/rol.entity";
import { SeguimientoPedidoEntity } from "src/seguimiento_pedido/seguimiento_pedido.entity";
import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({ name: 'usuario' })
export class UsuarioEntity {

    @PrimaryGeneratedColumn('increment')
    usu_id: number;

    @Column({ type: 'varchar', length: 15, nullable: false })
    usu_identifiacion: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    usu_nombre: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    usu_apellido: string;

    @Column({ type: 'varchar', length: 30, nullable: false, unique: false })
    usu_email: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    usu_nombreUsuario: string;

    @Column({ type: 'varchar', nullable: false })
    usu_password: string;

    @Column({ type: 'uuid', unique: true, name: 'reset_password_token', nullable: true })
    resetPasswordToken: string;

    @Column({ type: 'varchar', length: 10, nullable: false })
    usu_estado: string;


    @CreateDateColumn()
    usu_creado: Timestamp;


    //Relacion Muchos a Muchos USUARIOS - ROL
    @ManyToMany(type => RolEntity, rol => rol.usuarios, { eager: true })
    @JoinTable({
        name: 'usuario_rol',
        joinColumn: { name: 'usuario_id' },
        inverseJoinColumn: { name: 'rol_id' }
    })
    roles: RolEntity[];


    //Almacenar el hash de la contraseña creada
    @BeforeInsert()
    async hashPassword() {
        if (!this.usu_password) return;
        this.usu_password = await hash(this.usu_password, 10)
    }
    

    // Relacion Uno a Muchos USUARIO - SEGUIMIENTO_PEDIDO
    @OneToMany(type => SeguimientoPedidoEntity, seguimiento_pedido => seguimiento_pedido.usuario)
    seguimiento_pedido: SeguimientoPedidoEntity[];


}