const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const app = express()
const port = 4000
// const dbConnect = require('./db')

// app.get('/', (req, res) => {
//     res.send('hello')
// })

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

