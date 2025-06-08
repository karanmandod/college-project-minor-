const express = require("express");
const app = express();
const users= require("./routes/user.js");
const posts= require("./routes/post.js");




app.get("/getcookies",(req,res)=>{
    res.send("sent you some cookies!");
});

app.get("/",(req,res)=>{
    res.send("Hey i am root");
});

//users
app.use("/users",users);

//posts
app.use("/posts",posts);

app.listen(3000,()=>{
    console.log("Server is listning on port 3000");
})