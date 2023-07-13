const Express = require('express');
const Cors = require('cors');
class Server {
    constructor(){
        this.App = Express();
        this.Port = process.env.PORT
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
        this.App.get("/home",(req, res) =>{
            res.status(403).json({
                "message":"Home Page" 
            });
        })
        this.App.post("/home",(req, res) =>{
            res.status(403).json({
                "message":"Post Api" 
            });
        })
        this.App.delete("/home",(req, res) =>{
            res.status(403).json({
                "message":"Delete Api" 
            });
        })
        this.App.put("/home",(req, res) =>{
            res.status(403).json({
                "message":"Put Api" 
            });
        })
        this.App.patch("/home",(req, res) =>{
            res.status(403).json({
                "message":"Patch Api" 
            });
        })

    }
    Listten(){
        this.App.listen(this.Port, ()=>{
            console.log(`Server Running On Port: ${this.Port}`);
        })
    }

}

module.exports = Server;