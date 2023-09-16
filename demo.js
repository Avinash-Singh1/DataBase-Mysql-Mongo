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


// const data =[{
//     "name" :"Avinash",
//     "mark":222
//  },
//  {
//     "name" :"Avinash",
//     "mark":222
//  },
//  {
//     "name" :"Avinash",
//     "mark":222
//  },
//  {
//     "name" :"Avinash",
//     "mark":222
//  }]
// //  console.log(data)


app.post("/post",(req,res)=>{
   const data = req.body;
    data.map((item)=>{
        const name = item.name;
        // const id =item.id;
        const mark= item.mark
        con.query('insert into mytable(name,mark) values(?,?)',[name,mark],(err,result)=>{
            if(!err){
                console.log("Everything runing smooth")
            }
            else{
                res.send(err);
            }
        })
    
    
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
