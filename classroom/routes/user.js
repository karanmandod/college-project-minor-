const express = require("express");
const router= express.Router();

//users
//index 
router.get("/",(req,res)=>{
    res.send("GET for users");
});

//show user

router.get("/:id",(req,res)=>{
    res.send("GET for user id");
});


// post users

router.get("/",(req,res)=>{
    res.send("POST for users");
});

//delete users 

router.get("/:id",(req,res)=>{
    res.send("DELETE for user id");
});

module.exports=router;