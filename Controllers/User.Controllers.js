const { patch } = require("../Routes/User.Routes");

const GetAllUsers=(req, res) =>{
    res.json({
        "message":"Home Page" 
    });
};
const PostUser=(req, res) =>{
    res.json({
        "message":"Post Api" 
    });
};

const DeleteUser = (req, res) =>{
    res.json({
        "message":"Delete Api" 
    });
};

const PutUser = (req, res) =>{
    res.json({
        "message":"Put Api" 
    });
}

const PatchUser = (req, res) =>{
    res.json({
        "message":"Patch Api" 
    });
}
module.exports = {GetAllUsers, PostUser, DeleteUser, PutUser, PatchUser}