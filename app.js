const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dvd_controller = require('./dvd_controller.js')
const book_controller = require('./book_controller.js')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/routes_data', { useNewUrlParser: true })

app.use('/books', book_controller)
app.use('/dvds', dvd_controller)

app.listen(3500)