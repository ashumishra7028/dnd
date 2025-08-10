const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/orderFormDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

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
app.post("/api/submit", async (req, res) => {
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
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
