const express = require("express")
const mongoose = require("mongoose")
const url ='mongodb://localhost:27017/mynewdb';
const app = express()
app.use(express.json())
mongoose.connect(url,{
    useNewUrlParser:true
    // newUnifiedTopology:true,
    
})

const MySchema = new mongoose.Schema({
    Name:{type: String},
    age:{type: Number},
    address:{type: String}
})

const Data = mongoose.model("mytable",MySchema);
app.post("/postdata", async(req,res)=>{

    console.log("inside post function")
    const data =  Data.insertMany({
        Name:req.body.name,
        age:req.body.age,
        address:req.body.address
    })
    // const val = await Data.save();
    console.log("saved successfully");


})


app.listen(3000,(err)=>{
    if(!err){
        console.log("listening at 3000")
    }
})