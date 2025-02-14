const mongoose = require("mongoose"); // Import the Mongoose library
const dotenv = require('dotenv'); // Import the dotenv

// load env configuration
dotenv.config()

// Create a connectDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

// export the connectDB function.
module.exports = connectDB;
