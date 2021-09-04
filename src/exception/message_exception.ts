import Exception from "./exception";

class MessageException extends Exception {
    constructor() {
        super('Error while retrieve message.', 500);
    }
}

export default MessageException;