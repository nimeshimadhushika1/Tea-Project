// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import back1 from "../assets/back.jpg";
import back2 from "../assets/back2.jpg";
import back3 from "../assets/back3.jpg";
import "./Home.css";

const Home = () => {
  const backgrounds = [back1, back2, back3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="home"
        style={{
          backgroundImage: `url(${backgrounds[current]})`,
        }}
      >
        <div className="overlay">
          <h1>Welcome to the Tea World</h1>
        </div>
      </div>

      {/* Quick Access Tiles */}
      <div className="quick-access">
        <div className="tile">
          <h3>Tea Varieties</h3>
          <p>Explore the diverse range of Ceylon teas.</p>
        </div>
        <div className="tile">
          <h3>Farmer Guide</h3>
          <p>Step-by-step guide to improve your plantation.</p>
        </div>
        <div className="tile">
          <h3>Support</h3>
          <p>Reach out for farming or technical support.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
