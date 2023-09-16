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
    if (err) throw err;  
    console.log("Connected!");  
    var sql = "INSERT INTO mytable (name, mark) VALUES (121,555)";  
    con.query(sql, function (err, result) {  
    if (err) throw err;  
    console.log("1 record inserted");  
    }); 
    
});


app.listen(3000,function(err){
    if(!err){
        console.log("Everything runing smooth")
    }
    else{
        console.log("Error");
    }
})
