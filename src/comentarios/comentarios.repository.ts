import { EntityRepository, Repository } from "typeorm";
import { ComentariosEntity } from "./comentarios.entity";

@EntityRepository(ComentariosEntity)
export class ComentariosRepository extends Repository<ComentariosEntity>{

}