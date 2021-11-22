
import { Request, Response } from "express"
import { getProductList as getProductListService} from "../service/product"

const  getProductList = async(req: Request, res: Response) => {

    const limit = req.query.limit
    const offset = req.query.offset
    const result = await getProductListService(limit, offset)
    res.send(result)
}

export default getProductList