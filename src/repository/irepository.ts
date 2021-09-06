import Entity from "../model/entity/entity";

interface IRepository {
    retrieveMessage(): Entity;

    updateMessage(message: Entity): Entity
}

export default IRepository;