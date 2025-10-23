//Express server setup

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;


// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Serve static files 
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/a.html'));
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
