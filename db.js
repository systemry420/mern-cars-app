const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect('mongodb+srv://ksm420:<password>@cluster0.kgbwi.mongodb.net/Abc?retryWrites=true&w=majority', 
    {useUnifiedTopology: true, useNewUrlParser: true})
    .then(result => {
        console.log('connected', result);
    })
    .catch(err => {
        console.log(err);
    })
    
    const connection = mongoose.connection

    // connection.on('connect', () => {
    //     console.log('connected');
    // })

    // connection.on('error', () => {
    //     console.log('failed');
    // })
}


connectDB()

module.exports = {
    mongoose
}