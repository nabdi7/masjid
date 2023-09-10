import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Education from './components/Education';
import Donate from './components/Donate';
import Prayer from './components/Prayer';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education" element={<Education />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prayer" element={<Prayer />} />
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
