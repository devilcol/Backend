import { Response, Request} from 'express'
import * as productService from "../service/product"

const getProductNamePrice = async (req: Request, res: Response) => {
    const name = req.params.name
    const price = +req.params.price
    const result = await productService.getProductNamePrice(name, price)
    res.send(result)
}

export default getProductNamePrice