import React from 'react';
import './WhatWeOffer.css';

const WhatWeOffer = () => {
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
      <section className="expertise-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">We provide professionals in the following areas:</h2>
          <div className="roles-grid">
            {/* Individual role cards */}
            <div className="role-card">Project Managers</div>
            <div className="role-card">SCRUM Masters/Agile Practitioners</div>
            <div className="role-card">Architects</div>
            <div className="role-card">Business Analysts</div>
            <div className="role-card">Systems Analysts</div>
            <div className="role-card">Application Developers/Programmers</div>
            <div className="role-card">Database Developers</div>
            <div className="role-card">Web Developers/Web Designers</div>
            <div className="role-card">QA/Testing Specialists</div>
            <div className="role-card">ERP (Functional and Technical Resources)</div>
            <div className="role-card">Cloud Engineers</div>
            <div className="role-card">Security Specialists</div>
            <div className="role-card">Network Engineers</div>
            <div className="role-card">Database Administrators (DBA)</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOffer;
