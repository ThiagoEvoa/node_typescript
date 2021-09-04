import App from "./app";
import Controller from "./src/controller/controller";
import env from 'dotenv';

env.config();

const host: string = process.env.HOST as string;
const port: number = parseInt(process.env.PORT!);

const app = new App(
    [
        new Controller(),
    ],
    host,
    port,
);

app.listen();