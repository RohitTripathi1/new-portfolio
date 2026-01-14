import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer- I (Full Stack)',
      company: 'Visit Health',
      location: 'Noida, India',
      period: '2026 - Present',
      type: 'Full-time',
      description: 'Developing scalable health tech solutions for online consultation and patient care management.',
      responsibilities: [
        'Built end-to-end online consultation booking system using React and Java Spring Boot, enabling seamless patient-doctor appointment scheduling and virtual consultations for 10,000+ monthly users',
        'Implemented real-time patient data processing pipeline using Apache Kafka, ensuring HIPAA-compliant event streaming between microservices for electronic health records and prescription management',
        'Optimized SQL database queries and designed normalized schemas for patient records, reducing query response time by 45% and improving data retrieval efficiency for clinical workflows',
        'Developed responsive React dashboards for healthcare providers to manage appointments, view patient histories, and track consultation metrics in real-time',
      ],
      technologies: ['React', 'Java', 'Spring Boot', 'Kafka', 'SQL', 'PostgreSQL', 'REST API'],
    },
    {
      title: 'Software Engineer -I',
      company: 'Chegg Inc.',
      location: 'On-Site',
      period: 'Jan. 2025 - Nov. 2025',
      type: 'Full-time',
      description: 'Developed full-stack applications with focus on Spring Boot backend services and React frontend.',
      responsibilities: [
        'Built core UI flows for AI Voice Agent using React and Next.js, delivering responsive and accessible interfaces adopted by 60,000+ students',
        'Designed and deployed Spring Boot privacy framework that scans AWS S3 and OpenSearch, anonymizes user identifiers, and executes deletions to meet compliance requirements',
        'Integrated AI-generated imagery, voice interactions, and conversation workflows using FastAPI, DynamoDB, AWS S3, LangGraph, and Retrieval-Augmented Generation, improving response latency by 30%',
        'Developed 80% unit test coverage for React components and custom hooks using Jest and React Testing Library, reducing regressions across releases',
        'Collaborated within Agile and Scrum teams to deliver production features, maintaining CI/CD pipelines, code reviews, accessibility standards, and quality assurance processes',
      ],
      technologies: ['React', 'Next.js', 'Java', 'Spring Boot', 'Kafka', 'AWS S3', 'DynamoDB', 'Jest'],
    },
    {
      title: 'Software Development Intern',
      company: 'Prep Pro',
      location: 'Remote',
      period: 'Summer 2024',
      type: 'Internship',
      description: 'Developed edtech platform features for online course enrollment and payment processing.',
      responsibilities: [
        'Built course cart and booking system using React and Node.js, enabling students to browse, select, and enroll in multiple courses with real-time seat availability tracking',
        'Integrated Razorpay payment gateway API for secure course payments, implementing webhook handlers for payment verification and automated enrollment confirmation emails',
        'Developed responsive course catalog interface with filtering, search functionality, and dynamic pricing calculations based on discount codes and bundle offers',
        'Implemented Firebase Realtime Database for managing student enrollments, course progress tracking, and user authentication with role-based access control',
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'Firebase', 'Razorpay API', 'REST API'],
    },
  ]

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Professional Experience</h2>

      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card hover:border-l-4 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FaBriefcase style={{ color: '#569cd6' }} />
                    <h3 className="text-2xl font-semibold" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
                      <span style={{ color: '#569cd6' }}>public</span> <span style={{ color: '#9cdcfe' }}>Position</span> <span style={{ color: '#dcdcaa' }}>{exp.title.replace(/\s+/g, '')}</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
                    </h3>
                  </div>
                  <div className="flex items-center font-semibold mb-2" style={{ fontWeight: 600, color: '#569cd6', fontFamily: "'JetBrains Mono', monospace" }}>
                    <span style={{ color: '#569cd6' }}>private</span> <span style={{ color: '#9cdcfe' }}>String</span> <span style={{ color: '#dcdcaa' }}>company</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{exp.company}"</span><span style={{ color: '#d4d4d4' }}>;</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mb-4" style={{ fontWeight: 400, color: '#858585', fontFamily: "'JetBrains Mono', monospace" }}>
                    <div className="flex items-center">
                      <span style={{ color: '#569cd6' }}>private</span> <span style={{ color: '#9cdcfe' }}>String</span> <span style={{ color: '#dcdcaa' }}>location</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{exp.location}"</span><span style={{ color: '#d4d4d4' }}>;</span>
                    </div>
                    <div className="flex items-center">
                      <span style={{ color: '#569cd6' }}>private</span> <span style={{ color: '#9cdcfe' }}>String</span> <span style={{ color: '#dcdcaa' }}>period</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{exp.period}"</span><span style={{ color: '#d4d4d4' }}>;</span>
                    </div>
                    <span className="px-3 py-1 rounded text-sm font-semibold" style={{ background: '#264f78', border: '1px solid #3e3e42', color: '#9cdcfe', fontFamily: "'JetBrains Mono', monospace" }}>
                      <span style={{ color: '#569cd6' }}>Type</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{exp.type}"</span>
                    </span>
                  </div>
                </div>
              </div>

              <p className="mb-4 leading-relaxed" style={{ fontWeight: 400, color: '#d4d4d4', fontFamily: "'JetBrains Mono', monospace" }}>
                <span style={{ color: '#6a9955' }}>// </span>{exp.description}
              </p>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-px" style={{ background: '#569cd6' }}></div>
                  <h4 className="font-semibold mb-2" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
                    <span style={{ color: '#569cd6' }}>public void</span> <span style={{ color: '#dcdcaa' }}>responsibilities</span><span style={{ color: '#d4d4d4' }}>()</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
                  </h4>
                  <div className="flex-1 h-px" style={{ background: '#569cd6' }}></div>
                </div>
                <ul className="list-none space-y-1" style={{ fontWeight: 400, color: '#d4d4d4', fontFamily: "'JetBrains Mono', monospace" }}>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      <span style={{ color: '#6a9955' }}>  // </span><span style={{ color: '#ce9178' }}>"{resp}"</span><span style={{ color: '#d4d4d4' }}>;</span>
                    </li>
                  ))}
                  <li><span style={{ color: '#d4d4d4' }}>{'}'}</span></li>
                </ul>
              </div>

              <div className="mt-4 pt-4" style={{ borderTop: '1px solid #3e3e42' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-px" style={{ background: '#569cd6' }}></div>
                  <h4 className="font-semibold mb-2" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
                    <span style={{ color: '#569cd6' }}>String[]</span> <span style={{ color: '#dcdcaa' }}>technologies</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
                  </h4>
                  <div className="flex-1 h-px" style={{ background: '#569cd6' }}></div>
                </div>
                <div className="flex flex-wrap gap-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded text-sm font-medium transition-colors"
                      style={{ background: '#2d2d30', border: '1px solid #3e3e42', color: '#9cdcfe' }}
                      onMouseEnter={(e) => e.target.style.borderColor = '#569cd6'}
                      onMouseLeave={(e) => e.target.style.borderColor = '#3e3e42'}
                    >
                      <span style={{ color: '#ce9178' }}>"{tech}"</span>{idx < exp.technologies.length - 1 ? <span style={{ color: '#d4d4d4' }}>,</span> : <span style={{ color: '#d4d4d4' }}>;</span>}
                    </span>
                  ))}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", color: '#d4d4d4', marginTop: '0.5rem' }}>{'}'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

