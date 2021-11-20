
import {Request, Response} from "express"
import { Products } from "../../entity/User"

class DetailController {
    
    async index(req: Request, res: Response) {
        const detailProduct = await Products.findOne(req.params.id)
        res.send(detailProduct)
    }
}

module.exports = new DetailController