// src/components/About.js
import React from 'react';
import './About.css';

function About({ profilePic }) {
  const profileImage = require(`../assets/${profilePic}`).default;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <img src={profileImage} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h1>Hi, I am [Your Name].</h1>
          <p>This is where you describe yourself.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
