import IRepository from '../repository/irepository';
import DBHelper from './db_helper';
import Entity from '../model/entity/entity';

class Repository extends DBHelper implements IRepository {
    constructor() {
        super();
    }

    retrieveMessage(): Entity {
        return this.db.read().value() as Entity;
    }

    updateMessage(entity: Entity): Entity {
        console.log(entity.message);
        this.db.read().set('message', entity.message).write();
        return this.retrieveMessage();
    }
}

export default Repository;