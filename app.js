const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()           //express function.
app.use(cors())             //cors is for security,cors function.

app.get("/add",(req,res)=>{
    res.send("add page")
})

app.listen(8080,(req,res)=>{
    console.log("Server Started")
})