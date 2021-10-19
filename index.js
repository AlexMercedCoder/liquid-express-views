var { Liquid } = require('liquidjs');

const liquidView = (app, options = {}) => {

    const {viewDir = "./views", middleware = (app) => {}, engineConfig = (engine) => {}} = options

    var engine = new Liquid();
    engineConfig(engine)
    
    app.engine('liquid', engine.express());
    app.set('views', viewDir);            // specify the views directory
    app.set('view engine', 'liquid');
    middleware(app)
    


    return app
}


module.exports = liquidView