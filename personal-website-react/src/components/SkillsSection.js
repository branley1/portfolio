// src/components/SkillsSection.js
import React from 'react';

const SkillsSection = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="technical-skills">
          <h5>Technical</h5>
          <ul>
            <li>Python Programming Language</li>
            <li>Swift Programming Language, SwiftUI, Xcode</li>
            <li>C & C++ Programming Languages</li>
            <li>iOS — Mobile App Development</li>
            <li>Data Structures & Algorithms</li>
            <li>Computer Systems</li>
            <li>Django</li>
            <li>Git & GitHub</li>
            <li>Linux & Unix</li>
            <li>HTML & CSS</li>
            <li>REST APIs & RDBMS i.e MySQL</li>
          </ul>
        </div>
        <div className="interpersonal-skills">
          <h5>Interpersonal</h5>
          <ul>
            <li>Leadership</li>
            <li>Willingness to learn</li>
            <li>Team work</li>
            <li>Trustworthy</li>
            <li>Open-mindedness</li>
            <li>Dependable</li>
            <li>Collaborator</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
