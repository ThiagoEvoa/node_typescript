import express from 'express';
import Business from '../business/business';
import IBusiness from '../business/ibusiness';
import GetMessageException from '../exception/get_entity_exception';
import UpdateMessageException from '../exception/update_entity_exception';
import MessageDTO from '../model/dto/dto';
import { interceptor } from '../util/interceptor';

class Controller {
    private path = '/api';
    private router = express.Router();
    private business: IBusiness;

    constructor() {
        this.business = new Business();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, interceptor, this.getMessage);
        this.router.put(this.path, this.updateMessage);
    }

    getMessage = (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            let responseMessage = this.business.retrieveMessage(request) as MessageDTO;
            response.send(responseMessage);
        } catch {
            next(new GetMessageException());
        }
    }

    updateMessage = (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            let responseMessage = this.business.updateMessage(request);
            response.send(responseMessage);
        } catch (ex) {
            console.log(ex);
            next(new UpdateMessageException());
        }
    }
}

export default Controller;