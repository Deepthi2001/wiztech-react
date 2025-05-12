import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h5>About Us</h5>
          <p>
            Wiztech Info Solutions was established and firmly rooted beyond
            traditional staffing and consulting services – we believe in
            relationships. We are invested in you.
          </p>
          
        </div>

        <div className="footer-column">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/job-seekers">Job Seekers</Link></li>
            <li><Link to="/what-we-offer">What we Offer</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Contact Info</h5>
          <ul className="contact-info">
            <li>
              <i className="fas fa-envelope"></i>
              <span>sales@wiztechinfo.com</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>040-35074945</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>
                 #14-226, Plot No. 58, West Raghava Nagar,
                  Meerpet, Saroor Nagar, Rangareddi,
                  Telangana, India, 500097</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WIZTECH INFO SOLUTIONS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
