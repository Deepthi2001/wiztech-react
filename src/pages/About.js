import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      {/* About Header Section */}
      <section className="about-header section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="mb-4">About Us</h1>
              <p className="lead">Our vision is to be a valued partner to our clients and an asset to our communities</p>
              <p className="lead mt-3">"We are a team of enthusiastic professionals, who ARE A BRIDGE BETWEEN TALENT AND OUR CLIENTS"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="company-overview section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="about-image-container">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="WIZTECH Team" className="img-fluid rounded shadow-lg" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content">
                <h2 className="mb-4">Who We Are</h2>
                <p>
                “We are a team of enthusiastic professionals, who ARE A BRIDGE BETWEEN TALENT AND OUR CLIENTS”
                </p>
                <p>
The very meaning of our name is “GROWTH”. We partner with you to bring you growth. We constantly work on finding quality talent for your business need. Through our focused approach and commitment to select best, we take care of our customers’ evolving needs.
                </p>
                <p>
                WIZTECH Info Solutions has developed a strategic plan that aggressively pursues advances in QA, Mobility, ERP, Big Data & Cloud to pioneer excellent services to our clients. We are creating an robust organization to provide solutions to all IT Consulting, Development, Implementation, Outsourcing, and support needs.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section with IDs for direct linking */}
      <section className="services-section section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Comprehensive IT solutions tailored to your business needs
              </p>
              <div className="service-icons-container mt-4">
                <div className="service-icon-wrapper">
                  <a href="#it-staffing" className="service-nav-icon">
                    <i className="fas fa-users"></i>
                    <span>IT Staffing</span>
                  </a>
                </div>
                <div className="service-icon-wrapper">
                  <a href="#app-development" className="service-nav-icon">
                    <i className="fas fa-laptop-code"></i>
                    <span>App Development</span>
                  </a>
                </div>
                <div className="service-icon-wrapper">
                  <a href="#cloud-solutions" className="service-nav-icon">
                    <i className="fas fa-cloud"></i>
                    <span>Cloud Solutions</span>
                  </a>
                </div>
                <div className="service-icon-wrapper">
                  <a href="#erp-crm" className="service-nav-icon">
                    <i className="fas fa-cogs"></i>
                    <span>ERP/CRM</span>
                  </a>
                </div>
                <div className="service-icon-wrapper">
                  <a href="#cyber-security" className="service-nav-icon">
                    <i className="fas fa-shield-alt"></i>
                    <span>Security</span>
                  </a>
                </div>
                <div className="service-icon-wrapper">
                  <a href="#hr-services" className="service-nav-icon">
                    <i className="fas fa-user-tie"></i>
                    <span>HR Services</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* IT Staffing Services */}
          <div id="it-staffing" className="service-item mb-5" data-aos="fade-up">
            <div className="service-header mb-4">
              <div className="service-header-flex">
                <div className="service-header-img">
                  <img src={require('../images/it_staff_service.jpeg')} alt="IT Staffing Services" />
                </div>
                <h3>IT Staffing Services</h3>
              </div>
            </div>
            <div className="row">
                <div className="service-content">
                  <p>
                    With years of successful recruitment and talent sourcing experience, our recruiters combine in-depth domain knowledge 
                    and recruitment process excellence to provide exceptional matching talent. Our recruiting staff abide to industry 
                    standards and best practices throughout the recruitment life cycle.
                  </p>
                  <p>
                    We believe in relationships, not transactions. We value teamwork, realizing that we are stronger together than as individuals. 
                    We take seriously the promises we make. We are passionate, dedicated and driven to excel.
                  </p>
                  <p>
                  We offer the opportunity to work with the best companies in the world, and to make a difference in the communities in which we live and work.
                  </p>
                  <h5>We provide:</h5>
                  <ul>
                    <li>On-site And Offshore Contract Staffing</li>
                    <li>Contingent Workforce</li>
                    <li>Contract-to-hire</li>
                    <li>Direct Hire</li>
                  </ul>
              </div>
            </div>
          </div>

          {/* Application Development */}
          <div id="app-development" className="service-item mb-5" data-aos="fade-up">
            <div className="service-header mb-4">
              <div className="service-header-flex">
                <div className="service-header-img">
                  <img src={require('../images/app_dev.jpeg')} alt="Application Development" />
                </div>
                <h3>Application Development and Support</h3>
              </div>
            </div>
            <div className="row">
                <div className="service-content">
                  <p>
                    When creating a dynamic and competitive business environment, it is essential to have responsive business 
                    applications that simplify business processes and workflows. Yet, often businesses have to look for solutions 
                    beyond proprietary software products to address their unique requirements.
                  </p>
                  <p>
                    At WIZTECH we understand the need to find bespoke solutions. We specialize in custom application development to 
                    address specific and unique challenges. To support this, we stay up to date with technology offerings and market activities. 
                    As we move into development, we look to retain any advantages in your legacy applications and augment them with modern 
                    bespoke solutions.
                  </p>
                  <p>
                    Our process and quality assurance framework ensures accelerated solution delivery. We offer flexible engagement models 
                    in order to meet your information technology objectives efficiently.
                  </p>
              </div>
            </div>
          </div>

          {/* Cloud Solutions */}
          <div id="cloud-solutions" className="service-item mb-5" data-aos="fade-up">
            <div className="service-header mb-4">
              <div className="service-header-flex">
                <div className="service-header-img">
                  <img src={require('../images/cloud.png')} alt="Cloud Solutions" />
                </div>
                <h3>Cloud Solutions</h3>
              </div>
            </div>
            <div className="row">
                <div className="service-content">
                  <p>
                  We have experience with all the major cloud solution providers like AWS, Azure, Google, Oracle. We source the right latent for the perfect Cloud implementation, migration and cloud management.
                  </p>
                  
              </div>
            </div>
          </div>

          {/* ERP/CRM Practice */}
          <div id="erp-crm" className="service-item mb-5" data-aos="fade-up">
            <div className="service-header mb-4">
              <div className="service-header-flex">
                <div className="service-header-img">
                  <img src={require('../images/ERP-CRM.png')} alt="ERP/CRM Practice" />
                </div>
                <h3>ERP/CRM Practice</h3>
              </div>
            </div>
            <div className="row">
              
                <div className="service-content">
                  <h5>Salesforce</h5>
                  <p>
                    We help you understand and evaluate your options and clearly define a roadmap for your business to achieve 
                    your strategic goals. Whether you need to boost your sales and marketing or enhance your employee engagement 
                    to improve customer service, we have solutions for you.
                  </p>
                  <p>
                  Our tenured team of Salesforce consultants have helped deliver solutions for businesses in healthcare, life sciences, medical devices, technology, manufacturing, insurance and more.
                  </p>
                  <h5>Oracle</h5>
                  <p>
                    WIZTECH provides SMEs, Functional/Techno-functional Consultants, Data Architects, ETL Developers, 
                    Business Analysts, BI Developers and Quality Analysts to build, support and maintain your end-to-end 
                    ERP business solutions. We staff and support Oracle, SAP, Workday and Microsoft ERP Solutions.
                  </p>
                  <p>
                    In addition, WIZTECH also offers custom web-based application development in Java, .NET, and Angular 
                    technologies. We also offer a wide range of application testing, support, and migration services.
                  </p>
              </div>
            </div>
          </div>

          {/* Cyber Security */}
          <div id="cyber-security" className="service-item mb-5" data-aos="fade-up">
            <div className="service-header mb-4">
              <div className="service-header-flex">
                <div className="service-header-img">
                  <img src={require('../images/cyber.png')} alt="Cyber Security Solutions" />
                </div>
                <h3>Cyber Security Solutions</h3>
              </div>
            </div>
            <div className="row">
                <div className="service-content">
                  <p>
                    With our Cyber Security Consulting, we offer a no-compromise solution that eliminates new hire commitments 
                    while delivering the executive-level counsel needed to succeed. Gain a level of service previously only 
                    afforded by larger enterprises.
                  </p>
                  <p>
                    We'll work alongside management to best align security policies and practices with business objectives to 
                    advance your operational goals. Tap into a vast knowledge base while implementing cyber security strategies 
                    that work perfectly with your business model and budget.
                  </p>
                  <h5>Why hire an information security consultant?</h5>
                  <ul>
                    <li>Our advisory services are designed to meet security project goals in shorter time periods.</li>
                    <li>We provide product specific experts to configure systems that reduce cyber threats.</li>
                    <li>We alleviate staff to focus on other goals while we focus our attention on risk management.</li>
                    <li>We can provide on-demand, hourly, or by project security consulting throughout the year.</li>
                  </ul>
              </div>
            </div>
          </div>

          {/* HR Services */}
          <div id="hr-services" className="service-item" data-aos="fade-up">
            <div className="service-header mb-4">
              <div className="service-header-flex">
                <div className="service-header-img">
                  <img src={require('../images/HR.png')} alt="HR Services" />
                </div>
                <h3>HR Services for Small Business</h3>
              </div>
            </div>
            <div className="row">
                <div className="service-content">
                  <ul>
                    <li>Managing your employee benefits</li>
                    <li>HR Administration and Payroll</li>
                    <li>Risk Management</li>
                    <li>HR related Compliance and Support</li>
                    <li>Recruiting Services</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section-padding bg-gradient-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2>Ready to work with us?</h2>
              <p className="lead mb-4">
                Contact us today to discuss how we can help you achieve your business goals.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg px-5">
                <i className="fas fa-envelope me-2"></i>Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
