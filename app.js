const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()           //express function.
app.use(cors())             //cors is for security,cors function.

app.post("/add",(req,res)=>{
    res.send("add page")            // /add is a request and response to this is the add page.(get is changed to post(because of security and inputs(doubt)))
})

app.listen(8080,()=>{
    console.log("Server Started")
})