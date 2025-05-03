import React from 'react';
import { Link } from 'react-router-dom';
import './WhatWeOffer.css';

const WhatWeOffer = () => {
  return (
    <div className="page-container">
      {/* What We Offer Header Section */}
      <section className="about-header section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="mb-4">What We Offer</h1>
              <p className="lead">Comprehensive IT solutions tailored to your business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="offer-main-content section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="lead mb-4">
                Our clients trust us for what we do. We use our skills and industry experience 
                to recruit, consult with and retain the best technology talent who will be the 
                right fit for our clients, instead of simply filling an open position.
              </p>
              <p className="mb-4">
                We help skilled technology professionals connect with direct hire and contract 
                positions in the areas of their expertise. Our clients utilize our services so 
                they can focus on their business goals. We take on the responsibility of sourcing, 
                screening, and hiring a most suitable candidate for our esteemed clients.
              </p>
              <hr className="my-5" />
              <p className="mb-4">
                We were established and firmly rooted beyond traditional staffing and consulting 
                services – we believe in relationships. We are invested in you. And that means 
                diving deep – understanding both your current and potential longer-term gaps 
                and needs – and bringing the very best technical talent and cultural fit for 
                those specific objectives.
              </p>
              <p className="mb-4">
                We strive to provide experience-driven staffing solutions and managed services 
                models that allow you to retain resources and knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Expertise Section */}
      <section className="expertise-section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Professional Expertise</h2>
          <p className="section-subtitle text-center mb-5">We provide skilled professionals in the following areas:</p>
          <div className="roles-grid">
            {/* Individual role cards with icons */}
            <div className="role-card"><i className="fas fa-tasks"></i><span>Project Managers</span></div>
            <div className="role-card"><i className="fas fa-sitemap"></i><span>SCRUM Masters/Agile Practitioners</span></div>
            <div className="role-card"><i className="fas fa-drafting-compass"></i><span>Architects</span></div>
            <div className="role-card"><i className="fas fa-chart-bar"></i><span>Business Analysts</span></div>
            <div className="role-card"><i className="fas fa-project-diagram"></i><span>Systems Analysts</span></div>
            <div className="role-card"><i className="fas fa-laptop-code"></i><span>Application Developers</span></div>
            <div className="role-card"><i className="fas fa-database"></i><span>Database Developers</span></div>
            <div className="role-card"><i className="fas fa-code"></i><span>Web Developers/Designers</span></div>
            <div className="role-card"><i className="fas fa-bug"></i><span>QA/Testing Specialists</span></div>
            <div className="role-card"><i className="fas fa-cogs"></i><span>ERP Resources</span></div>
            <div className="role-card"><i className="fas fa-cloud"></i><span>Cloud Engineers</span></div>
            <div className="role-card"><i className="fas fa-shield-alt"></i><span>Security Specialists</span></div>
            <div className="role-card"><i className="fas fa-network-wired"></i><span>Network Engineers</span></div>
            <div className="role-card"><i className="fas fa-server"></i><span>Database Administrators</span></div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2>Ready to find the right talent?</h2>
              <p className="lead mb-4">Contact us today to discuss how we can help you achieve your business goals.</p>
              <Link to="/contact" className="btn btn-primary btn-lg px-5">
                <i className="fas fa-envelope me-2"></i>Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOffer;
