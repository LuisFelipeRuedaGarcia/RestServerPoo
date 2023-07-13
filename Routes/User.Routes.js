const {Router} = require('express')
let router = Router();
module.exports = router;


router.get("/",(req, res) =>{
    res.status(403).json({
        "message":"Home Page" 
    });
})
router.post("/",(req, res) =>{
    res.status(403).json({
        "message":"Post Api" 
    });
})
router.delete("/",(req, res) =>{
    res.status(403).json({
        "message":"Delete Api" 
    });
})
router.put("/",(req, res) =>{
    res.status(403).json({
        "message":"Put Api" 
    });
})
router.patch("/",(req, res) =>{
    res.status(403).json({
        "message":"Patch Api" 
    });
})
