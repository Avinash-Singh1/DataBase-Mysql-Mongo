// Require mongoose module
const mongoose = require('mongoose');

// Set Up the Database connection
mongoose.connect(
	'mongodb://localhost:27017/mynewdb', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

// Defining User schema
const userSchema = new mongoose.Schema(
	{ name: String, age: Number }
)

// Defining User model
const Users = mongoose.model('Users', userSchema);

// Create collection of Model
Users.createCollection().then(function (collection) {
	console.log('Collection is created!');
});
