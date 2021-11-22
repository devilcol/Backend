import {Products} from '../../entity/User'

export const getProductList = async(limit,offset) => {

    const total = await Products.count()
    const products = await Products.find({take : +limit,skip : +offset})
    console.log(limit,offset,total)
    return ({total, products})
}

export const getProductDetail = async(req) => {

    const detailProduct = await Products.findOne(req.params.id)
    return detailProduct
    
}