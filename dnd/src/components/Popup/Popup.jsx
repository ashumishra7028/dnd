import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup, mode = "join" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    city: "",
    pincode: "",
    type: "",
    academyLocation: "",
    academyCity: "",
    academyPincode: "",
    teamName: "",
    teamMemberCount: "", // new field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const {
      name,
      email,
      phone,
      gender,
      address,
      city,
      pincode,
      type,
      academyLocation,
      academyCity,
      academyPincode,
      teamName,
      teamMemberCount,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !gender ||
      !address ||
      !city ||
      !pincode ||
      !type
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (
      mode === "join" &&
      type === "choreography" &&
      (!academyLocation || !academyCity || !academyPincode)
    ) {
      alert("Please fill academy details for choreography.");
      return;
    }

    if (mode === "garba" && type === "team") {
      if (!teamName) {
        alert("Please provide a team name.");
        return;
      }
      if (!teamMemberCount || isNaN(teamMemberCount) || +teamMemberCount < 1) {
        alert("Please provide a valid number of team members.");
        return;
      }
    }

    const endpoint =
      mode === "garba"
        ? "https://dnd-4olv.onrender.com:8000/api/register"
        : "https://dnd-4olv.onrender.com:8000/api/submit";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        alert("✅ Submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          gender: "",
          address: "",
          city: "",
          pincode: "",
          type: "",
          academyLocation: "",
          academyCity: "",
          academyPincode: "",
          teamName: "",
          teamMemberCount: "",
        });
        setOrderPopup(false);
      } else {
        alert("❌ Submission failed.");
        console.error(result.error);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong.");
    }
  };

  const renderField = (label, name, inputType = "text") => (
    <div className="flex items-center mb-4">
      <div className="w-[140px] px-3 py-1 border bg-gray-100 dark:bg-gray-700 text-sm rounded-md text-center">
        {label}
      </div>
      <div className="mx-2 font-bold">:</div>
      <input
        type={inputType}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="flex-1 px-4 py-2 border rounded-md dark:bg-gray-800 min-w-[200px]"
      />
    </div>
  );

  const renderSelect = (label, name, options) => (
    <div className="flex items-center mb-4">
      <div className="w-[140px] px-3 py-1 border bg-gray-100 dark:bg-gray-700 text-sm rounded-md text-center">
        {label}
      </div>
      <div className="mx-2 font-bold">:</div>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="flex-1 px-4 py-2 border rounded-md dark:bg-gray-800 min-w-[200px]"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );

  const { type } = formData;

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white dark:bg-gray-900 rounded-md shadow-md w-[500px] max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">
                  {mode === "garba" ? "Garba Registration" : "Join Now"}
                </h1>
                <IoCloseOutline
                  onClick={() => setOrderPopup(false)}
                  className="text-3xl cursor-pointer"
                />
              </div>

              {renderField("Name", "name")}
              {renderField("Email", "email", "email")}
              {renderField("Phone", "phone", "tel")}
              {renderSelect("Gender", "gender", ["male", "female"])}
              {renderField("Address", "address")}
              {renderField("City", "city")}
              {renderField("Pincode", "pincode")}

              {mode === "join" &&
                renderSelect("Type", "type", ["participant", "choreography"])}

              {mode === "join" && type === "choreography" && (
                <>
                  {renderField("Academy Location", "academyLocation")}
                  {renderField("Academy City", "academyCity")}
                  {renderField("Academy Pincode", "academyPincode")}
                </>
              )}

              {mode === "garba" &&
                renderSelect("Category", "type", ["solo", "couple", "team"])}

              {mode === "garba" && type === "team" && (
                <>
                  {renderField("Team Name", "teamName")}
                  {renderField(
                    "Team Member Count",
                    "teamMemberCount",
                    "number"
                  )}
                </>
              )}

              <div className="flex justify-center mt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-8 rounded-full hover:scale-105 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
