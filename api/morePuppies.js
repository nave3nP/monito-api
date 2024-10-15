export default function handler(req, res) {
  const morePuppies = [
    {
      id: 'MO102',
      breed: 'Poodle Tiny Sepia',
      gender: 'Male',
      age: '02 months',
      price: '4,000,000 VND',
    },
    {
      id: 'MO231',
      breed: 'Pomeranian White',
      gender: 'Male',
      age: '02 months',
      price: '6,500,000 VND',
    },
    {
      id: 'MO502',
      breed: 'Pembroke Corgi Tricolor',
      gender: 'Male',
      age: '03 months',
      price: '9,000,000 VND',
    },
  ];
  res.status(200).json(morePuppies);
}
