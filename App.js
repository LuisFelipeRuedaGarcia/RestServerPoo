require("dotenv").config();
let Server = require("./Models/Server.Model.js");
let server = new Server();
server.Listten();