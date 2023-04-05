import Exception from "./exception";

class AuthException extends Exception {
    constructor() {
        super('You are not authenticated.', 401);
    }
}

export default AuthException;