import IRepository from '../repository/irepository';
import MessageDTO from '../model/dto/message_dto';
import DBHelper from './db_helper';

class Repository extends DBHelper implements IRepository {
    constructor() {
        super();
    }

    retrieveMessage(): MessageDTO {
        return this.db.get('data').value() as MessageDTO;
    }
}

export default Repository;