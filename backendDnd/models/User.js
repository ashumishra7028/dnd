import mongoose from 'mongoose';

// ----------- UserService Schema (Join Now Form) -----------
const userServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  type: { type: String, required: true },
  mode: { type: String },               // optional
  academyLocation: { type: String },   // optional
  academyPincode: { type: String }     // optional
}, { timestamps: true });

export const UserServiceModel = mongoose.model("UserService", userServiceSchema);


// ----------- GarbaRegistration Schema -----------
const garbaRegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  type: { type: String, enum: ['solo', 'couple', 'team'], required: true },
  teamName: { type: String },
  teamMemberCount: { type: Number }
}, { timestamps: true });

export const GarbaRegistrationModel = mongoose.model("GarbaRegistration", garbaRegistrationSchema);
