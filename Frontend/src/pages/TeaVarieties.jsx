import React, { useState } from "react";
import tea1 from "../assets/back.jpg";
import tea2 from "../assets/back.jpg";
import tea3 from "../assets/back2.jpg";
//import "./../styles/TeaVarieties.css";
import { useNavigate } from "react-router-dom";

const varieties = [
  {
    name: "TRI 2027",
    image: tea1,
    description: "High-quality tea variety for mid-grown zones.",
  },
  {
    name: "TRI 4042",
    image: tea2,
    description: "Resistant to pests, best for low-country plantations.",
  },
  {
    name: "TRI 2026",
    image: tea3,
    description: "Popular in upcountry regions with high yield.",
  },
];

const TeaVarieties = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (variety) => {
    setSelected(variety);
  };

  return (
    <div className="tea-varieties-page">
      <div className="left-panel">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <div className="variety-list">
          {varieties.map((v, index) => (
            <img
              key={index}
              src={v.image}
              alt={v.name}
              className={`thumbnail ${selected === v ? "selected" : ""}`}
              onClick={() => handleSelect(v)}
            />
          ))}
        </div>
      </div>

      <div className="right-panel">
        {selected ? (
          <>
            <img src={selected.image} alt={selected.name} className="main-img" />
            <div className="info-box">
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
              <button className="start-btn">Start</button>
            </div>
          </>
        ) : (
          <p className="placeholder">Select a tea variety to view details.</p>
        )}
      </div>
    </div>
  );
};

export default TeaVarieties;
