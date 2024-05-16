// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project">
        <h2>Project Title</h2>
        <img src="https://via.placeholder.com/150" alt="Project" />
        <p>Project description goes here.</p>
      </div>
    </section>
  );
}

export default Projects;
