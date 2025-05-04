import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobSeekers from './pages/JobSeekers';
import WhatWeOffer from './pages/WhatWeOffer';
import Contact from './pages/Contact';
import About from './pages/About';
import JobOpenings from './pages/JobOpenings';
import JobDetails from './pages/JobDetails';

// Import required CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import './App.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function App() {
  useEffect(() => {
    // Initialize AOS
    const AOS = require('aos');
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-seekers" element={<JobSeekers />} />
          <Route path="/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/job-openings" element={<JobOpenings />} />
          <Route path="/job-details/:slug" element={<JobDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
