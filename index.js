var { Liquid } = require('liquidjs');

const liquidView = (app) => {

    var engine = new Liquid({
        root: './views/'
    });
    
    app.engine('liquid', engine.express()); 
    app.set('views', './views');            // specify the views directory
    app.set('view engine', 'liquid');

    return app
}


module.exports = liquidView