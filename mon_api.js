var mongoose = require("mongoose");
var axios = require("axios");
var db = mongoose.connection;

//All calls out of the server
const uri ='mongodb://localhost:27017/mynewdb';

mongoose.connect(uri, {
    useNewUrlParser: true 
});

axios.get('https://api.github.com/users/PowellTravis/repos?per_page=100&page=1')
  .then(function (response) {
    onSuccess(response)
  })
  .catch(function (error) {
    console.log(error);
  });


var repSchema = new mongoose.Schema({
    name: {type:String},
    description: {type:String},
    url: {type:String}
});
var Data = mongoose.model('Data', repSchema);

function onSuccess(response) {
    var array = response;
  //  var arraytobe = response;
  var arrayLength = Object.keys(array).length 
    console.log(arrayLength)
   for(var i = 0; i <= arrayLength; i++) {
      var name = array.data[i].name;
      var desc = array.data[i].description;
      var url = array.data[i].html_url;
      console.log( name + " " + desc + " " + url);

      assignDataValue(name, desc, url)

    }
}

function assignDataValue(name, desc, url) {

   var upData = new Data()
      upData.name = name;
      upData.description = desc;
      upData.url = url;

      upData.save();
}