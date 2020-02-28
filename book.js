const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    pages: Number,
    authors: [{type: String}]
}, { versionKey: false })

module.exports = mongoose.model('Book', bookSchema)