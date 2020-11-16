import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Mochamad Suprayogie',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Bilqis',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Dinnar',
      category: 'Shirts',
      image: '/images/drees2.jpg',
      price: 170,
      countInStock: 12,
      brand: 'Zara',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },
    
  ],
};
export default data;
