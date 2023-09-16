const {connect, default: mongoose} = require('mongoose');

connect('mongodb://localhost:27017/mynewdb')
.then(() => {
    console.info('connect successfully')
})
.catch(() => {
    console.error('connection error');
});


// defining schema 
let localModel = new mongoose.Schema({
    Name: String,
    
    age: Number,
    
    address:String
    
})

let localSchema = mongoose.model('localizations', localModel, 'mytable');

// Insert new data into MongoDB

localSchema.insertMany({
    Name: 'Avinash singh',
    age: 21,
    address: 'US'
}).then(function() {
    console.info('insert new data successfully')
}).catch(function() {
    console.error('has error when insert new data');
})



// Insert Data to MongoDB by using mongoose.create

// const createAsync = async() => {
//     await localSchema.create({
//         Name: 'Avinash singh',
//         age: 21,
//         address: 'US'
//     });    
// }

// createAsync();

// it is better to use mongoose.insert because it's faster and less issue.

// const createTestMillionAsync = async() => {
//     console.time('insert-timer')
//     let testTargetList = [];
//     for (let index = 0; index < 100000; index++) {
    
//         testTargetList.push({
//             key: `test-key-${index}`,
//             value: `my test value : ${index}`,
//             culture: 'en-US'
//         });    
    
//     }
    
//     await localSchema.insertMany(testTargetList);

//     console.timeEnd('insert-timer');
// }

// createTestMillionAsync();