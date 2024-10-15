export default function handler(req, res) {
  const products = [
    {
      id: 'PR001',
      name: 'Dog Leash',
      price: '150,000 VND',
      description: 'Durable nylon leash.',
    },
    {
      id: 'PR002',
      name: 'Dog Food',
      price: '500,000 VND',
      description: 'High-quality dog food.',
    },
    {
      id: 'PR003',
      name: 'Pet Shampoo',
      price: '200,000 VND',
      description: 'Gentle pet shampoo for sensitive skin.',
    },
  ];
  res.status(200).json(products);
}
