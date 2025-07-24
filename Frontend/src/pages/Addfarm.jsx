import React, { useState } from "react";
import "./AddFarm.css";

import tea1 from "../assets/back.jpg"; // replace with your actual image paths
import tea2 from "../assets/back2.jpg";
import tea3 from "../assets/back2.jpg";

// Static tea variety info
const teaVarietyInfo = {
  "TRI 2025": { img: tea1, description: "High yield, suitable for Kandy." },
  "TRI 4042": { img: tea2, description: "Disease resistant variety." },
  "TRI 2023": { img: tea3, description: "Ideal for Nuwara Eliya climate." },
};

const teaVarieties = {
  Central: {
    Kandy: ["TRI 2025", "TRI 4042"],
    "Nuwara Eliya": ["TRI 2023"],
  },
};

const AddFarm = () => {
  const [formData, setFormData] = useState({
    province: "",
    district: "",
    farmName: "",
    dsDivision: "",
    gnDivision: "",
  });

  const [varieties, setVarieties] = useState([]);
  const [selectedVariety, setSelectedVariety] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { province, district } = formData;
    if (teaVarieties[province] && teaVarieties[province][district]) {
      setVarieties(teaVarieties[province][district]);
      setSelectedVariety(""); // reset selected
    } else {
      setVarieties([]);
    }
  };

  return (
    <div className="addfarm-wrapper">
      <div className="form-section">
        <form className="addfarm-form" onSubmit={handleSubmit}>
          <h2>Add Farm</h2>
          <input
            type="text"
            name="farmName"
            placeholder="Farm Name"
            value={formData.farmName}
            onChange={handleChange}
            required
          />
          <input
            type="int"
            name="farmArea"
            placeholder="Farm area"
            value={formData.farmArea}
            onChange={handleChange}
            required
          />
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
          >
            <option value="">Select Province</option>
            {Object.keys(teaVarieties).map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          >
            <option value="">Select District</option>
            {formData.province &&
              Object.keys(teaVarieties[formData.province] || {}).map(
                (dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                )
              )}
          </select>
          <input
            type="text"
            name="dsDivision"
            placeholder="DS Division"
            value={formData.dsDivision}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gnDivision"
            placeholder="GN Division"
            value={formData.gnDivision}
            onChange={handleChange}
          />
          <button type="submit">Add Farm</button>
        </form>

        {/* Display clickable variety icons */}
        {varieties.length > 0 && (
          <div className="variety-icons">
            {varieties.map((v, i) => (
              <img
                key={i}
                src={teaVarietyInfo[v]?.img}
                alt={v}
                className={`circle-img ${selectedVariety === v ? "active" : ""}`}
                onClick={() => setSelectedVariety(v)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Display selected tea variety details */}
      {selectedVariety && (
        <div className="variety-details">
          <img
            src={teaVarietyInfo[selectedVariety].img}
            alt={selectedVariety}
            className="large-img"
          />
          <div className="description-box">
            <h4>{selectedVariety}</h4>
            <p>{teaVarietyInfo[selectedVariety].description}</p>
            <button className="start-button">Start</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFarm;
