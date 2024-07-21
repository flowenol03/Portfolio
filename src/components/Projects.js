import React from 'react';
import './Projects.css'; // You can add styles here

function Projects() {
  return (
    <section id="projects" className="Projects">
      <h2>My Projects</h2>
      <div className="project">
        <h3>AYURMEDIPRO</h3><br></br>
        I've developed a PHP application for managing an Ayurvedic hospital. It handles patient details and history, allowing doctors 
        to write prescriptions, suggest treatments, and recommend medicines for personalized care.
      </div>
      <div className="project">
        <h3>PERSONALIZED E-COMMERCE RECOMMENDATION</h3><br></br>
        I've developed a Python application that recommends the best products using various APIs. It gathers and analyzes product 
data, reviews, and ratings to suggest top options, ensuring personalized and reliable recommendations. 
      </div>
      <div className="project">
        <h3>TAX CALCULATION SYSTEM </h3><br></br>
        I’ve developed a tax calculation system in C. It takes a user’s taxable income, applies predefined tax brackets, calculates the 
total tax owed, and outputs the result. This system ensures accurate and efficient tax computation.
      </div>
      <br></br>
    </section>
  );
}

export default Projects;
