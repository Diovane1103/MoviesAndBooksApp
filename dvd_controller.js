const express = require('express')
const router = express.Router()
const Dvd = require('./dvd.js')

router.get('/', async (req, res) => {
    try {
        const dvds = await Dvd.find({})
        res.status(200).send(dvds)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const dvd = await Dvd.findById(req.params.id)
        if(!dvd)
            res.status(404).send({ msg: 'Dvd with this id does not exist.'})
        else
            res.status(200).send(dvd)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const dvd = new Dvd({
            title: req.body.title,
            year: req.body.year,
            genres: req.body.genres,
            duration: req.body.duration
        })
        await dvd.save()

        res.status(201).send(dvd)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const dvd = await Dvd.findById(req.params.id)
        if(!dvd)
            res.status(404).send({ msg: 'Dvd with this id does not exist.'})
        else
            dvd.title = req.body.title
            dvd.duration = req.body.duration
            dvd.year = req.body.year
            dvd.genres = req.body.genres

            await dvd.save()
            res.status(200).send(dvd)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const dvd = await Dvd.findByIdAndDelete(req.params.id)
        if(!dvd)
            res.status(404).send({ msg: 'Dvd with this id does not exist.'})
        else
            res.status(200).send(dvd)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router