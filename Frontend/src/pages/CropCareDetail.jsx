// src/pages/CropCare.jsx
import React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
//import TeaLeaf1 from '../assets/TeaLeaf1.jpg'; // Same image for example
import { FaArrowLeft } from 'react-icons/fa';
import './CropCareDetail.css';

const CropCareDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image, title, description, price } = location.state || {};
  
  return (
    <div className="back-arrow">
      {/* Back arrow */}
      <button onClick={() => navigate(-1)} className="text-3xl mb-4">
         <FaArrowLeft size={25}/>
      </button>

      {/* TeaLeaf1 image */}
      <div className="round-image">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"/>
      </div>

      {/* Tea details */}
      <div className="tea-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default CropCareDetail;