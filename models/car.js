const mongoose = require('mongoose')

const Schema = mongoose.Schema

const carSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    rentPerHour: {
        type: Number
    },
    fuelType: {
        type: String
    },
    capacity: {
        type: Number
    }
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car
