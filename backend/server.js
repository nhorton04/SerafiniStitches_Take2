import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('Your refrigerator is running...why dont you go catch it?');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `${
      process.env.NODE_ENV[0].toUpperCase() + process.env.NODE_ENV.slice(1)
    } Serve Hair Running on Port ${PORT}`.green.bold
  )
);
