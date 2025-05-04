import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
                <Link to="/job-openings" className="btn btn-primary btn-lg me-3">
                  Find a Job
                </Link>
                <Link to="/about" className="btn btn-white-blue btn-lg">
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
                description: 'Find the right talent for your business needs with our specialized IT staffing services.',
                image: require('../images/itstaff.jpg'),
                link: '/about#it-staffing'
              },
              {
                title: 'Application Development and Support',
                description: 'Custom application development and ongoing support to meet your business objectives.',
                image: require('../images/application_dev.jpg'),
                link: '/about#app-development'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable and secure cloud solutions to modernize your IT infrastructure.',
                image: require('../images/cloud.jpg'),
                link: '/about#cloud-solutions'
              },
              {
                title: 'ERP/CRM Practice',
                description: 'Streamline your business processes with integrated ERP and CRM solutions.',
                image: require('../images/crm.jpg'),
                link: '/about#erp-crm'
              },
              {
                title: 'Cyber Security Solutions',
                description: 'Protect your business with comprehensive cybersecurity solutions and services.',
                image: require('../images/cyber.jpg'),
                link: '/about#cyber-security'
              },
              {
                title: 'HR Services for Small Business',
                description: 'Comprehensive HR solutions tailored for small businesses to manage talent effectively.',
                image: require('../images/HR.jpg'),
                link: '/about#hr-services'
              }
              
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6" data-aos="fade-up" key={index}>
                <div className="home-service-card">
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <HashLink smooth to={service.link} className="know-more-btn">
                      <span>Know More</span>
                      <i className="fas fa-arrow-right"></i>
                    </HashLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Your Dream Job Section */}
      <section id="dream-job" className="section-padding dream-job-section bg-light-indigo">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="section-title">Discover your dream job</h2>
              <p className="lead mb-4">
                WIZTECH helps skilled professionals like you to find Contract or full-time opportunities 
                throughout India. Our Talent team is committed to match your skills and career goals, 
                with the right opportunity. WIZTECH Staffing Services has the expertise in connecting 
                employers with the right talents they are looking for.
              </p>
              <div className="dream-job-buttons">
                <Link to="/job-openings" className="btn btn-primary btn-lg me-3">
                  Find Open Jobs
                </Link>
                <HashLink smooth to="/job-seekers#how-it-works" className="btn btn-outline-primary btn-lg">
                  How It Works
                </HashLink>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="dream-job-image">
                <img src={require('../images/career.jpeg')} alt="Find your dream job" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="section-padding bg-light-blue">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-up">
              <h2 className="section-title">Industries We Serve</h2>
            </div>
          </div>
          <div className="row mt-5 g-4">
            {/* Telecommunication */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="industry-card">
                <div className="industry-icon">
                  <span>📡</span>
                </div>
                <h3>Telecommunication</h3>
                <p>Digital solutions for telecom</p>
              </div>
            </div>
            
            {/* Banking and Finance */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="industry-card">
                <div className="industry-icon">
                  <span>💰</span>
                </div>
                <h3>Banking and Finance</h3>
                <p>Secure and innovative financial solutions</p>
              </div>
            </div>
            
            {/* Retail */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="industry-card">
                <div className="industry-icon">
                  <span>🛒</span>
                </div>
                <h3>Retail</h3>
                <p>Digital transformation for retail success</p>
              </div>
            </div>
            
            {/* Public Sector */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="industry-card">
                <div className="industry-icon">
                  <span>🏛️</span>
                </div>
                <h3>Public Sector</h3>
                <p>Empowering government services</p>
              </div>
            </div>
            
            {/* Healthcare and Insurance */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="industry-card">
                <div className="industry-icon">
                  <span>🏥</span>
                </div>
                <h3>Healthcare and Insurance</h3>
                <p>Technology solutions for healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="section-padding bg-light-indigo">
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
              <Link to="/what-we-offer" className="btn btn-primary btn-lg">
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
