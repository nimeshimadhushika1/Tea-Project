import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import teaHarvest1 from "../assets/tea-harvest1.jpg";
import teaHarvest2 from "../assets/tea-harvest2.jpg";
import teaHarvest3 from "../assets/tea-harvest3.jpg";
import teaHarvest4 from "../assets/tea-harvest4.jpg"; 

const AboutUs = () => {
  const images = [teaHarvest1, teaHarvest2, teaHarvest3,teaHarvest4]; // Image array
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="about-container">
      <h2>About Us</h2>

      <section className="about-section">
         <h3><u>Our Mission</u></h3>
        <p>
          At GreenHarvest, our mission is to empower tea farmers with accessible, innovative, and sustainable digital solutions — helping them cultivate smarter, connect with experts, and grow greener. We aim to bridge the gap between tradition and technology to ensure a thriving, informed, and resilient tea farming community.
        </p>
      </section>

      <section className="about-section">
        <h3><u>Our Vision</u></h3>
        <p>
          To be the leading digital partner for tea farmers, fostering a future where technology, tradition, and sustainability unite to cultivate a thriving and empowered global tea community.
        </p>
      </section>

      <section className="about-section values">
        <h3><u> Our Core Values</u></h3>
        <div className="values-grid">
          <div className="value-card">
            <h4>👩‍🌾 Farmer First</h4>
            <p>We prioritize the needs, voices, and well-being of tea growers in everything we do.</p>
          </div>
          <div className="value-card">
            <h4>🌍 Sustainability</h4>
            <p>We support eco-friendly practices that protect nature and future generations.</p>
          </div>
          <br></br><div className="value-card">
            <h4>🔗 Connectivity</h4>
            <p>We connect farmers, experts, and communities through smart digital tools.</p>
          </div>
          <div className="value-card">
            <h4>📚 Knowledge Sharing</h4>
            <p>We promote lifelong learning by providing access to modern and traditional farming wisdom.</p>
          </div>
        </div>
      </section>


   <section className="about-section">
        <img
          src={images[currentImageIndex]}
          alt="Tea Harvest"
          className="tea-harvest"
        />
      </section>

    <section className="about-section">
        <h3><u>Our Team</u></h3>
    </section>
    </div>
  );
};

export default AboutUs;

