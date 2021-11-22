import {Request, Response} from "express"
import { getProductDetail as getProductDetailService } from '../service/product'


const getProductDetail = async(req: Request, res: Response) => {
    const result = await getProductDetailService(req)
    res.send(result)
}

export default getProductDetail