const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const url ='mongodb://localhost:27017/mynewdb';
mongoose.connect(url,{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(()=>{
    console.log("connection established");
})

const MySchema = new mongoose.Schema({
    id:{type: Number},
    name:{type: String},
    email:{type: String}
})

const Data = mongoose.model("idtable",MySchema);

// put 
app.put("/update/:id", async(req,res)=>{
    let upid = req.params.id;
    let upname = req.body.name;
    let upemail = req.body.email;
   
        console.log("inside put")
        Data.findOneAndUpdate({id: upid}, {$set: {protocol: "http"}},{name:upname,email:upemail}, {new: true}, function(err,doc) {
            if (err) { throw err; }
            else { console.log("Updated"); }
          });  
        console.log("inside put")

    // id -> mongo id ,  upid --> id from postman url
    // find id   //update  these two can be done in by one method called  findOnAndUpdate

})

app.listen(3000, (err) => {
    console.log("Listening at port 3000")
})