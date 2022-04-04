const mongoose = require('mongoose')

const Scehma = mongoose.Schema

const blogSchema = new Scehma({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog
