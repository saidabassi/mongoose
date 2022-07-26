// require express
const express = require('express');

// create instance from express
const app = express();

// require dotenv
require('dotenv').config();
// middleware bodyparser
app.use(express.json());

// create port
const PORT = process.env.PORT;
//import router express
app.use('/api/contact',require('./routes/contactRoutes'))



// require connect function
const connect = require('./Config/ConnectDB');
connect();

// listen to the port
app.listen(PORT, (err) => {
    err ? console.log(err):
    console.log(`server is listening on port: ${PORT}`);
})