import React from 'react';
import { useNavigate } from 'react-router-dom';
import teaWorker from '../assets/tea-worker.jpg';
import TeaLeaf1 from '../assets/TeaLeaf1.jpg';
import TeaLeaf2 from '../assets/TeaLeaf2.jpg';
import TeaLeaf3 from '../assets/TeaLeaf3.jpg';
import TeaLeaf4 from '../assets/TeaLeaf4.jpg';
import './CropCare.css';

const CropCare = () => {
   const navigate = useNavigate();
  const teaItems = [
  {
    image: TeaLeaf1,
    title: "Green Tea",
    description: "Light and fresh, rich in antioxidants.",
    price: "Rs. 550"
  },
  {
    image: TeaLeaf2,
    title: "Black Tea",
    description: "Strong and full-bodied, perfect for mornings.",
    price: "Rs. 500"
  },
  {
    image: TeaLeaf3,
    title: "Herbal Tea",
    description: "Caffeine-free and soothing for the soul.",
    price: "Rs. 600"
  },
  {
    image: TeaLeaf4,
    title: "White Tea",
    description: "Delicate flavor, least processed tea.",
    price: "Rs. 650"
  }
];


  return (
    <div className="tea-dashboard bg-[#fef3c7] min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4 p-4 flex flex-col items-center">
          <img src={teaWorker} alt="Tea Worker" className="rounded-lg w-full object-cover" />

      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6 relative">
        <div className="flex justify-end items-center mb-6">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </div>

        <div className="tea-grid">
          {teaItems.map((item, index) => (
            <div
              key={index}
              className="tea-card"
              onClick={() => navigate('/cropcaredetail', { state: item })}
            >
              <img src={item.image} alt={item.title} className="tea-img" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CropCare;