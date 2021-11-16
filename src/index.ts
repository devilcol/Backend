import "reflect-metadata";
import {createConnection} from "typeorm";
import {Products} from "./entity/User";
import * as express from "express";
import {Request, Response} from "express";

createConnection().then(async connection => {
    const userRepository = connection.getRepository(Products);

    const app = express();
    app.use(express.json());

    app.get("/", async function(req: Request, res: Response) {
        const limit = req.query.limit
        const offset = req.query.offset
        const users = await userRepository.find();
        res.json(users);
    }
    );
    // start express server
    app.listen(3500);
});
