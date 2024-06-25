import { EntityRepository, Repository } from "typeorm";
import { SubcategoriaEntity } from "./subcategoria.entity";

@EntityRepository(SubcategoriaEntity)
export class SubcategoriaRepository extends Repository<SubcategoriaEntity> {
        
}