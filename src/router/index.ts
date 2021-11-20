const getProductList = require('../App/controllers/getProductList')
const getProductDetail = require('../App/controllers/getProductDetail')

const route = (app) => {

    app.get('/:id', getProductDetail.index)
    app.get("/", getProductList.index )

}

module.exports = route