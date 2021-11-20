
const detailRouter = require('./detailRouter')
const homeController =require('../App/controllers/HomeController')

const route = (app) => {
    app.use('/:id', detailRouter)
    app.get("/", homeController.index )
}

module.exports = route