const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect('mongodb+srv://ksm420:Pinkfloyd420@cluster0.kgbwi.mongodb.net/shipwrecks', 
    {useUnifiedTopology: true, useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connect', () => {
        console.log('connected');
    })

    connection.on('error', () => {
        console.log('failed');
    })
}


connectDB()

module.exports = {
    mongoose
}