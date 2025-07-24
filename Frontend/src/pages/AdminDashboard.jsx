// src/pages/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import teaImage from "../assets/back2.jpg";
import cropImage from "../assets/back3.jpg";
import userImage from "../assets/back.jpg"; // Or use a different admin-related image
import "./AdminDashboard.css";

const AdminDashboard = () => {
const adminTiles = [
  {
    img: teaImage,
    title: "Tea Varieties",
    desc: "Add or update tea varieties for different zones.",
    link: "/adminteavar",
  },
  {
    img: cropImage,
    title: "Crop Care",
    desc: "Manage crop care instructions and pest control updates.",
    link: "/admincrop-care",
  },
  {
    img: userImage,
    title: "User Management",
    desc: "View or delete user accounts and permissions.",
  },
];

   return (
    <div className="dashboard">
      <section className="featured-updates">
        <h2>Admin Dashboard</h2>
        
        <div className="updates-grid">
          {adminTiles.map((tile, i) => 
           tile.link ? (
            <Link to={tile.link} className="update-card" key={i}>
              <img src={tile.img} alt={tile.title} />
              <div className="update-info">
                <h3>{tile.title}</h3>
                <p>{tile.desc}</p>
              </div>
            </Link>
           ): (
              <div className="update-card" key={i}>
                <img src={tile.img} alt={tile.title} />
                <div className="update-info">
                  <h3>{tile.title}</h3>
                  <p>{tile.desc}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
