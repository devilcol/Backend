
import { Request, Response } from "express"
import * as productService from "../service/product"

const  getProductList = async(req: Request, res: Response) => {

    const limit = +req.query.limit
    const offset = +req.query.offset
    const result = await productService.getProductList(limit, offset)
    res.send(result)
}

export default getProductList