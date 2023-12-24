import React, { useState } from 'react';
import './ob.css';

const Ob = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const objectives = [
    { title: 'Objective 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Objective 2', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { title: 'Objective 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Objective 4', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const handleCardClick = (index) => {
    setHoveredIndex(null); // Reset hoveredIndex
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="objective-section">
      <h1>Our Objectives</h1>
      <div className="cards">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className={`card ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <div className="glow" />
            <h3>{objective.title}</h3>
            {hoveredIndex === index && <p>Click Here</p>}
            {expandedIndex === index && <p>{objective.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ob;
