// require mongoose
const mongoose = require('mongoose');

// create schema
const Schema = mongoose.Schema;
// create contact schema
const contactSchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: Number
})
module.exports = Contact = mongoose.model('contact',contactSchema)
