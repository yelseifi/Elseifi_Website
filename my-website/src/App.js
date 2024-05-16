// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [profilePic, setProfilePic] = useState('profile.jpg');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setProfilePic(profilePic === 'profile.jpg' ? 'toby.jpg' : 'profile.jpg');
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <header className="header">
          <h1>Your Name <span className="divider">|</span> <span className="alias" onClick={toggleDarkMode}>TOBË</span></h1>
        </header>
        <Navbar />
        <Routes>
          <Route path="/" element={<About profilePic={profilePic} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
