import {Request, Response} from "express"
import * as productService from '../services/product'


const getProductDetail = async(req: Request, res: Response) => {
    const productId = req.params.productId;
    const result = await productService.getProductDetail(productId)
    res.send(result)
}

export default getProductDetail