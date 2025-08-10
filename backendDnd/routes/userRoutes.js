import express from 'express';
import UserServiceController from '../controllers/userController.js'; // ✅ Fix the import
import GarbaController from '../controllers/garbaController.js';



const router = express.Router();

// POST route to submit form
router.post('/submit', UserServiceController.submitService); // ✅ Now works
router.post('/register', GarbaController.register);


export default router;
