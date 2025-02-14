const express = require('express');
const app = express();
const connectDB = require('./db');
const users = require('./routes/users');  // import users
const dotenv = require('dotenv') // import dotenv

dotenv.config() // load dotenv

const PORT = process.env.PORT;

//body parser
app.use(express.json());

//connect to database
connectDB();

app.use('/api', users) // load the users

app.get('/', (req, res) => {
    console.log("Home Page")
    res.send('Hello from backend!');
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})