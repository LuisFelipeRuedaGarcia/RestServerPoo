const {Router} = require('express');
const {GetAllUsers, PostUser, DeleteUser,PutUser,PatchUser}= require('../Controllers/User.Controllers.js');
let router = Router();
module.exports = router;


router.get("/", GetAllUsers);
router.post("/", PostUser);
router.delete("/",DeleteUser);
router.put("/",PutUser);
router.patch("/",PatchUser);
