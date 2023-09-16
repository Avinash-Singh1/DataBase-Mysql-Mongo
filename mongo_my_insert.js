const {connect, mongo, default: mongoose, Schema}= require("mongoose")
const url ="mongodb://localhost:27017/mynewdb"
connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.info("Connected successfully")
}).catch(()=>{
    console.log("connection error");
});


let mySchema =new mongoose.Schema({
    Name: String,
    Email:String,
    age:Number,
    Address:String

})

const  SchmaValue= mongoose.model("mynewtable",mySchema)

SchmaValue.insertMany({
    Name:"Asadullah muradi",
    Email:"asad@gmail.com",
    age: 23,
    Address:"Malviya nagar Delhi"
}).then(()=>{
    console.log("Inserted successfully")
}).catch(()=>{
    console.error("Error Caught")
})