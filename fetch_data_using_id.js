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

app.get("/fetchbyid/:id",(req,res)=>{
    const fetchbyid = req.params.id;
    con.query("select * from mytable where id=?",fetchbyid,(err,result)=>{
            if(err){
                console.log(err);
            }else{
                console.log(result[0].name);
                console.log(result[0].mark);
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
