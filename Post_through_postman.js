const express = require("express");
const mysql = require("mysql2")
const app = express();

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
    const name = req.body.name;
    const id =req.body.id;
    const mark= req.body.mark
    con.query('insert into mytable values(?,?,?)',[id,name,mark],(err,result)=>{
        if(!err){
            console.log("Everything runing smooth")
        }
        else{
            res.send("Posted values Successfully");
        }
    })
})


app.listen(3000,function(err){
    if(!err){
        console.log("Everything runing smooth")
    }
    else{
        console.log("Error");
    }
})
