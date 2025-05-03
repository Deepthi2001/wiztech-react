import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="page-container">
      {/* What We Offer Section */}
      <section className="services-content">
        <div className="container">
          <div className="services-intro">
            <h2>What We Offer</h2>
            <p>
              Our clients trust us for what we do. We use our skills and industry experience 
              to recruit, consult with and retain the best technology talent who will be the 
              right fit for our clients, instead of simply filling an open position.
            </p>
            <p>
              We help skilled technology professionals connect with direct hire and contract 
              positions in the areas of their expertise. Our clients utilize our services so 
              they can focus on their business goals. We take on the responsibility of sourcing, 
              screening, and hiring a most suitable candidate for our esteemed clients.
            </p>
            <p>
              We were established and firmly rooted beyond traditional staffing and consulting 
              services – we believe in relationships. We are invested in you. And that means 
              diving deep – understanding both your current and potential longer-term gaps 
              and needs – and bringing the very best technical talent and cultural fit for 
              those specific objectives.
            </p>
            <p>
              We strive to provide experience-driven staffing solutions and managed services 
              models that allow you to retain resources and knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="text-center mb-5">We provide professionals in the following areas:</h2>
          <div className="expertise-grid">
            {/* Project Management Card */}
            <div className="expertise-card">
              <div className="expertise-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <h3>Project Management</h3>
              <ul>
                <li>Project Managers</li>
                <li>SCRUM Masters</li>
                <li>Agile Practitioners</li>
                <li>Architects</li>
                <li>Business Analysts</li>
              </ul>
            </div>

            {/* Development Card */}
            <div className="expertise-card">
              <div className="expertise-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Development</h3>
              <ul>
                <li>Systems Analysts</li>
                <li>Application Developers</li>
                <li>Programmers</li>
                <li>Database Developers</li>
                <li>Web Developers</li>
                <li>Web Designers</li>
              </ul>
            </div>

            {/* QA & ERP Card */}
            <div className="expertise-card">
              <div className="expertise-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Quality & Enterprise</h3>
              <ul>
                <li>QA/Testing Specialists</li>
                <li>ERP Functional Resources</li>
                <li>ERP Technical Resources</li>
              </ul>
            </div>

            {/* Infrastructure Card */}
            <div className="expertise-card">
              <div className="expertise-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Infrastructure</h3>
              <ul>
                <li>Cloud Engineers</li>
                <li>Security Specialists</li>
                <li>Network Engineers</li>
                <li>Database Administrators (DBA)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
