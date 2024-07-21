import React from 'react';
import './Header.css'; // Ensure styles are correctly applied
import logo from '../assets/flowenol-removebg-preview.png'; // Go up one level from components to src, then into assets


function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="Logo" className="Logo" />
      <nav aria-label="Main Navigation">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
