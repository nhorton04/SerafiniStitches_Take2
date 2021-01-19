import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('Skyl1n31', 10),
    isAdmin: true,
  },
  {
    name: 'Joe Biden',
    email: 'joe@comeonman.com',
    password: bcrypt.hashSync('buildbackbetter', 10),
  },
  {
    name: 'Thomas Jefferson',
    email: 'tom@jeff.com',
    password: bcrypt.hashSync('freedom', 10),
  },
  {
    name: 'Nancy Pelosi',
    email: 'nancy@losi.com',
    password: bcrypt.hashSync('icecream', 10),
  },
];

export default users;
