import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="page-container">
      {/* Contact Header Section */}
      <section className="contact-header section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="mb-4">Get in Touch</h1>
              <p className="lead">Ready to discuss your staffing needs? We're here to help!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2>Contact Information</h2>
              <p className="lead">Get in touch with us through any of these channels</p>
            </div>
          </div>
          <div className="row">
            {[
              {
                icon: 'fas fa-map-marker-alt',
                title: 'Corporate Office',
                content: [
                  'WIZTECH Info Solutions Private Limited',
                  '#14-226, Plot No. 58, West Raghava Nagar,',
                  'Meerpet, Saroor Nagar, Rangareddi,',
                  'Telangana, India, 500097'
                ]
              },
              {
                icon: 'fas fa-phone',
                title: 'Phone',
                content: [
                  '+91 XXXXXXXXXX',
                  'Mon - Fri, 9:00 AM - 6:00 PM IST'
                ]
              },
              {
                icon: 'fas fa-envelope',
                title: 'Email',
                content: [
                  'info@wiztechinfo.com',
                  'support@wiztechinfo.com'
                ]
              }
            ].map((info, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <i className={info.icon}></i>
                  </div>
                  <h3>{info.title}</h3>
                  {info.content.map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form-card">
                <h2 className="text-center mb-4">
                  Are you a business that's ready to discuss your staffing needs
                  with us?
                </h2>
                <p className="text-center mb-5">
                  Please complete the form below and we will get back to you
                  quickly.
                </p>
                <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="name">Full Name*</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="email">Email Address*</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="subject">Subject*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="message">Message*</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="map-container" data-aos="fade-up">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8176744250655!2d78.5461!3d17.3435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIwJzM3LjQiTiA3OMKwMzInNDYuMCJF!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: 'var(--border-radius)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
