//Express router setup
const express = require('express');
const router = express.Router();
const path = require('path');

// Default route
router.get("/", (req, res) => res.send("Hello World!"));

// About route
router.get('/about', (req, res) => res.send('<h1>This is the about page</h1>'));

// Contact route
router.get('/contact', (req, res) => res.send('<h1>My email address is jolad001@gold.ac.uk</h1>'));

// Date route – dynamically display the current date and time
router.get('/date', (req, res) => {
  const now = new Date();
  const dateString = now.toLocaleString();
  res.send(`<h1>The date today is ${dateString}</h1>`);
});

// Welcome route – greets user by name
router.get('/welcome/:name', (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Welcome, ${name}!</h1>`);
});


// First handler
function handlerOne(req, res, next) {
  console.log('Handler One executed');
  // Pass control to the next handler
  next();
}

// Second handler
function handlerTwo(req, res) {
  console.log('Handler Two executed');
  res.send('Chained route completed!');
}

// Define the /chain route with two chained handlers
router.get('/chain', handlerOne, handlerTwo);


// New /file route
router.get('/file', (req, res) => {
  // Send a.html as the response
  res.sendFile(path.join(__dirname, 'public', 'a.html'));
});



// Export the router so index.js can use it
module.exports = router;
