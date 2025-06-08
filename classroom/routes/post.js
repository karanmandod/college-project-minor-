const express = require("express");
const router= express.Router();
//posts
//index 
router.get("/",(req,res)=>{
    res.send("GET for posts");
});

//show 

router.get("/:id",(req,res)=>{
    res.send("GET for post id");
});


// post 

router.get("/",(req,res)=>{
    res.send("POST for posts");
});

//delete 

router.get("/:id",(req,res)=>{
    res.send("DELETE for post id");
});


module.exports=router;
