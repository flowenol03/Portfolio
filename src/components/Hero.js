import React from 'react';
import './Hero.css';
import imgSrc from '../assets/IMG_1346.png'; // Adjust path as needed

function Hero() {
  return (
    <section id="hero" className="Hero">
      <h2>Welcome</h2>
      <div className="Hero-content">
        <div className="Hero-photo">
          <img src={imgSrc} alt="Prathamesh Khandekar" />
        </div>
        <div className="Hero-text">
          <p>Hi, I’m Prathamesh Khandekar, a dedicated web developer with a passion for creating engaging digital experiences.</p>
          <p>I pride myself on being a smart worker who quickly adapts to new technologies and thrives on mastering any tech stack that comes my way.</p>
          <p>I have a solid foundation in HTML, CSS, JavaScript, and React. My goal is to bring designs to life with clean, efficient code and create user-friendly interfaces that stand out.</p>
          <p>Feel free to explore my projects to see how I approach problem-solving and innovation. If you have any questions or want to discuss potential opportunities, don’t hesitate to reach out. Enjoy your visit!</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
