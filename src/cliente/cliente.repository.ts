import { EntityRepository, Repository } from "typeorm";
import { ClienteEntity } from "./cliente.entity";

@EntityRepository(ClienteEntity)
export class ClienteRepository extends Repository<ClienteEntity>{

}