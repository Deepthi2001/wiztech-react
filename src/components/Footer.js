import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-white mb-4">About Us</h5>
            <p className="text-white-50">
              WIZTECH INFO SOLUTIONS was established and firmly rooted beyond
              traditional staffing and consulting services – we believe in
              relationships. We are invested in you.
            </p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/job-seekers" className="text-white-50 text-decoration-none">
                  Job Seekers
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white-50 text-decoration-none">
                  Our Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white-50 text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="text-white mb-4">Contact Info</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                info@wiztechinfosolutions.com
              </li>
              <li className="mb-2">
                <i className="fas fa-phone me-2"></i>
                +1 (123) 456-7890
              </li>
              <li>
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Business Street, Suite 100,<br />
                Silicon Valley, CA 95123
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-4 mb-4 bg-white-50" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-white-50 mb-0">
              © {new Date().getFullYear()} WIZTECH INFO SOLUTIONS. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="social-links">
              <a href="#" className="text-white-50 me-3">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white-50 me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white-50">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
