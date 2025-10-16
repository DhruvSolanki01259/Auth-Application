import express from 'express';
import 'dotenv/config';

// Routes
import authRoutes from './routes/auth.routes.js';

// Database
import { connectDB } from './database/connectDB.js';

const app = express();
const PORT = process.env.port || 8000;

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running on Port: ${PORT}`);
  connectDB();
});