// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-left">
          <img 
            src="/picforwebsite.jpeg" 
            alt="Professional headshot of Badong Badong" 
            className="profile-picture"
          />
        </div>
        <div className="profile-details">
          <h1>Badong Badong</h1>
          <p className="bio">
            CS major with a Cognitive Science minor at Swarthmore College | Prev @Google
          </p>
          <p>Swarthmore, Pennsylvania, United States</p>
          
          <div className="header-buttons">
            <button className="hero-button">Contact Info</button>
            <button className="hero-button hero-button-outline">View My Work</button>
          </div>

          {/* Experience, Skills, and Projects Sections */}
          <div className="experience">
            <h2>Experience</h2>
            <p>Details about previous internships and work experiences.</p>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <p>JavaScript, React, AI, Web Development, and more.</p>
          </div>
          <div className="projects">
            <h2>Projects</h2>
            <p>Notable projects I’ve worked on, including web apps and AI applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;