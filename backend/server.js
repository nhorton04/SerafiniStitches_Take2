import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
import colors from 'colors';

dotenv.config();

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('Your refrigerator is running...why dont you go catch it?');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `${
      process.env.NODE_ENV[0].toUpperCase() + process.env.NODE_ENV.slice(1)
    } Serve Hair Running on Port ${PORT}`.green.bold
  )
);
