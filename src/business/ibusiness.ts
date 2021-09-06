import express from 'express';
import Entity from '../model/entity/entity';

interface IBusiness {
    retrieveMessage(request: express.Request): Entity;

    updateMessage(request: express.Request): Entity
}

export default IBusiness;