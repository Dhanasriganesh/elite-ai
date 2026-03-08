import React, { useState } from 'react';
import careerBgImage from '../../assets/careers/careers-bg.png';
import careerImage from '../../assets/careers/careers.png';
import { getApiBaseUrl } from '../../utils/api';

const OPEN_POSITIONS = [
  {
    id: 1,
    title: 'Software Engineer',
    location: 'Remote / Hybrid',
    experience: '3–7 Years',
    description: 'We are seeking a skilled Software Engineer to design, develop, and maintain high-quality software applications. The ideal candidate will collaborate with cross-functional teams to deliver scalable and efficient technology solutions.',
    responsibilities: [
      'Develop and maintain web and enterprise applications',
      'Write clean, efficient, and well-documented code',
      'Participate in code reviews and architecture discussions',
      'Debug and resolve software defects',
      'Collaborate with product managers, QA, and DevOps teams',
    ],
    skills: ['Java, Python, or Node.js', 'RESTful API development', 'SQL / NoSQL databases', 'Git version control', 'Agile development methodologies'],
  },
  {
    id: 2,
    title: 'Data Engineer',
    location: 'Remote / Hybrid',
    experience: '4–8 Years',
    description: 'We are looking for a Data Engineer to design, build, and maintain scalable data pipelines and data platforms that support analytics and business intelligence.',
    responsibilities: [
      'Design and develop data pipelines and ETL processes',
      'Build scalable data architectures',
      'Integrate data from multiple sources',
      'Ensure data quality, security, and governance',
      'Collaborate with data analysts and data scientists',
    ],
    skills: ['Python / Scala / SQL', 'Apache Spark / Hadoop', 'ETL tools (Airflow, Informatica, Talend)', 'Data warehousing (Snowflake, Redshift, BigQuery)', 'Cloud platforms (AWS / Azure / GCP)'],
  },
  {
    id: 3,
    title: 'Java Full Stack Developer',
    location: 'Remote / Hybrid',
    experience: '5–10 Years',
    description: 'We are seeking a Java Full Stack Developer responsible for building scalable web applications across both frontend and backend systems.',
    responsibilities: [
      'Develop backend services using Java and Spring Boot',
      'Build modern front-end applications using React or Angular',
      'Design REST APIs and microservices',
      'Work closely with UI/UX designers and DevOps teams',
      'Ensure application performance and security',
    ],
    skills: ['Java, Spring Boot', 'React / Angular / TypeScript', 'Microservices architecture', 'REST APIs', 'SQL / NoSQL databases'],
  },
  {
    id: 4,
    title: 'IT Project Manager',
    location: 'Remote / Hybrid',
    experience: '7–12 Years',
    description: 'We are seeking an experienced IT Project Manager to lead technology projects from planning to successful delivery while ensuring alignment with business goals.',
    responsibilities: [
      'Manage project scope, schedule, and resources',
      'Coordinate with technical teams and stakeholders',
      'Track project milestones and deliverables',
      'Identify risks and implement mitigation plans',
      'Ensure projects meet quality and timeline requirements',
    ],
    skills: ['Agile / Scrum / Waterfall methodologies', 'Jira / Confluence / project management tools', 'Strong communication and leadership skills', 'Budget and resource management'],
  },
  {
    id: 5,
    title: 'QA Engineer',
    location: 'Remote / Hybrid',
    experience: '3–6 Years',
    description: 'We are looking for a QA Engineer responsible for ensuring the quality and reliability of software applications through rigorous testing and automation.',
    responsibilities: [
      'Develop and execute test plans and test cases',
      'Perform functional, regression, and performance testing',
      'Identify, track, and resolve defects',
      'Collaborate with developers to improve product quality',
      'Implement test automation frameworks',
    ],
    skills: ['Selenium / Cypress / Playwright', 'API testing tools (Postman, RestAssured)', 'Java / Python / JavaScript', 'CI/CD testing integration'],
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    location: 'Remote / Hybrid',
    experience: '4–8 Years',
    description: 'We are seeking a DevOps Engineer to manage cloud infrastructure, CI/CD pipelines, and automation processes to support scalable and reliable deployments.',
    responsibilities: [
      'Build and maintain CI/CD pipelines',
      'Automate deployments and infrastructure provisioning',
      'Monitor system performance and availability',
      'Ensure security and compliance of infrastructure',
    ],
    skills: ['AWS / Azure / Google Cloud', 'Docker & Kubernetes', 'Jenkins / GitHub Actions / GitLab CI', 'Terraform / Infrastructure as Code'],
  },
  {
    id: 7,
    title: 'ServiceNow Developer',
    location: 'Remote / Hybrid',
    experience: '3–7 Years',
    description: 'We are looking for a ServiceNow Developer to design and implement solutions on the ServiceNow platform to improve IT service management and automation.',
    responsibilities: [
      'Develop and customize ServiceNow modules',
      'Implement workflows and integrations',
      'Maintain ServiceNow platform configurations',
      'Troubleshoot and resolve platform issues',
    ],
    skills: ['ServiceNow development experience', 'JavaScript / ServiceNow scripting', 'ITSM modules', 'REST integrations'],
  },
  {
    id: 8,
    title: 'Human Resources (HR) Specialist',
    location: 'Hybrid / Onsite',
    experience: '3–6 Years',
    description: 'We are seeking a Human Resources Specialist to manage recruitment, employee engagement, and HR operations to support our growing workforce.',
    responsibilities: [
      'Manage end-to-end recruitment processes',
      'Coordinate onboarding and employee documentation',
      'Maintain HR policies and compliance',
      'Support employee engagement initiatives',
      'Manage HR records and payroll coordination',
    ],
    skills: ['HR management and recruitment experience', 'HR software / ATS platforms', 'Strong interpersonal and communication skills', 'Knowledge of labor regulations and compliance'],
  },
];

function Career() {
  const [view, setView] = useState('list'); // 'list' | 'detail' | 'form'
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    role: '',
    message: ''
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx', '.zip'];
      const fileExtension = '.' + selectedFile.name.split('.').pop().toLowerCase();
      
      if (!allowedTypes.includes(fileExtension)) {
        setErrorMessage('Invalid file type. Allowed types: PDF, DOC, DOCX, ZIP');
        setFile(null);
        e.target.value = '';
        return;
      }
      
      // Validate file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setErrorMessage('File size must be less than 10MB');
        setFile(null);
        e.target.value = '';
        return;
      }
      
      setFile(selectedFile);
      setErrorMessage('');
    } else {
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const API_URL = getApiBaseUrl();
      console.log('Submitting career application to:', `${API_URL}/careers/apply`);
      
      // Create FormData for file upload
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('mobile', formData.mobile);
      payload.append('role', formData.role);
      payload.append('message', formData.message || '');
      if (file) {
        payload.append('file', file);
      }
      
      const response = await fetch(`${API_URL}/careers/apply`, {
        method: 'POST',
        body: payload, // Don't set Content-Type header - browser sets it automatically with boundary
      });

      console.log('Response status:', response.status);

      // Check if response is ok
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          if (errorText.includes('<!DOCTYPE')) {
            setSubmitStatus('error');
            setErrorMessage('Server endpoint not found (404). Please ensure the backend server is running.');
            return;
          }
          errorData = { error: errorText || `Server error: ${response.status} ${response.statusText}` };
        }
        
        setSubmitStatus('error');
        setErrorMessage(errorData.error || `Server error: ${response.status} ${response.statusText}`);
        return;
      }

      // Parse successful response
      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          role: '',
          message: ''
        });
        setFile(null);
        // Reset file input
        const fileInput = document.getElementById('resume-file');
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      setSubmitStatus('error');
      if (error.message && error.message.includes('Unexpected token')) {
        setErrorMessage('Server returned invalid response. Please ensure the backend server is running and accessible.');
      } else if (error.message && (
        error.message.includes('Failed to fetch') || 
        error.message.includes('NetworkError') || 
        error.message.includes('ERR_CONNECTION_REFUSED') ||
        error.name === 'TypeError'
      )) {
        setErrorMessage('Network error. Please check your connection and try again.');
      } else {
        setErrorMessage('Failed to submit application. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - only on Open Positions list */}
      {view === 'list' && (
        <section 
          className="relative h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] flex items-center justify-center overflow-hidden text-white"
          style={{
            backgroundImage: `url(${careerBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 animate-fade-in-up px-2">
                Build Your Career
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 animate-fade-in-up-delay px-2">
                Transform your skills, accelerate your growth, and unlock your potential with Elite AI
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Careers Section: one card for entire flow (List → Job Description → Form) */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-100 to-white shadow-xl shadow-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-gray-900 overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-10">
            {/* Open Positions List - one card per row, premium UI */}
            {view === 'list' && (
              <>
                <div className="text-center mb-10 sm:mb-12">
                  <p className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-2">Careers</p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Open Positions
                  </h2>
                  <p className="mt-3 text-slate-600 text-lg max-w-xl mx-auto">
                    Find your next opportunity and grow with us.
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-5">
                  {OPEN_POSITIONS.map((job) => (
                    <div
                      key={job.id}
                      className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300/80 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 p-5 sm:p-6 lg:p-7">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600">
                            <span className="flex items-center gap-1.5">
                              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            Experience:  {job.experience}
                            </span>
                          </div>
                        </div>
                        <div className="sm:shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedJob(job);
                              setView('detail');
                            }}
                            className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-5 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-indigo-600 hover:text-white border border-slate-200/80 hover:border-indigo-500 transition-all duration-300"
                          >
                            Apply Now
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Job Description - inside same section card */}
            {view === 'detail' && selectedJob && (
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedJob(null);
                    setView('list');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-slate-100 font-medium mb-6 text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Open Positions
                </button>
                <div className="border border-slate-200/80 rounded-xl overflow-hidden">
                  <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 sm:px-6 py-5 sm:py-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{selectedJob.title}</h2>
                    <div className="flex flex-wrap gap-3 text-slate-600">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 text-sm font-medium">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {selectedJob.location}
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 text-sm font-medium">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                       Experience: {selectedJob.experience}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-2">Overview</h3>
                      <p className="text-slate-700 leading-relaxed">{selectedJob.description}</p>
                    </div>
                    <div className="rounded-lg bg-slate-50/80 border border-slate-100 p-4 sm:p-5">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Responsibilities</h3>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((item, i) => (
                          <li key={i} className="flex gap-3 text-slate-700 text-sm sm:text-base">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-slate-50/80 border border-slate-100 p-4 sm:p-5">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Required Skills</h3>
                      <ul className="space-y-2">
                        {selectedJob.skills.map((skill, i) => (
                          <li key={i} className="flex gap-3 text-slate-700 text-sm sm:text-base">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-5 sm:px-6 py-4 sm:py-5 bg-slate-50/50 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, role: selectedJob.title }));
                        setView('form');
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
                    >
                      Apply for this role
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Application Form - inside same section card */}
            {view === 'form' && (
              <>
                <button
                  type="button"
                  onClick={() => setView(selectedJob ? 'detail' : 'list')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-slate-100 font-medium mb-6 text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Job Description
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  Join Our Team
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:items-stretch">
                  <div className="flex items-center justify-center order-2 lg:order-1">
                    <img 
                      src={careerImage} 
                      alt="Career Growth" 
                      className="w-full h-auto object-contain rounded-xl sm:rounded-2xl max-h-[400px] sm:max-h-[500px] lg:max-h-none"
                    />
                  </div>
                  <div className="flex flex-col order-1 lg:order-2">
                <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl border border-slate-200/80 p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  {submitStatus === 'success' && (
                    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center text-xs sm:text-sm">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Application submitted successfully! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center text-xs sm:text-sm">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errorMessage || 'There was an error submitting your application. Please try again.'}
                    </div>
                  )}

                  {errorMessage && submitStatus !== 'error' && (
                    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg flex items-center text-xs sm:text-sm">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {errorMessage}
                    </div>
                  )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 sm:mb-5 md:mb-6">
                <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                  Mobile <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm bg-gray-50 focus:bg-white"
                  required
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-4 sm:mb-5 md:mb-6">
                <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                  Role of Interest <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="e.g., AI/ML Engineer, Cloud Architect, Full Stack Developer"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm bg-gray-50 focus:bg-white"
                  required
                />
              </div>
              <div className="mb-4 sm:mb-5 md:mb-6">
                <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your career goals and what you're looking for..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs sm:text-sm bg-gray-50 focus:bg-white"
                ></textarea>
              </div>
              <div className="mb-4 sm:mb-5 md:mb-6">
                <label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">Resume/Portfolio (*Only .pdf) <span className="text-red-500">*</span></label>
                <input
                  type="file"
                  id="resume-file"
                  name="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.zip"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm bg-gray-50 focus:bg-white file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-lg file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Accepted: PDF, DOC, DOCX, ZIP (Max 10MB)</p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
                </form>
                  </div>
                </div>
              </>
            )}
              </div>
            </div>
          </div>
        </div>
      </section>
  {/* How We Hire */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                How We Hire
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Our hiring process is designed to be transparent and efficient.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { step: '1', title: 'Application Review', desc: 'Our team reviews your resume and experience.' },
                { step: '2', title: 'Technical Evaluation', desc: 'Candidates may complete a technical interview or skills assessment.' },
                { step: '3', title: 'Interview with Team', desc: 'Meet our engineers, managers, and leadership team.' },
                { step: '4', title: 'Offer & Onboarding', desc: 'Successful candidates receive an offer and begin onboarding.' },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative bg-slate-50 rounded-xl border border-slate-200/80 p-5 sm:p-6 text-center sm:text-left"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold text-lg mb-3">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at Elite AI Solutions */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Life at Elite AI Solutions
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed text-center">
              At Elite AI Solutions, we believe great companies are built by great people. Our culture promotes innovation, ownership, and collaboration. We celebrate new ideas and support employees in achieving both professional and personal success.
            </p>
          </div>
        </div>
      </section>

      {/* Apply Now / Contact */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 sm:p-8 md:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Apply Now
              </h2>
              <p className="text-slate-600 mb-6">
                Interested in joining our team?<br />Send your resume to:
              </p>
              <a
                href="mailto:careers@eliteaisolutions.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 transition-colors"
              >
                <span aria-hidden>📧</span>
                careers@eliteaisolutions.com
              </a>
              <p className="text-slate-500 text-sm mt-6">
                Or apply directly through the job listings above.
              </p>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default Career;

