const mongoose = require('mongoose');
const dotenv = require('dotenv'); // import dotenv

dotenv.config() // load the dotenv;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;