export default function handler(req, res) {
  const pets = [
    {
      id: 'MO231',
      breed: 'Pomeranian White',
      gender: 'Male',
      age: '02 months',
      price: '6,900,000 VND',
    },
    {
      id: 'MO502',
      breed: 'Poodle Tiny Yellow',
      gender: 'Female',
      age: '02 months',
      price: '3,900,000 VND',
    },
    {
      id: 'MO102',
      breed: 'Poodle Tiny Sepia',
      gender: 'Male',
      age: '02 months',
      price: '4,000,000 VND',
    },
    {
      id: 'MO512',
      breed: 'Alaskan Malamute Grey',
      gender: 'Male',
      age: '02 months',
      price: '8,900,000 VND',
    },
  ];
  res.status(200).json(pets);
}
