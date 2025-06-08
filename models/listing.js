const mongoose= require("mongoose");
const Schema=mongoose.Schema;
const Review= require("./review.js");

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,

    },
    description:{ 
        type:String,

    },
    image:{
        type:String,
        default:"https://unsplash.com/photos/a-red-house-sitting-on-top-of-a-lush-green-hillside-eJeEz6Paz-o",
        set:(v) => v === "" ? "https://unsplash.com/photos/a-red-house-sitting-on-top-of-a-lush-green-hillside-eJeEz6Paz-o" : v,

    },
    price:{
        type:Number,

    },
    location: {
        type:String,

    },
    country:{
        type:String,

    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ]
});


listingSchema.post("findOneAndDelete", async (listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
});

const Listing =mongoose.model("Listing",listingSchema);
module.exports= Listing;