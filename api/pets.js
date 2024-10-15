const express = require('express');
const router = express.Router();

router.get('/pets', (req, res) => {
  const pets = [
    {
      id: 'MO231',
      breed: 'Pomeranian White',
      gender: 'Male',
      age: '02 months',
      price: '6,900,000 VND',
      imgUrl: 'url_to_image_1',
    },
    {
      id: 'MO502',
      breed: 'Poodle Tiny Yellow',
      gender: 'Female',
      age: '02 months',
      price: '3,900,000 VND',
      imgUrl: 'url_to_image_2',
    },
    {
      id: 'MO102',
      breed: 'Poodle Tiny Sepia',
      gender: 'Male',
      age: '02 months',
      price: '4,000,000 VND',
      imgUrl: 'url_to_image_3',
    },
    {
      id: 'MO512',
      breed: 'Alaskan Malamute Grey',
      gender: 'Male',
      age: '02 months',
      price: '8,900,000 VND',
      imgUrl: 'url_to_image_4',
    },
    {
      id: 'MO502',
      breed: 'Pembroke Corgi Tricolor',
      gender: 'Male',
      age: '03 months',
      price: '9,000,000 VND',
      imgUrl: 'url_to_image_5',
    },
    {
      id: 'MO231',
      breed: 'Pomeranian White',
      gender: 'Male',
      age: '02 months',
      price: '6,500,000 VND',
      imgUrl: 'url_to_image_6',
    },
  ];
  res.status(200).json(pets);
});

module.exports = router;
