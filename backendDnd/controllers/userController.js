import { UserServiceModel } from '../models/User.js';

class UserServiceController {
  static submitService = async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        gender,
        address,
        city,
        pincode,
        type,
        mode,
        academyLocation,
        academyPincode,
      } = req.body;

      // Validate required fields
      if (!name || !email || !phone || !gender || !address || !city || !pincode || !type) {
        return res.status(400).json({ status: "failed", message: "All required fields must be filled" });
      }

      const newService = new UserServiceModel({
        name,
        email,
        phone,
        gender,
        address,
        city,
        pincode,
        type,
        mode,
        academyLocation,
        academyPincode,
      });

      await newService.save();

      return res.status(201).json({ status: "success", message: "Submitted successfully" });
    } catch (error) {
      console.error("SubmitService error:", error);
      return res.status(500).json({ status: "failed", message: "Server Error" });
    }
  }
}

export default UserServiceController;
