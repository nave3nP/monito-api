const express = require('express');
const router = express.Router();

router.get('/morePuppies', (req, res) => {
  const morePuppies = [
    {
      id: 'MO102',
      breed: 'Poodle Tiny Sepia',
      gender: 'Male',
      age: '02 months',
      price: '4,000,000 VND',
      imgUrl: 'url_to_image_1',
    },
    {
      id: 'MO231',
      breed: 'Pomeranian White',
      gender: 'Male',
      age: '02 months',
      price: '6,500,000 VND',
      imgUrl: 'url_to_image_2',
    },
    {
      id: 'MO502',
      breed: 'Pembroke Corgi Tricolor',
      gender: 'Male',
      age: '03 months',
      price: '9,000,000 VND',
      imgUrl: 'url_to_image_3',
    },
  ];
  res.status(200).json(morePuppies);
});

module.exports = router;
