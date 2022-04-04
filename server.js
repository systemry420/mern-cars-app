const express = require('express')
const app = express()
const port = 4000
const dbConnect = require('./db')

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`listen to port ${port}`);
})