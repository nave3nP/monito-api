const express = require('express');
const app = express();

// Import API routes
const pets = require('./api/pets');
const products = require('./api/products');
const customers = require('./api/customers');
const morePuppies = require('./api/morePuppies');

// Define routes
app.use('/api', pets);
app.use('/api', products);
app.use('/api', customers);
app.use('/api', morePuppies);

// Set up the server to listen on a port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
