
const detailRouter = require('./detail')
const homeController =require('../App/controllers/HomeController')

const route = (app) => {
    app.get("/", homeController.index )
    app.use('/:id', detailRouter)
}

module.exports = route