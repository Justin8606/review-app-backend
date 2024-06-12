const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const reviews = require("./models/review")   //importing whole page into this.after this put req.body in input. review changed to reviews.

const {reviewModel} = require("./models/review")    

const app = express()           //express function.
app.use(cors())             //cors is for security,cors function.

app.use(express.json())

app.post("/add",(req,res)=>{
    let input = req.body
    let review = new reviewModel(input) //next we are goint to console review
    // console.log(input)          //check if it is working on or not.there is one more step.app.use(express.json()) 
    console.log(review)     //this step is to console object into the terminal.
    res.send("add page")            // /add is a request and response to this is the add page.(get is changed to post(because of security and inputs(doubt)))
})

app.listen(8080,()=>{
    console.log("Server Started")
})