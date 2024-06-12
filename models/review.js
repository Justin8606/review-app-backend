const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "year":{type:String,required:true},
        "duration":{type:String,required:true},             //schema created
        "rating":{type:String,required:true}
        
    }
)

let reviewModel = mongoose.model("reviews",schema)          //schema turned into model
module.exports = {reviewModel}                              // after this go app.js and import it.

