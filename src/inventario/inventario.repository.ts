import { EntityRepository, Repository } from "typeorm";
import { InventarioEntity } from "./inventario.entity";

@EntityRepository(InventarioEntity)
export class InvenarioRepository extends Repository<InventarioEntity>{

}