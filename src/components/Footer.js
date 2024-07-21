import React from 'react';
import './Footer.css'; // You can add styles here

function Footer() {
  return (
    <footer className="Footer">
      <p>&copy; {new Date().getFullYear()} Prathamesh Khandekar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
