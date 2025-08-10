import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';


import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../dnd/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dnd/dist', 'index.html'));
});


dotenv.config(); // ✅ Must come BEFORE you use process.env

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL; // ✅ load env var

mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });
