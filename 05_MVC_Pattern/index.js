const express = require("express");
const app = express();
const connectDB = require('./config/db'); // import connectDB
const productRoutes = require('./routes/productRoutes'); // import productRoutes
const dotenv = require("dotenv"); // import dotenv

dotenv.config(); // load the dotenv.config in the application
const PORT = process.env.PORT; // store PORT number in form of dotenv

connectDB(); // //connect to database

app.use(express.json()); // Know more about this✅

app.get("/", (req, res) => {
  res.send("Hello World from backend!");
});

app.use('/api', productRoutes); // load the productRoutes in the application
// api ---> api/products 

app.listen(PORT, () => {
  console.log(`Products app listening on port ${PORT}`);
});
