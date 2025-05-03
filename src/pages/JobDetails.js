import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './JobDetails.css';

const JobDetails = () => {
  const { slug } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    agreeToTerms: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sample job data - in a real app, this would come from an API
  const jobsData = [
    {
      id: 1,
      title: 'ERP Techno Functional Consultant',
      category: 'Consultant',
      type: 'Full Time',
      location: 'Bangalore, Karnataka',
      tags: ['ERP', 'SAP', 'Oracle', 'Functional'],
      description: 'We are looking for an experienced ERP Techno Functional Consultant to join our team. The ideal candidate will have strong knowledge of ERP systems and business processes.',
      date: '2025-04-15',
      responsibilities: [
        'Analyze business requirements and translate them into ERP solutions',
        'Configure and customize ERP modules to meet client needs',
        'Provide technical guidance and support to implementation teams',
        'Create functional specifications for custom development',
        'Conduct user training and create documentation'
      ],
      requirements: [
        '5+ years of experience with major ERP systems (SAP, Oracle, etc.)',
        'Strong understanding of business processes across multiple domains',
        'Experience in full lifecycle ERP implementations',
        'Excellent communication and client-facing skills',
        "Bachelor's degree in Computer Science, Information Systems, or related field"
      ],
      benefits: [
        'Competitive salary and bonus structure',
        'Comprehensive health, dental, and vision insurance',
        '401(k) with company match',
        'Professional development opportunities',
        'Flexible work arrangements'
      ]
    },
    {
      id: 2,
      title: 'MSBI Developer',
      category: 'Developer',
      type: 'Full Time',
      location: 'Hyderabad, Telangana',
      tags: ['MSBI', 'SQL', 'SSIS', 'SSRS', 'Power BI'],
      description: 'Join our team as an MSBI Developer to design and implement business intelligence solutions using Microsoft BI stack.',
      date: '2025-04-18',
      responsibilities: [
        'Design and develop ETL processes using SSIS',
        'Create reports and dashboards using SSRS and Power BI',
        'Optimize SQL queries and stored procedures',
        'Implement and maintain data warehouses',
        'Collaborate with business analysts to understand reporting requirements'
      ],
      requirements: [
        '3+ years of experience with Microsoft BI stack',
        'Strong SQL Server and T-SQL knowledge',
        'Experience with SSIS, SSRS, and Power BI',
        'Understanding of data warehouse concepts',
        "Bachelor's degree in Computer Science or related field"
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Paid time off',
        'Remote work options',
        'Professional development budget'
      ]
    },
    {
      id: 3,
      title: 'ETL Developer',
      category: 'Developer',
      type: 'Full Time',
      location: 'Pune, Maharashtra',
      tags: ['ETL', 'Data Warehousing', 'SQL', 'Python'],
      description: 'We are seeking an ETL Developer to design, build, and maintain data pipelines for our growing analytics platform.',
      date: '2025-04-20',
      responsibilities: [
        'Design and implement ETL processes',
        'Create and maintain data pipelines',
        'Optimize data extraction and loading procedures',
        'Ensure data quality and integrity',
        'Collaborate with data scientists and analysts'
      ],
      requirements: [
        '3+ years of ETL development experience',
        'Strong SQL skills',
        'Experience with Python or similar programming languages',
        'Knowledge of data warehousing concepts',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: [
        'Competitive compensation package',
        'Health and wellness benefits',
        'Flexible work schedule',
        'Professional growth opportunities',
        'Collaborative work environment'
      ]
    },
    {
      id: 4,
      title: 'Business Analyst',
      category: 'Analyst',
      type: 'Full Time',
      location: 'Mumbai, Maharashtra',
      tags: ['Business Analysis', 'Requirements', 'Agile'],
      description: 'Looking for a Business Analyst to bridge the gap between stakeholders and the development team.',
      date: '2025-04-22',
      responsibilities: [
        'Gather and document business requirements',
        'Create user stories and acceptance criteria',
        'Facilitate workshops and meetings with stakeholders',
        'Support testing and quality assurance processes',
        'Create process flows and documentation'
      ],
      requirements: [
        '3+ years of business analysis experience',
        'Strong communication and facilitation skills',
        'Experience with Agile methodologies',
        'Knowledge of requirements gathering techniques',
        "Bachelor's degree in Business, IT, or related field"
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive benefits package',
        'Professional development opportunities',
        'Work-life balance',
        'Collaborative team environment'
      ]
    },
    {
      id: 5,
      title: 'Scrum Master',
      category: 'Leader',
      type: 'Full Time',
      location: 'Gurgaon, Haryana',
      tags: ['Agile', 'Scrum', 'Project Management'],
      description: 'We need an experienced Scrum Master to facilitate our agile development process and help teams deliver high-quality products.',
      date: '2025-04-25',
      responsibilities: [
        'Facilitate Scrum ceremonies and events',
        'Remove impediments for the development team',
        'Coach teams on Agile practices',
        'Track and report on team progress',
        'Promote continuous improvement'
      ],
      requirements: [
        'Certified Scrum Master (CSM) or equivalent',
        '3+ years of experience as a Scrum Master',
        'Strong facilitation and conflict resolution skills',
        'Experience with Agile tools and methodologies',
        'Excellent communication skills'
      ],
      benefits: [
        'Competitive salary',
        'Health and retirement benefits',
        'Flexible work arrangements',
        'Professional development budget',
        'Collaborative work environment'
      ]
    },
    {
      id: 6,
      title: 'System Administrator',
      category: 'Administrator',
      type: 'Full Time',
      location: 'Chennai, Tamil Nadu',
      tags: ['Windows', 'Linux', 'Cloud', 'Network'],
      description: 'Join our IT team as a System Administrator to maintain and optimize our infrastructure.',
      date: '2025-04-28',
      responsibilities: [
        'Manage and maintain server infrastructure',
        'Configure and troubleshoot network systems',
        'Implement security measures and best practices',
        'Perform regular system backups and recovery',
        'Monitor system performance and capacity'
      ],
      requirements: [
        '3+ years of system administration experience',
        'Knowledge of Windows and Linux operating systems',
        'Experience with cloud platforms (AWS, Azure)',
        'Understanding of networking concepts',
        'IT certifications (MCSA, RHCE, etc.) preferred'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive benefits package',
        'Flexible work schedule',
        'Professional development opportunities',
        'Collaborative work environment'
      ]
    },
    {
      id: 7,
      title: 'Front-end Developer',
      category: 'Developer',
      type: 'Contract',
      location: 'Noida, Uttar Pradesh',
      tags: ['React', 'JavaScript', 'CSS', 'HTML5'],
      description: 'We are looking for a skilled Front-end Developer to create responsive and interactive web applications.',
      date: '2025-05-01',
      responsibilities: [
        'Develop responsive user interfaces using React',
        'Implement UI/UX designs with clean, efficient code',
        'Optimize applications for maximum performance',
        'Collaborate with back-end developers and designers',
        'Test and debug code to ensure cross-browser compatibility'
      ],
      requirements: [
        '3+ years of front-end development experience',
        'Proficiency in React, JavaScript, HTML5, and CSS3',
        'Experience with responsive design and cross-browser compatibility',
        'Knowledge of modern front-end build pipelines and tools',
        'Understanding of UI/UX design principles'
      ],
      benefits: [
        'Competitive hourly rate',
        'Flexible work schedule',
        'Remote work opportunity',
        'Possibility for contract extension or conversion',
        'Collaborative team environment'
      ]
    },
    {
      id: 8,
      title: 'DevOps Engineer',
      category: 'Engineer',
      type: 'Full Time',
      location: 'Bangalore, Karnataka',
      tags: ['CI/CD', 'Docker', 'Kubernetes', 'AWS'],
      description: 'Join our DevOps team to build and maintain our cloud infrastructure and deployment pipelines.',
      date: '2025-05-02',
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Manage container orchestration with Kubernetes',
        'Automate infrastructure provisioning and configuration',
        'Monitor system performance and reliability',
        'Implement security best practices'
      ],
      requirements: [
        '3+ years of DevOps experience',
        'Proficiency with Docker and Kubernetes',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of infrastructure as code tools (Terraform, CloudFormation)',
        'Understanding of CI/CD concepts and tools'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive benefits package',
        'Flexible work arrangements',
        'Professional development opportunities',
        'Collaborative work environment'
      ]
    },
    {
      id: 9,
      title: 'Data Scientist',
      category: 'Analyst',
      type: 'Full Time',
      location: 'Remote',
      tags: ['Machine Learning', 'Python', 'Statistics', 'Data Analysis'],
      description: 'We are seeking a Data Scientist to help us extract insights from our data and build predictive models.',
      date: '2025-05-03',
      responsibilities: [
        'Develop machine learning models to solve business problems',
        'Analyze large datasets to identify patterns and trends',
        'Create data visualizations and reports',
        'Collaborate with engineering teams to implement models',
        'Stay current with latest research and techniques'
      ],
      requirements: [
        "Master's or PhD in Computer Science, Statistics, or related field",
        '3+ years of experience in data science or machine learning',
        'Proficiency in Python and data science libraries',
        'Strong statistical knowledge',
        'Experience with big data technologies'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive benefits package',
        'Remote work opportunity',
        'Professional development budget',
        'Flexible work schedule'
      ]
    }
  ];

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s()-]/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.resume) {
      errors.resume = 'Please upload your resume';
    } else {
      const fileType = formData.resume.name.split('.').pop().toLowerCase();
      if (!['pdf', 'doc', 'docx'].includes(fileType)) {
        errors.resume = 'Please upload a PDF, DOC, or DOCX file';
      }
    }
    
    if (!formData.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the terms';
    }
    
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    setFormErrors(errors);
    
    // If no errors, submit form
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // In a real app, you would send the form data to a server here
        console.log('Form submitted:', formData);
      }, 2000);
    }
  };

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      // Decode the URL parameter and find job by title
      const decodedTitle = decodeURIComponent(slug);
      const foundJob = jobsData.find(j => j.title === decodedTitle);
      setJob(foundJob);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading-container">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="page-container">
        <div className="job-not-found">
          <i className="fas fa-exclamation-circle fa-3x mb-3"></i>
          <h2>Job Not Found</h2>
          <p>The job you're looking for doesn't exist or has been removed.</p>
          <Link to="/job-openings" className="btn btn-primary mt-3">
            Back to Job Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Job Header */}
      <section className="job-details-header">
          <div className="row">
              <div className="job-header-content">
                <Link to="/job-openings" className="back-link">
                  <i className="fas fa-arrow-left"></i> Back to Job Listings
                </Link>
                <h1 className="job-title-details">{job.title}</h1>
                <div className="job-meta-details">
                  <span className="job-category">{job.category}</span>
                  <span className="job-type">{job.type}</span>
                  <span className="job-location-details">
                    <i className="fas fa-map-marker-alt"></i> {job.location}
                  </span>
                </div>
            </div>
          </div>
      </section>

      {/* Job Content */}
      <section className="job-details-content">
        <div className="container">
          <div className="row">
              <div className="job-details-card">
                <div className="job-details-container">
                  <div className="job-details-left">
                    <div className="job-section">
                      <h2 className="section-title">Job Description</h2>
                      <p>{job.description}</p>
                    </div>
                    
                    <div className="job-section">
                      <h2 className="section-title">Responsibilities</h2>
                      <ul className="job-list">
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="job-section">
                      <h2 className="section-title">Requirements</h2>
                      <ul className="job-list">
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="job-section">
                      <h2 className="section-title">Benefits</h2>
                      <ul className="job-list">
                        {job.benefits.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="job-details-right">
                    <div className="job-section apply-section">
                      <h2 className="section-title">Apply for this position</h2>
                      <p>Ready to take the next step in your career? We'd love to hear from you!</p>
                      
                      {!submitSuccess && (
                        <div className="application-form">
                          <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                              <label htmlFor="fullName" className="form-label">Full Name *</label>
                              <input 
                                type="text" 
                                className={`form-control ${formErrors.fullName ? 'is-invalid' : ''}`}
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                              />
                              {formErrors.fullName && <div className="invalid-feedback">{formErrors.fullName}</div>}
                            </div>
                            
                            <div className="form-group mb-3">
                              <label htmlFor="email" className="form-label">Email *</label>
                              <input 
                                type="email" 
                                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                              />
                              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                            </div>
                            
                            <div className="form-group mb-3">
                              <label htmlFor="phone" className="form-label">Phone *</label>
                              <input 
                                type="tel" 
                                className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                              />
                              {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                            </div>
                            
                            <div className="form-group mb-3">
                              <label htmlFor="resume" className="form-label">Upload CV/Resume *</label>
                              <input 
                                type="file" 
                                className={`form-control ${formErrors.resume ? 'is-invalid' : ''}`}
                                id="resume"
                                name="resume"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                disabled={isSubmitting}
                              />
                              <div className="form-text">Allowed Type(s): .pdf, .doc, .docx</div>
                              {formErrors.resume && <div className="invalid-feedback">{formErrors.resume}</div>}
                            </div>
                            
                            <div className="form-check mb-4">
                              <input 
                                type="checkbox" 
                                className={`form-check-input ${formErrors.agreeToTerms ? 'is-invalid' : ''}`}
                                id="agreeToTerms"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleCheckboxChange}
                                disabled={isSubmitting}
                              />
                              <label className="form-check-label" htmlFor="agreeToTerms">
                                By using this form you agree with the storage and handling of your data by this website. *
                              </label>
                              {formErrors.agreeToTerms && <div className="invalid-feedback">{formErrors.agreeToTerms}</div>}
                            </div>
                            
                            <div className="form-buttons">
                              <button 
                                type="submit" 
                                className="btn btn-white-blue btn-lg w-100"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Submitting...
                                  </>
                                ) : 'Submit Application'}
                              </button>
                            </div>
                          </form>
                        </div>
                      )}
                      
                      {submitSuccess && (
                        <div className="application-success">
                          <div className="alert alert-success" role="alert">
                            <i className="fas fa-check-circle me-2"></i>
                            <strong>Success!</strong> Your application has been submitted.
                          </div>
                          <Link 
                            to="/job-openings"
                            className="btn btn-outline-primary mt-3"
                          >
                            Apply for Another Position
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      
    </div>
  );
};

export default JobDetails;
