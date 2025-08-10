import { GarbaRegistrationModel } from '../models/User.js';

class GarbaController {
  static register = async (req, res) => {
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
        teamName,
        teamMemberCount,
      } = req.body;

      // Basic validation
      if (!name || !email || !phone || !gender || !address || !city || !pincode || !type) {
        return res.status(400).json({ status: "failed", message: "All required fields must be filled." });
      }

      if (type === "team") {
        if (!teamName || !teamMemberCount || isNaN(teamMemberCount) || +teamMemberCount < 1) {
          return res.status(400).json({ status: "failed", message: "Valid team name and member count are required for team type." });
        }
      }

      const newRegistration = new GarbaRegistrationModel({
        name,
        email,
        phone,
        gender,
        address,
        city,
        pincode,
        type,
        teamName,
        teamMemberCount,
      });

      await newRegistration.save();

      res.status(201).json({ status: "success", message: "Garba registration successful." });
    } catch (error) {
      console.error("Garba registration error:", error);
      res.status(500).json({ status: "failed", message: "Server error during Garba registration." });
    }
  };
}

export default GarbaController;
