const express= require("express");
const mongoose = require("mongoose")
const app= express()
app.use(express.json());

const url = 'mongodb://localhost:27017/mynewdb';
mongoose.connect(url,{
    useNewUrlParser:true, useUnifiedTopology: true
}).then(()=>{
    console.log("Connected Successsfullly")
}).catch(()=>{
    console.log("Connection error");
})

let mySchema = new mongoose.Schema({
    Name:{type:String},
    Rollno:{type:String},
    Course:{type:String},
})
const mymodel = mongoose.model("Node_mongoose",mySchema)

app.post("/postdata", async(req,res)=>{

    console.log("inside post function")
    const data =  mymodel.insertMany({
        Name:req.body.name,
        Rollno:req.body.rollno,
        Course:req.body.course
    })
    // const val = await data.save();


})


app.listen(3000,(err)=>{
    if(!err){
            console.log("Listening at 3000")
    }else{
        console.log(err);
    }
})