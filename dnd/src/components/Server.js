//const express = require("express");
//const mongoose = require("mongoose");
//const cors = require("cors");
//const bodyParser = require("body-parser");

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  mongoose.connect("mongodb+srv://admin:admin@cluster0.hmsyik2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

// Mongoose Schema
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  pincode: String,
  type: String,
  mode: String,
  academyLocation: String,
  academyPincode: String,
});

const Form = mongoose.model("Form", formSchema);

// Routes
app.post("https://dnd-4olv.onrender.com/api/submit", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("Submission error:", err);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

//app.listen(PORT, () => {
//  console.log(`Server running on http://localhost:${PORT}`);
//});
