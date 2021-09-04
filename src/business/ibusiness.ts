import express from 'express';
import MessageDTO from '../model/dto/message_dto'

interface IBusiness {
    retrieveMessage(request: express.Request): MessageDTO;
}

export default IBusiness;