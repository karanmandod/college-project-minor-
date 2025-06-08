const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
 
const listings= require("./routes/listing.js")
const reviews = require("./routes/review.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/stayeasy";

main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Hey, i am root");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews",reviews);

// app.get("/testListing", async (req,res)=>{
//     let sampleListing= new Listing({
//         title:"My New Villa",
//         discription:"By The Beach",
//         price:2500,
//         location:"calungute, Goa",
//         country:"India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("testing successful");
// });

// app.all("*", (req, res, next) => {
//     next( new ExpressError(404, "Page not found!"));
// });

app.use((err, req, res, next) => {
    let { statusCode=500, message="something went wrong" } = err;
    res.status(statusCode).render("listings/error.ejs",{message});
    // res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});