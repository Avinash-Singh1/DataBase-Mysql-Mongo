const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost:27017/mynewdb', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// User model
const Users = mongoose.model('User', {
	name: { type: String },
	age: { type: Number }
});


// Function call
Users.insertMany([
	{ name: 'Rahul', age: 20},
	{ name: 'Avinash', age: 20},
	{ name: 'Jaswant', age: 20}
]).then(function(){
	console.log("Data inserted") // Success
}).catch(function(error){
	console.log(error)	 // Failure
});
