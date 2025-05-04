import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './JobOpenings.css';

const JobOpenings = () => {
  // Sample job data - in a real app, this would come from an API
  const initialJobs = [
    {
      id: 1,
      title: 'ERP Techno Functional Consultant',
      slug: 'erp-techno-functional-consultant',
      category: 'Consultant',
      type: 'Full Time',
      location: 'Bangalore, Karnataka',
      tags: ['ERP', 'SAP', 'Oracle', 'Functional'],
      description: 'We are looking for an experienced ERP Techno Functional Consultant to join our team.',
      date: '2025-04-15'
    },
    {
      id: 2,
      title: 'MSBI Developer',
      slug: 'msbi-developer',
      category: 'Developer',
      type: 'Full Time',
      location: 'Hyderabad, Telangana',
      tags: ['MSBI', 'SQL', 'SSIS', 'SSRS', 'Power BI'],
      description: 'Join our team as an MSBI Developer to design and implement business intelligence solutions using Microsoft BI stack.',
      date: '2025-04-18'
    },
    {
      id: 3,
      title: 'ETL Developer',
      slug: 'etl-developer',
      category: 'Developer',
      type: 'Full Time',
      location: 'Pune, Maharashtra',
      tags: ['ETL', 'Data Warehousing', 'SQL', 'Python'],
      description: 'We are seeking an ETL Developer to design, build, and maintain data pipelines for our growing analytics platform.',
      date: '2025-04-20'
    },
    {
      id: 4,
      title: 'Business Analyst',
      slug: 'business-analyst',
      category: 'Analyst',
      type: 'Full Time',
      location: 'Mumbai, Maharashtra',
      tags: ['Business Analysis', 'Requirements', 'Agile'],
      description: 'Looking for a Business Analyst to bridge the gap between stakeholders and the development team.',
      date: '2025-04-22'
    },
    {
      id: 5,
      title: 'Scrum Master',
      slug: 'scrum-master',
      category: 'Leader',
      type: 'Full Time',
      location: 'Gurgaon, Haryana',
      tags: ['Agile', 'Scrum', 'Project Management'],
      description: 'We need an experienced Scrum Master to facilitate our agile development process and help teams deliver high-quality products.',
      date: '2025-04-25'
    },
    {
      id: 6,
      title: 'System Administrator',
      slug: 'system-administrator',
      category: 'Administrator',
      type: 'Full Time',
      location: 'Chennai, Tamil Nadu',
      tags: ['Windows', 'Linux', 'Cloud', 'Network'],
      description: 'Join our IT team as a System Administrator to maintain and optimize our infrastructure.',
      date: '2025-04-28'
    },
    {
      id: 7,
      title: 'Front-end Developer',
      slug: 'front-end-developer',
      category: 'Developer',
      type: 'Contract',
      location: 'Noida, Uttar Pradesh',
      tags: ['React', 'JavaScript', 'CSS', 'HTML5'],
      description: 'We are looking for a skilled Front-end Developer to create responsive and interactive web applications.',
      date: '2025-05-01'
    },
    {
      id: 8,
      title: 'DevOps Engineer',
      slug: 'devops-engineer',
      category: 'Engineer',
      type: 'Full Time',
      location: 'Bangalore, Karnataka',
      tags: ['CI/CD', 'Docker', 'Kubernetes', 'AWS'],
      description: 'Join our DevOps team to build and maintain our cloud infrastructure and deployment pipelines.',
      date: '2025-05-02'
    },
    {
      id: 9,
      title: 'Data Scientist',
      slug: 'data-scientist',
      category: 'Analyst',
      type: 'Full Time',
      location: 'Remote',
      tags: ['Machine Learning', 'Python', 'Statistics', 'Data Analysis'],
      description: 'We are seeking a Data Scientist to help us extract insights from our data and build predictive models.',
      date: '2025-05-03'
    }
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    type: '',
    location: ''
  });

  // Get unique values for filter dropdowns
  const categories = [...new Set(jobs.map(job => job.category))];
  const types = [...new Set(jobs.map(job => job.type))];
  const locations = [...new Set(jobs.map(job => job.location))];

  // Filter jobs based on search term and filters
  useEffect(() => {
    let results = jobs;
    
    // Apply search term filter
    if (searchTerm) {
      results = results.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply dropdown filters
    if (filters.category) {
      results = results.filter(job => job.category === filters.category);
    }
    
    if (filters.type) {
      results = results.filter(job => job.type === filters.type);
    }
    
    if (filters.location) {
      results = results.filter(job => job.location === filters.location);
    }
    
    setFilteredJobs(results);
  }, [searchTerm, filters, jobs]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setFilters({
      category: '',
      type: '',
      location: ''
    });
  };

  // Load more jobs
  const loadMore = () => {
    setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 3);
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <section className="job-openings-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="page-title">Find your dream job</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="job-search-section">
        <div className="container">
          <div className="search-filter-container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for jobs..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="form-control search-input"
              />
              <i className="fas fa-search search-icon"></i>
            </div>
            
            <div className="filter-section">
              <div className="filter-label">Filter by</div>
              <div className="filters-row">
                <select 
                  name="category" 
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="form-select filter-select"
                >
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
                
                <select 
                  name="type" 
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="form-select filter-select"
                >
                  <option value="">All Types</option>
                  {types.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                
                <select 
                  name="location" 
                  value={filters.location}
                  onChange={handleFilterChange}
                  className="form-select filter-select"
                >
                  <option value="">All Locations</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
                
                <button 
                  className="btn btn-outline-secondary reset-btn"
                  onClick={resetFilters}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="job-listings-section">
        <div className="container">
          {filteredJobs.length === 0 ? (
            <div className="no-jobs-found">
              <i className="fas fa-search fa-3x mb-3"></i>
              <h3>No jobs found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                className="btn btn-primary mt-3"
                onClick={resetFilters}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="job-listings-grid">
              {filteredJobs.slice(0, visibleJobs).map(job => (
                <div className="job-card-wrapper" key={job.id}>
                  <div className="job-card">
                    <div className="job-card-header">
                      <h3 className="job-title">{job.title}</h3>
                      <div className="job-meta">
                        <span className="job-category">{job.category}</span>
                        <span className="job-type">{job.type}</span>
                        <span className="job-location">
                          <i className="fas fa-map-marker-alt"></i> {job.location}
                        </span>
                      </div>
                    </div>
                    <div className="job-card-body">
                      <p className="job-description">{job.description}</p>
                      <div className="job-tags">
                        {job.tags.map((tag, index) => (
                          <span key={index} className="job-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="job-card-footer">
                      <Link to={`/job-details/${encodeURIComponent(job.title)}`} className="btn btn-blue-white btn-sm">
                        More Details
                      </Link>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {filteredJobs.length > visibleJobs && (
            <div className="text-center mt-4 mb-5">
              <button 
                className="btn btn-outline-primary load-more-btn"
                onClick={loadMore}
              >
                Load more...
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobOpenings;
