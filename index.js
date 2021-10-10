var { Liquid } = require('liquidjs');

const liquidView = (app, options = {}) => {

    const {viewDir = "./views", middleware = (app) => {}} = options

    var engine = new Liquid({
        root: viewDir
    });
    
    app.engine('liquid', engine.express()); 
    app.set('views', viewDir);            // specify the views directory
    app.set('view engine', 'liquid');
    middleware(app)


    return app
}


module.exports = liquidView