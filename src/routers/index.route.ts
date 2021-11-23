import getProductList from "../app/controllers/getProductList"
import getProductDetail from '../app/controllers/getProductDetail'

const route = (app) => {

    app.get('/:id', getProductDetail)
    app.get("/", getProductList)

}

module.exports = route