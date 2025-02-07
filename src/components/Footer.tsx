import React from "react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="py-4 bg-gray-900 text-white text-center">
      <p className="text-white">&copy; {currentYear} Prathamesh Khandekar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
