import Exception from "./exception";

class GetMessageException extends Exception {
    constructor() {
        super('Error while retrieve message.', 500);
    }
}

export default GetMessageException;