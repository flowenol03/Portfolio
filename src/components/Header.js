import React from 'react';
import './Header.css'; // Ensure styles are correctly applied

function Header() {
  return (
    <header className="Header">
      <h1>HSEMAHTARP</h1>
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