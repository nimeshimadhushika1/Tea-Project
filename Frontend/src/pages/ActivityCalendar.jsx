// src/pages/ActivityCalendar.jsx
import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./ActivityCalendar.css"; // style as shown in your image
import cultivationImage from "../assets/back.jpg"; // replace with your image path

const steps = [
  "1. Land preparation and soil testing",
  "2. Selection of suitable tea variety",
  "3. Nursery management and propagation",
  "4. Field planting and spacing",
  "5. Watering and mulching",
  "6. Fertilizer application",
  "7. Weed and pest management",
  "8. Plucking and maintenance",
  "9. Harvesting and processing",
];

const ActivityCalendar = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Tea Cultivation Process", 20, 20);

    doc.setFontSize(12);
    steps.forEach((step, index) => {
      doc.text(`${step}`, 20, 40 + index * 10);
    });

    doc.save("Tea_Cultivation_Process.pdf");
  };

  return (
    <div className="activity-calendar-container">
      <h2>Activity Calendar</h2>
      <div className="calendar-content">
        <img src={cultivationImage} alt="Cultivation" className="calendar-img" />
        <div className="pdf-section">
          <div className="pdf-card" onClick={generatePDF}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
              alt="pdf"
              className="pdf-icon"
            />
            <p>Step by step cultivative process</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCalendar;
