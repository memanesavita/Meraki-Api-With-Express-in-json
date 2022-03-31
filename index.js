const express=require("express")
const bodyperser=require("body-parser");
const { Router } = require("express");
const app=express();
const port=5000;
const {router}=require("./view.js/view_node")
app.use(bodyperser.urlencoded({extends:true}))
app.use(express.json())


app.use(bodyperser.json())
app.use('/',router)
app. listen(port,()=>{
    console.log("post number 5000")
})





