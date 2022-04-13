const express = require('express')
const mongoose = require('mongoose')
const Car = require('./models/car')
const app = express()
const port = 4000
// const dbConnect = require('./db')

// app.get('/', (req, res) => {
//     res.send('hello')
// })

app.use(express.json())

mongoose.connect('mongodb+srv://ksm420:Pinkfloyd420@cluster0.kgbwi.mongodb.net/Abc?retryWrites=true&w=majority', 
{useUnifiedTopology: true, useNewUrlParser: true})
.then(result => {
    app.listen(port, () => {
        console.log(`listen to port ${port}`);
    })
})
.catch(err => {
    console.log(err);
})

app.get('/api/cars', (req, response) => {
    Car.find()
        .then(cars => {
            response.send(cars)
        })
        .catch(err => {
            console.log(err);
        })
})

app.use('/api/users', require('./routes/userRoutes'))
