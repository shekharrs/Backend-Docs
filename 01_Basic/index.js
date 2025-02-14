const express = require("express");
const app = express();
const port = 3000;
const item = require('./routes/item');  // import the router file - first


app.use('/api', item); // then load into application - second

// // Learning all the methods in Request
// // GET method
// app.get("/", (req, res) => {
//   //res.send('Hello World!')
//   res.sendFile("/dummy.html", { root: __dirname });
// });

// // POST method
// app.post("/items", (req, res) => {
//   //res.send("POST Request");
//   res.json({name: 'John Cena', age: 99});
// });

// // PUT method
// app.put("/items/:id", (req, res) => {
//   res.send("PUT Request");
// });

// // DELETE method
// app.delete("/items/:id", (req, res) => {
//   res.send("DELETE Request");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});