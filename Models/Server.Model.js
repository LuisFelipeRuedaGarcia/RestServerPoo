const Express = require('express');
const Cors = require('cors');
class Server {
    constructor(){
        this.App = Express();
        this.Port = process.env.PORT
        this.UsersPath = "/Api/Users"
        //middlewares
        this.Middlewares();
        //Routing
        this.Routes();
    }
    Middlewares(){
        //cors
        this.App.use(Cors())
        //PUBLIC DIRECTORY
        this.App.use(Express.static('Public'));

    }
    Routes(){
        this.App.use(this.UsersPath, require("../Routes/User.Routes.js"))
    }
    Listten(){
        this.App.listen(this.Port, ()=>{
            console.log(`Server Running On Port: ${this.Port}`);
        })
    }

}

module.exports = Server;