// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header with Personal Information */}
      <header className="App-header py-5 bg-dark text-light text-center">
        <h1 className="display-4"> Badong Badong's Portfolio</h1>
        <img 
          src="/picforwebsite.jpeg" 
          alt="Personal Image" 
          className='img-thumbnail my-4'
          style={{ width: '150px', borderRadius: '50%' }}
          />
        <p className='lead'>
          Hello! I'm Badong Badong, a senior at Swarthmore College and a CS major with a Cognitive Science minor. 
          I enjoy creating amazing web experiences and applying AI for social good.
        </p>
        <a href="https://github.com/branley1" className='btn btn-primary mt-3'>Check out my GitHub</a>
      </header>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="container my-5">
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

