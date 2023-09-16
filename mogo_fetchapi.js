var mongoose =require("mongoose")
var axios = require("axios")
const express= require("express")
const app =express()
app.use(express.json())

const uri ='mongodb://localhost:27017/mynewdb';

 mongoose.connect(uri,
    {
       
        useNewUrlParser:true
    })

    const myschema = new mongoose.Schema({
        userId:{type:Number},
        id:{type:Number},
        title:{type:String},
        body:{type:String}
       
    })
    const mymodel= mongoose.model("NewApi",myschema);

const url ="https://jsonplaceholder.typicode.com/posts";

    async function getapi(url) {
   
      // Storing response
      const response = await fetch(url);
     
      // Storing data in form of JSON
      var data = await response.json();
      // console.log(data);
      if (response) {
          // hideloader();
      }
      onSuccess(data);
  }
  // Calling that async function
  getapi(url);


function onSuccess(response) {
  // console.log(response);
 



  response.map((item)=>{
      
      var userId = item.userId;
      var id = item.id;
      var title = item.title;
      var body = item.body;
    //   console.log( name + " " + desc + " " + url);

    var upData =  mymodel.insertMany({
      userId:  item.userId,
      id:  item.id,
      title: item.title,
      body: item.body
})
    })

  }

