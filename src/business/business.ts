import express from 'express';
import IBusiness from '../business/ibusiness';
import Entity from '../model/entity/entity';
import IRepository from '../repository/irepository';
import Repository from '../repository/repository';

class Business implements IBusiness {
    private repository: IRepository;

    constructor() {
        this.repository = new Repository();
    }

    retrieveMessage(request: express.Request): Entity {
        return this.repository.retrieveMessage();
    }

    updateMessage(request: express.Request): Entity {
        return this.repository.updateMessage(request.body as Entity);
    }
}

export default Business;