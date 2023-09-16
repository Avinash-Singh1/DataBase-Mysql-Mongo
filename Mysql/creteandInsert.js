const express = require("express")
const mysql =  require("mysql2")
const app = express();

const con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"aviansh@123",
    database:"nodedb"   

});

con.connect(function(err){
    if (err){
        console.log(err)
    }else{

        console.log("Connected!");   
      
    }
})

// app.use(express.json());



app.listen(3000,(err)=>{
    if(!err)
    {
        console.log("Listening at 3000")

    }
})