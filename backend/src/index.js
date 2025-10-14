import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.port || 8000;

app.listen(PORT, () => {
  console.log(`Server is Running on Port: ${PORT}`);
});