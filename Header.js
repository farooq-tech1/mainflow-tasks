import React from 'react';
import './Header.css'; // Make sure to create this CSS file for styles

const Header = () => {
  return (
    <header className="header">
      <img src="assets/logo.png" alt="Company Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
