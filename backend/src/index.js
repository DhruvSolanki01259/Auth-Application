import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";

// Routes
import authRoutes from "./routes/auth.routes.js";

// Database
import { connectDB } from "./database/connectDB.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: `${process.env.CLIENT_URL}`, credentials: true }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running on Port: ${PORT}`);
  connectDB();
});
