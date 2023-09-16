const express = require("express");
const mysql = require("mysql2")
const app = express();
app.use(express.json())

const con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"avinash",
    database:"mydb"

});

con.connect(function(err) {  
    if (err){
        console.log(err)
    }else{

        console.log("Connected!");      
    }
});
app.post("/post",(req,res)=>{
    res.send(req.body);
})




app.listen(3000,function(err){
    if(!err){
        console.log("Everything runing smooth")
    }
    else{
        console.log("Error");
    }
})
