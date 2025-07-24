import React, { useState } from "react";
import "./AdminAddTeaVariety.css";
import teaWorkerImg from "../assets/tea-worker2.jpg"; // replace with your actual image

const AdminAddTeaVariety = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // handle form submission
  };

  return (
    <div className="add-tea-container">
      <div className="image-section">
        <img src={teaWorkerImg} alt="Tea Worker" />
      </div>

      <form className="form-section" onSubmit={handleSubmit}>
        <h2>Add Tea Variety</h2>

    <div className="form-group">
        <label>Name - Variety</label>
        <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        />
    </div>

  <div className="form-group">
    <label>Description</label>
    <textarea
      name="description"
      rows="4"
      value={formData.description}
      onChange={handleChange}
      required
    ></textarea>
  </div>

  <div className="form-group">
    <label>Location</label>
    <select
      name="location"
      value={formData.location}
      onChange={handleChange}
      required
    >
      <option value="">Select Location</option>
      <option value="upcountry">Up Country</option>
      <option value="midcountry">Mid Country</option>
      <option value="lowcountry">Low Country</option>
    </select>
  </div>

  <div className="form-group">
    <label>Upload Photo</label>
    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={handleChange}
    />
  </div>

   {/* Centered Button */}
  <div className="button-wrapper">
    <button type="submit" className="add-button">Add Tea</button>
  </div>

</form>

    </div>
  );
};

export default AdminAddTeaVariety;