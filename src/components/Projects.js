import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleBoxClick = (index) => {
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  const handleArrowClick = (direction) => {
    setHoveredIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? 2 : prevIndex - 1;
      } else {
        return prevIndex === 2 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="projects" className="Projects">
      <h2>My Projects</h2>
      <div className="project-container">
        <button className="arrow arrow-left" onClick={() => handleArrowClick('left')}>{'<'}</button>
        <div
          className={`project ${hoveredIndex === 0 ? 'hovered' : ''}`}
          onClick={() => handleBoxClick(0)}
        >
          <h3>AYURMEDIPRO</h3>
          <p>I've developed a PHP application for managing an Ayurvedic hospital. It handles patient details and history, allowing doctors to write prescriptions, suggest treatments, and recommend medicines for personalized care.</p>
        </div>
        <div
          className={`project ${hoveredIndex === 1 ? 'hovered' : ''}`}
          onClick={() => handleBoxClick(1)}
        >
          <h3>PERSONALIZED E-COMMERCE RECOMMENDATION</h3>
          <p>I've developed a Python application that recommends the best products using various APIs. It gathers and analyzes product data, reviews, and ratings to suggest top options, ensuring personalized and reliable recommendations.</p>
        </div>
        <div
          className={`project ${hoveredIndex === 2 ? 'hovered' : ''}`}
          onClick={() => handleBoxClick(2)}
        >
          <h3>TAX CALCULATION SYSTEM</h3>
          <p>I’ve developed a tax calculation system in C. It takes a user’s taxable income, applies predefined tax brackets, calculates the total tax owed, and outputs the result. This system ensures accurate and efficient tax computation.</p>
        </div>
        <button className="arrow arrow-right" onClick={() => handleArrowClick('right')}>{'>'}</button>
      </div>
    </section>
  );
}

export default Projects;
