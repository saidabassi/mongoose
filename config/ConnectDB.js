const mongoose = require('mongoose')

// fonction to connect to DB
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
    console.log('connected to database...');    
    }
    catch(err) {
        console.log(err);
    }
    
}
module.exports = connect