// const express = require("express") //commonjs
import express from "express"; //module.js

const app = express();



// app.get("/a", (req,res) => {
// res.send("hello world")
// })


// function print(){
//     console.log("hello")
// }

// arrow function : 
// () => {

// }

app.listen(5001, () => {
    console.log("server is live at port : 5001")
})
