const mongoose = require("mongoose")
const express = require("express")
const app = express()

const url ='mongodb://localhost:27017/mynewdb';
mongoose.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true
})

const Users = mongoose.model("User", {
    name: { type: String },
    age: { type: Number }
})

Users.insertMany([
    { name: 'Gourav', age: 20 },
    { name: 'Kartik', age: 20 },
    { name: 'Niharika', age: 20 }
]).then(()=>{
    console.log("data inserted")
}).catch((error)=>{
    console.log(error)
})


app.listen(3000, (err) => {
    console.log("Listening at port 3000")
})