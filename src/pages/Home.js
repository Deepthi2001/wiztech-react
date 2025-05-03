import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCard } from './ServiceCard';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h1 className="hero-title">
                We help business teams be more productive, creative & successful
              </h1>
              <p className="hero-subtitle">
                with right talent in India and across the Globe
              </p>
              <div className="hero-buttons mt-5">
                <Link to="/job-seekers" className="btn btn-primary btn-lg me-3">
                  Find Job
                </Link>
                <Link to="/about" className="btn btn-outline-primary btn-lg">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="section-padding bg-light-blue">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-up">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
          </div>
          <div className="row mt-5 g-4">
            {[
              {
                title: 'IT Staffing Services',
                link: '/about#it-staffing'
              },
              {
                title: 'Application Development and Support',
                link: '/about#app-development'
              },
              {
                title: 'Cloud Solutions',
                link: '/about#cloud-solutions'
              },
              {
                title: 'ERP/CRM Practice',
                link: '/about#erp-crm'
              },
              {
                title: 'Cyber Security Solutions',
                link: '/about#cyber-security'
              },
              {
                title: 'HR Services for Small Business',
                link: '/about#hr-services'
              }
              
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6" data-aos="fade-up" key={index}>
                <div className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="btn btn-outline-primary">
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="section-padding bg-light-indigo">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-up">
              <h2 className="section-title">Industries We Serve</h2>
            </div>
          </div>
          <div className="row mt-5 g-4">
            {[
              {
                title: 'Telecommunication',
                description: 'Digital solutions for telecom'
              },
              {
                title: 'Banking and Finance',
                description: 'Secure and innovative financial solutions'
              },
              {
                title: 'Retail',
                description: 'Digital transformation for retail success'
              },
              {
                title: 'Public Sector',
                description: 'Empowering government services'
              },
              {
                title: 'Healthcare and Insurance',
                description: 'Technology solutions for healthcare'
              }
            ].map((industry, index) => (
              <div className="col-lg-4 col-md-6" data-aos="fade-up" key={index}>
                <div className="industry-card">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-up">
              <h2 className="section-title">What We Offer</h2>
              <p className="lead mb-4">
                Our clients trust us for what we do. We use our skills and industry
                experience to recruit, consult with and retain the best technology
                talent who will be the right fit for our clients, instead of simply
                filling an open position.
              </p>
              <p className="lead mb-4">
                WIZTECH helps skilled technology professionals connect with direct
                hire and contract positions in the areas of their expertise. Our
                clients utilize our services so they can focus on their business
                goals. We take on the responsibility of sourcing, screening, and
                hiring a most suitable candidate for our esteemed clients.
              </p>
              <Link to="/about" className="btn btn-primary btn-lg">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section-tall">
        <div className="contact-overlay"></div>
        <div className="container position-relative h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 offset-lg-6" data-aos="fade-left">
              <div className="contact-content-box">
                <h2 className="section-title text-white">Find the right opportunity for you</h2>
                <p className="section-subtitle mb-4 text-white">
                  Have questions about our services or looking for career
                  opportunities? We'd love to hear from you!
                </p>
                <Link to="/contact" className="btn btn-light btn-lg px-5">
                  <i className="fas fa-envelope me-2"></i>Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
