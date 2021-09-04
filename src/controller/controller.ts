import express from 'express';
import Business from '../business/business';
import IBusiness from '../business/ibusiness';
import MessageException from '../exception/message_exception';

class Controller {
    private path = '/api';
    private router = express.Router();
    private business: IBusiness;

    constructor() {
        this.business = new Business();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getMessage);
    }

    getMessage = (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            response.send(this.business.retrieveMessage(request));
        } catch {
            next(new MessageException());
        }
    }
}

export default Controller;