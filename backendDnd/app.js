import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// ✅ CORS config sabse upar
const allowedOrigins = [
  "https://tumhara-vercel-url.vercel.app", // Vercel ka actual URL
  "http://localhost:3000" // local testing
];
app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ API routes
app.use('/api', userRoutes);

// ✅ MongoDB connection + Server start
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server running on port ${process.env.PORT || 3001}`);
    });
  })
  .catch(err => console.error(err));
