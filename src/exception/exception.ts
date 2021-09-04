abstract class Exception {
    status: number;
    message: string;

    constructor(message: string = 'Exception', status: number = 500) {
        this.message = message;
        this.status = status;
    }
}

export default Exception;