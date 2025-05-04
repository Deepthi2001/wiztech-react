import React from 'react';
import { Link } from 'react-router-dom';

const JobSeekers = () => {
  return (
    <div className="page-container">
      {/* Job Seekers Header Section */}
      <section className="job-seekers-header section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="mb-4">Job Seekers</h1>
              <Link to="/job-openings" className="btn btn btn-white-blue btn-lg me-3">Find a Job
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="job-seekers-content section-padding">
          <div className="container">
            <div className="row">
                <p className="lead">
                  WIZTECH Info Solutions helps skilled professionals like you to find
                  Contract or full-time opportunities throughout India. Our
                  Talent team is committed to match your skills and career goals
                  with the right opportunity.
                </p>
                <p>
                  IT Consulting Staffing is one of the most important requirements
                  of any organization irrespective of which industrial vertical you
                  may belong. In many instances that we come across, Staffing
                  becomes a crippling factor for many businesses that are not able
                  to find the right talent for the positions they offer.
                </p>
                <p>
                  Your career is important to us, so we make sure we're there to
                  help guide you every step of the way. From our first face-to-face
                  meeting to interview preparation to that moment when you land your
                  job.
                </p>
                <p>
                  It starts with a conversation. Who you are, what you're looking
                  for, and where you want to take your career? We gather the
                  details, learn all we can about you, and use what we discover to
                  find an ideal match with one of our clients, ensuring you get the
                  position, culture, and career you want.
                </p>
              </div>
             </div>
           </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">Your journey to success with WIZTECH</p>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                icon: 'fas fa-comments',
                title: 'Initial Consultation',
                description: 'Talk to a recruiter about where you want your career to go.',
                delay: 100,
                step: 1
              },
              {
                icon: 'fas fa-video',
                title: 'Meet Your Team',
                description: "We'll set up our first face-to-face or Skype call to introduce you to the account team you'll be working with.",
                delay: 200,
                step: 2
              },
              {
                icon: 'fas fa-file-alt',
                title: 'Resume Customization',
                description: "We'll help customize your resume for the client we think will be the best fit.",
                delay: 300,
                step: 3
              },
              {
                icon: 'fas fa-edit',
                title: 'Resume Development',
                description: "Once we get feedback from them, we'll connect with you to provide helpful advice on how we can develop your resume.",
                delay: 400,
                step: 4
              },
              {
                icon: 'fas fa-chalkboard-teacher',
                title: 'Interview Coaching',
                description: "From there, we'll coach you through interview preparation, ensuring you feel confident presenting yourself and your skills.",
                delay: 500,
                step: 5
              },
              {
                icon: 'fas fa-user-friends',
                title: 'Pre-Interview Support',
                description: "Before you interview with our client, we'll meet you 30 minutes before for a trial run and to make sure you're ready. From there, we'll walk you in and introduce you to the hiring manager and interview team before letting you take the wheel.",
                delay: 600,
                step: 6
              },
              {
                icon: 'fas fa-chart-line',
                title: 'Interview Feedback',
                description: "We're all about helping you improve and succeed, so we'll go through feedback from your interview with you to highlight your strong points and areas that need improvement.",
                delay: 700,
                step: 7
              },
              {
                icon: 'fas fa-clipboard-check',
                title: 'Offer & Onboarding',
                description: "Once we receive an offer, we'll go through it together, hammer out the details, and get to work on-boarding you to your new team.",
                delay: 800,
                step: 8
              },
              {
                icon: 'fas fa-users',
                title: 'Ongoing Support',
                description: "We will be here throughout the duration of your project, checking in, delivering checks, and staying on top of how things are going. Because we don't just want to find you a job, we want to be a partner in building your career",
                delay: 900,
                step: 9
              }
            ].map((process, index) => (
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={process.delay}
                key={index}
              >
                <div className="process-card">
                  <div className="process-icon" data-step={process.step}>
                    <i className={process.icon}></i>
                  </div>
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Take Your Career to the Next Level Section */}
      <section id="career-next-level">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="career-text-content pe-lg-4">
                <h2 className="section-title">Take your career to the next level.</h2>
                <p className="section-subtitle mb-4">
                  Join WIZTECH and discover exciting opportunities that match your skills and aspirations. We're committed to helping you find the perfect role and supporting your professional growth throughout your career journey.
                </p>
                <Link to="/job-openings" className="btn btn-primary btn-lg px-4 py-2">
                  Find Open Jobs
                </Link>
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="career-image-container">
                <img 
                  src={require('../images/next_level.avif')}
                  alt="Career Growth" 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section-padding bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Benefits</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="section-subtitle text-center mb-5">
                We are passionate about our Employees. This means not only working
                with them to advance their technology careers but also providing
                them with a comprehensive array of benefits and career development
                opportunities.
              </p>
              <div className="benefits-grid">
                {[
                  {
                    icon: 'fas fa-heart',
                    title: 'Health Plans',
                    description: 'Employee-purchased health insurance options'
                  },
                  {
                    icon: 'fas fa-money-bill-wave',
                    title: 'Direct Pay',
                    description: 'Convenient direct deposit payment system'
                  },
                  {
                    icon: 'fas fa-gift',
                    title: 'Referral Bonus',
                    description: 'Rewards for referring talented professionals'
                  },
                  {
                    icon: 'fas fa-award',
                    title: 'Recognition Bonus',
                    description: 'Special bonus plans with our business customers'
                  },
                  {
                    icon: 'fas fa-dollar-sign',
                    title: 'Competitive Wages',
                    description: 'Industry-leading compensation packages'
                  },
                  {
                    icon: 'fas fa-balance-scale',
                    title: 'Equal Opportunity',
                    description: 'Equal opportunity employer committed to diversity'
                  }
                ].map((benefit, index) => (
                  <div className="benefit-card" key={index}>
                    <i className={benefit.icon}></i>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobSeekers;
