import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <Router>
      <div className={`app-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar dakrMode={darkMode} setDarkMode={setDarkMode} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

