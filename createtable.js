const express = require("express");
const mysql = require("mysql2")
const app = express();

const con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"avinash@123",
    database:"mydb"

});

con.connect(function(err) {  
    if (err){
        console.log(err)
    }else{

        console.log("Connected!");   
        con.query("create table student(id int not null auto_increment primary key, name varchar(255) not null, mark int not null)",(err,result)=>{
            if(!err){
                console.log("table created successfully");
            }
            else{
                console.log(err);
            }
        })   
    }
});






app.listen(3000,function(err){
    if(!err){
        console.log("Everything runing smooth")
    }
    else{
        console.log("Error");
    }
})
