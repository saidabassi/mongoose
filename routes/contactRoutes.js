const Contact = require('../models/Contact')
// require express
const express = require('express')
// express routes
const router = express.Router()
//creating routes

router.get('/test', (req, res) => {
    try {
        res.send('hello world !')
    }
    catch (err) {
        console.log('error');
        res.status(404)
    }
})
// add new contact
router.post('/add', async (req, res) => {
    try {
        const { name, email, phone } = req.body
        const newContact = new Contact({ name, email, phone })
        await newContact.save()
        req.status(200).json(newContact)
    }   
    catch (err) {
        res.status(400).json(err)
    }
})
//exporting routes
module.exports = router