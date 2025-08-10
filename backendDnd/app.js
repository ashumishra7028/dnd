import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';

// dotenv ko sabse pehle load karo
dotenv.config(); // ✅ Must come BEFORE you use process.env

// __dirname ka setup ES module ke liye
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// express app initialize karo pehle
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// static files serve karne ke liye ye line app initialize ke baad hi likho
app.use(express.static(path.join(__dirname, '../dnd/dist')));

// React app ke liye fallback route (single page application routing ke liye)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dnd/dist', 'index.html'));
});

// API routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL; // ✅ load env var

// MongoDB connect karo, uske baad server start karo
mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });
