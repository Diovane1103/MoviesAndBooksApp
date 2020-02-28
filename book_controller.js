const express = require('express')
const router = express.Router()
const Book = require('./book.js')

router.get('/', async (req, res) => {
    try {
        const books = await Book.find({})
        res.status(200).send(books)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if(!book)
            res.status(404).send({ msg: 'Book with this id does not exist.'})
        else
            res.status(200).send(book)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const book = new Dvd({
            title: req.body.title,
            authors: req.body.authors,
            pages: req.body.pages
        })
        await book.save()

        res.status(201).send(book)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if(!book)
            res.status(404).send({ msg: 'Book with this id does not exist.'})
        else
            book.title = req.body.title
            book.pages = req.body.pages
            book.authors = req.body.authors

            await book.save()
            res.status(200).send(book)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if(!book)
            res.status(404).send({ msg: 'Book with this id does not exist.'})
        else
            res.status(200).send(book)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router