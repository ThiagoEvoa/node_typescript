import express from 'express';
import Exception from './src/exception/exception';

class App {
    private app: express.Application;
    private host: string;
    private port: number;

    constructor(controllers: any[], host: string, port: number) {
        this.app = express();
        this.host = host;
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
    }

    private initializeControllers(controllers: any[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    private initializeErrorHandling() {
        this.app.use((error: Exception, request: express.Request, response: express.Response, next: express.NextFunction) => {
            response.status(error.status).send(error);
        });
    }

    public listen() {
        this.app.listen(this.port, this.host, () => {
            console.log(`Server running in ${this.host} on PORT: ${this.port}`);
        });
    }
}

export default App;