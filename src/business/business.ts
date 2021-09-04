import express from 'express';
import IBusiness from '../business/ibusiness';
import MessageDTO from '../model/dto/message_dto';
import IRepository from '../repository/irepository';
import Repository from '../repository/repository';

class Business implements IBusiness {
    private repository: IRepository;

    constructor() {
        this.repository = new Repository();
    }

    retrieveMessage(request: express.Request): MessageDTO {
        return this.repository.retrieveMessage();
    }
}

export default Business;