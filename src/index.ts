import {createConnection} from "typeorm"
import "reflect-metadata"
import * as express from "express"

import getProductNamePrice from "./app/controllers/getProductNamePrice"

const route = require('./router/index.route')

createConnection().then(async connection => {
  
    const cors = require("cors")
    const app = express();
    app.use(cors())
    app.use(express.json())

    app.get('/name',getProductNamePrice)
    route(app)

    // start express server
    app.listen(3500)
});

