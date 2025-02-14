// including express module and initialising app
const express = require("express");
const app = express();

// variable that store port number
const port = 3000;

// Request ---> GET, POST, PUT, DELETE
// Path ---> '/', '/about', '/articles', '/contact'
// On '/' page it will render
app.get('/', (req, res) => {
    res.send('Hello From Backend!');
})

// start app or server
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
