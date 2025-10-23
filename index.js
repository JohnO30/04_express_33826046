//Express server setup

const express = require('express');
const path = require('path');
const app = express();

const PORT = 8000;
// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
