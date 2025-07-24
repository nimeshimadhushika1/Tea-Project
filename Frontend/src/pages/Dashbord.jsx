
import React from "react";
import { Link } from "react-router-dom"; // ✅ Enables client-side navigation
import back1 from "../assets/back.jpg";
import back2 from "../assets/back2.jpg";
import back3 from "../assets/back3.jpg";
import "./Dashbord.css";

const Dashboard = () => {
  // ✅ Define updates as an array of tile content
  const updates = [
    {
      img: back1,
      title: "Add tea State",
      desc: "Join us on July 20 for our annual festival.",
      link: "/add-farm", // ✅ Navigates to AddFarm page
    },
    {
      img: back1,
      title: "View State details",
      desc: "Join us on July 20 for our annual festival.",
      link: "/view-farm", // ✅ Optional: add path when route is ready
    },
    {
      img: back1,
      title: "Activity Calendar",
      desc: "Step-by-step cultivative process",
      link: "/activity", // ✅ Navigates to Activity Calendar page
    },
    {
      img: back2,
      title: "Tea Varieties",
      desc: "Learn about organic techniques on Aug 5.",
      link: "/tea-varieties", // ✅ Navigates to tea varieties page
    },
    {
      img: back3,
      title: "Crop Care",
      desc: "Interactive session on pest control, Sep 10.",
      link: "/crop-care", // ✅ Navigates to crop care page
    },
  ];

  return (
    <div className="dashboard">
      {/* ✅ Title Section */}
      <section className="featured-updates">
        <h2>Featured Updates</h2>

        {/* ✅ Grid displaying cards */}
        <div className="updates-grid">
          {updates.map((u, i) =>
            u.link ? (
              // ✅ If a link is provided, use <Link> for navigation
              <Link to={u.link} className="update-card" key={i}>
                <img src={u.img} alt={u.title} />
                <div className="update-info">
                  <h3>{u.title}</h3>
                  <p>{u.desc}</p>
                </div>
              </Link>
            ) : (
              // ✅ Fallback: static card if no link is available
              <div className="update-card" key={i}>
                <img src={u.img} alt={u.title} />
                <div className="update-info">
                  <h3>{u.title}</h3>
                  <p>{u.desc}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
