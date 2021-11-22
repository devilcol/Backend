import getProductList from "../App/controllers/getProductList"
import getProductDetail from '../App/controllers/getProductDetail'

const route = (app) => {

    app.get('/:id', getProductDetail)
    app.get("/", getProductList)

}

module.exports = route