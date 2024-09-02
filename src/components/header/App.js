import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './index';
import Navbar from './Navbar';
import Services from './services';
import Projects from './project';
import AboutSection from './about';
import ContactSection from './getintouch';
import Home from './Home';

const App = () => {
  return (
    <>
    
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/index" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/getintouch" element={<ContactSection />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
