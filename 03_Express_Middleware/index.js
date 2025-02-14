const express = require("express");
const app = express();
const port = 3000;
const route = require('./routes/route') // import the route from routes folder

// mounting the route
app.use('/api', route)      
// api/student ---> student page
// api/admin ---> admin page

// loading middleware into the app
// Built-in middleware (express.json())
// app.use(express.json());

// Middleware ---> logging, auth  validation
// creation of a Application-level middleware 
// const loggInMiddleware = (req, res, next) => {
//     console.log('LOGGED IN');
//     next();
// }

// const authMiddleware = (req, res, next) => {
//     console.log('AUTH');
//     next();
// }

// const validMiddleware = (req, res, next) => {
//     console.log("VALIDATION");
//     // res.send('Redirect to LOGIN page'); // End the request-response cycle.
//     next();
// }

// loading middleware into the application -- (the order should be place in a proper sequence)
// app.use(loggInMiddleware);
// app.use(authMiddleware);
// app.use(validMiddleware);

app.get("/", (req, res) => {
  console.log("Route handler");
  console.log(req.body);  
  res.send("Hello from backend!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
