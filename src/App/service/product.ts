import {Products} from '../../entity/User'

export const getProductList = async(limit: number,offset: number ) => {

    const total = await Products.count()
    const products = await Products.find({take : limit,skip : offset})
    console.log(limit,offset,total)
    return ({total, products})
}

export const getProductDetail = async(productId: string) => {
    
    const detailProduct = await Products.findOne(productId)
    return detailProduct
    
}

export const getProductNamePrice = async(name: string, price: number) => {
    
    const productNamePrice = await Products.find ({select: ['name', 'price']})
    return productNamePrice
}