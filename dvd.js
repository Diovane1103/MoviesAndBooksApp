const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dvdSchema = new Schema({
    title: String,
    duration: Number,
    genres: [{type: String}],
    year: Number
}, { versionKey: false })

module.exports = mongoose.model('Dvd', dvdSchema)