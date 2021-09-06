import Exception from "./exception";

class UpdateMessageException extends Exception {
    constructor() {
        super('Error while update message.', 500);
    }
}

export default UpdateMessageException;