import React from 'react';
import './ViewStateDetails.css';
import bgImage from '../assets/bgImage.jpg'; // Use your actual image path

const ViewStateDetails = () => {
  return (
    <div className="state-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="state-card">
        <span className="state-label">State 01</span>
      </div>
      <div className="state-card">
        <span className="state-label">State 02</span>
      </div>
      <div className="state-card">
        <span className="state-label">State 03</span>
      </div>
      <div className="state-card">
        <span className="state-label">State 04</span>
      </div>
    </div>
  );
};

export default ViewStateDetails;
