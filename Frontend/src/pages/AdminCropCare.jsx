import React from 'react';
import './AdminCropCare.css';
import TeaLeaf1 from '../assets/TeaLeaf1.jpg'; // Replace with actual image path

const AdminCropCare = () => {
  const profiles = [
    { id: 1, name: 'Name', image: TeaLeaf1 },
    { id: 2, name: 'Name', image: TeaLeaf1 },
  ];

  return (
    <div className="profile-container">
      {profiles.map(profile => (
        <div className="profile-card" key={profile.id}>
          <img src={profile.image} alt="Profile" className="profile-image" />
          <span className="profile-name">{profile.name}</span>
          <div className="button-group">
            <button className="btn view-btn">View</button>
            <button className="btn edit-btn">Edit</button>
          </div>
        </div>
      ))}

      <button className="add-button">Add</button>
    </div>
  );
};

export default AdminCropCare;
