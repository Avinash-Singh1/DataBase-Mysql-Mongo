const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())

const url ='mongodb://localhost:27017/mynewdb';
const con = mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("connection established")
})
if(con){
    console.log("connection established")
}

const mySchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    email: { type: String },
})
const mymodel = mongoose.model("idTable", mySchema)

app.post("/post", async (req, res) => {
    const data = mymodel.insertMany({
        id: req.body.id,
        name: req.body.name,
        email:req.body.email,
    })
    console.log("saved successfully");


})

app.listen(3000, (err) => {
    if (!err) {
        console.log("listening at the port 3000");
    }
})