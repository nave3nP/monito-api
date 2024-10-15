const express = require('express');
const router = express.Router();

router.get('/customers', (req, res) => {
  const customers = [
    { name: 'John Doe', pet: 'Shiba Inu' },
    { name: 'Jane Smith', pet: 'Poodle Tiny Sepia' },
    { name: 'Mark Johnson', pet: 'Pomeranian White' },
    { name: 'Sarah Connor', pet: 'Alaskan Malamute Grey' },
  ];
  res.status(200).json(customers);
});

module.exports = router;
