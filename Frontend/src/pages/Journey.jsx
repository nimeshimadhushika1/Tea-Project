import React from "react";
import "./Journey.css";

const Journey = () => {
  const milestones = [
    {
      year: "2015",
      title: "Seed of an Idea",
      description: "It all began with a dream to bring natural, handpicked tea to every home.",
    },
    {
      year: "2017",
      title: "First Farm Partnership",
      description: "Partnered with small tea growers to ensure organic and sustainable sourcing.",
    },
    {
      year: "2019",
      title: "Global Launch",
      description: "Shipped our first international order and launched our online store.",
    },
    {
      year: "2022",
      title: "Community Growth",
      description: "Built a thriving tea-loving community with over 100,000 happy sippers.",
    },
    {
      year: "2025",
      title: "The Future",
      description: "Expanding into wellness teas and supporting local women entrepreneurs.",
    },
  ];

  return (
    <div className="journey-container">
      <h2 className="journey-title">🍃 Our Journey</h2>
      <p className="journey-intro">
        Every leaf has a story. Here's ours — a journey steeped in passion, people, and purpose.
      </p>

      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{milestone.year}</div>
            <div className="timeline-content">
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;