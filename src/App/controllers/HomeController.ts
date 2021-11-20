import {Request, Response} from "express"
import { Products } from "../../entity/User"

class HomeController {

    async index(req: Request, res: Response) {
        const limit = req.query.limit
        const offset = req.query.offset
        const total = await Products.count()
        const products = await Products.find({take : +limit,skip : +offset})
        console.log(limit,offset,total)
        res.send({total,products})
    }
}

module.exports = new HomeController