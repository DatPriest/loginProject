import express, { Application, Request, Response } from "express";
import { DataBaseConnector } from "./databaseconnector";

const app: Application = express();
const port = 3333;
const databaseConnector = new DataBaseConnector();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        databaseConnector.test();
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}