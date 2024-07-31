import React, { useState } from 'react';
import './Header.css'; // Ensure styles are correctly applied

function Header() {
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(prevSelected => (prevSelected === id ? null : id));
  };

  return (
    <header className="Header">
      <nav aria-label="Main Navigation">
        <ul>
          <li 
            className={selected === 'home' ? 'selected' : ''} 
            onClick={() => handleClick('home')}
            aria-current={selected === 'home' ? 'page' : undefined}
          >
            <a href="#hero">Home</a>
          </li>
          <li 
            className={selected === 'about' ? 'selected' : ''} 
            onClick={() => handleClick('about')}
            aria-current={selected === 'about' ? 'page' : undefined}
          >
            <a href="#about">About</a>
          </li>
          <li 
            className={selected === 'projects' ? 'selected' : ''} 
            onClick={() => handleClick('projects')}
            aria-current={selected === 'projects' ? 'page' : undefined}
          >
            <a href="#projects">Projects</a>
          </li>
          <li 
            className={selected === 'hobbies' ? 'selected' : ''} 
            onClick={() => handleClick('hobbies')}
            aria-current={selected === 'hobbies' ? 'page' : undefined}
          >
            <a href="#hobbies">Hobbies</a>
          </li>
          <li 
            className={selected === 'contact' ? 'selected' : ''} 
            onClick={() => handleClick('contact')}
            aria-current={selected === 'contact' ? 'page' : undefined}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
