// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navbar />

      {/* Header with Profile Information */}
      <header className="App-header">
        <div className="header-container">
          <img 
            src="/picforwebsite.jpeg" 
            alt="Professional headshot of Badong Badong" 
            className="profile-picture"
          />
          <div className="profile-details">
            <h1>Badong Badong</h1>
            <p className="bio">
              CS major with a Cognitive Science minor at Swarthmore College | Prev @Google
            </p>
            <p>Swarthmore, Pennsylvania, United States</p>
            <div className="header-buttons">
              <a href="https://github.com/branley1" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Contact info
              </a>
              <a href="#projects" className="btn btn-outline-primary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container my-5">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;