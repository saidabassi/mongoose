// require express
const express = require('express')
// express routes
const Contact = require('../models/Contact')

const router = express.Router()
//creating routes

router.get('/test', (req, res) => {
    try {
        res.send("hello world !")
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
        await newContact.save();
        res.status(200).send(newContact)
    }   
    catch (err) {
        res.status(400).send(err)
    }
})
// get all contact
router.get('/all', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).send(contacts)
    } catch (error) {
        res.status(400).send(error)
    }
})
// get one contact
router.get('/get-one/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const getContact = await Contact.findOne({ _id });
        res.status(200).send(getContact)
    } catch (error) {
        res.status(400).send(error)
    }
   
})
// get one and delete
router.delete('/delete/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteContact = await Contact.findOneAndDelete({ _id });
        res.status(200).send(deleteContact)
    } catch (error) {
        res.status(400).send(error)
    }
})
// find contact and update
router.put('/edit/:_id', async (res, req) => {
    try {
        const { _id } = req.params;
        await Contact.updateOne({ _id },{$set:{...req.body}});
        res.status(200).send({msg: 'contact updated'})
    } catch (error) {
        res.status(400).send(error)
    }
})
//exporting routes
module.exports = router