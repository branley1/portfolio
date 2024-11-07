// src/components/Navbar.js
import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="container">
        <a href="#about-me">Who Am I?</a>
        <a href="#course-highlight">Course Highlight</a>
        <a href="#relevant-experience">Relevant Experience</a>
        <a href="#project">Projects & Certifications</a>
        <a href="#contact">Contact Information</a>
      </div>
    </nav>
  );
};

export default Navbar;
