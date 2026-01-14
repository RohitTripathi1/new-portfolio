import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'SNU Codes - Coding Practice Platform',
      description:
        'Interactive coding practice platform featuring structured challenges, timers, pre-built functions, and submission tracking to support coding education on campus. Implemented in-browser code editor using React CodeMirror and managed global state with Recoil, storing user submissions in Firebase Firestore for progress synchronization.',
      technologies: ['React', 'CodeMirror', 'Recoil', 'Firebase', 'Firestore', 'JavaScript'],
      github: 'https://github.com/RohitTripathi1/leetcode',
      demo: null,
      image: '💻',
      featured: true,
    },
    {
      title: 'AI-Powered News Aggregation Platform',
      description:
        'Full-stack AI-driven news aggregator using React, TailwindCSS, and FastAPI, delivering real-time personalized articles through Tavily AI Search with 3x improved content relevance over traditional RSS feeds. Engineered modular backend agent with context-aware search, asynchronous pipelines, and Pydantic-validated data flows, generating 18-20 relevant articles per query. Incorporated OpenAI Whisper for speech-to-text and text-to-speech to enable voice-interactive browsing and voice-controlled article playback across devices.',
      technologies: ['React', 'TailwindCSS', 'FastAPI', 'Tavily AI', 'OpenAI Whisper', 'Pydantic'],
      github: 'https://github.com/RohitTripathi1/news-agent',
      demo: null,
      image: '📰',
      featured: true,
    },
    {
      title: 'Social Media Analytics Dashboard',
      description:
        'Real-time analytics dashboard for social media metrics with data visualization, custom reports, and API integrations.',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Chart.js', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      image: '📊',
      featured: false,
    },
    {
      title: 'API Gateway Service',
      description:
        'High-performance API gateway with rate limiting, authentication, request routing, and monitoring capabilities.',
      technologies: ['Node.js', 'Express', 'Redis', 'Kubernetes', 'Prometheus'],
      github: 'https://github.com',
      demo: null,
      image: '🚀',
      featured: false,
    },
    {
      title: 'Real-time Chat Application',
      description:
        'Scalable chat application with multiple rooms, file sharing, emoji reactions, and end-to-end encryption.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      image: '💬',
      featured: false,
    },
    {
      title: 'Machine Learning Model API',
      description:
        'RESTful API for serving machine learning models with batch processing, model versioning, and performance monitoring.',
      technologies: ['Python', 'Flask', 'TensorFlow', 'Docker', 'Kubernetes', 'PostgreSQL'],
      github: 'https://github.com',
      demo: null,
      image: '🤖',
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>

      <div className="max-w-7xl mx-auto">
        {/* Featured Projects */}
        <div className="mb-16">
          <div className="relative mb-8">
            <h3 className="text-3xl font-semibold mb-8 text-center" style={{ color: '#569cd6', fontFamily: "'JetBrains Mono', monospace" }}>
              <span style={{ color: '#569cd6' }}>List</span><span style={{ color: '#d4d4d4' }}>{'<'}</span><span style={{ color: '#9cdcfe' }}>Project</span><span style={{ color: '#d4d4d4' }}>{'>'}</span> <span style={{ color: '#dcdcaa' }}>featuredProjects</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#9cdcfe' }}>ArrayList</span><span style={{ color: '#d4d4d4' }}>{'<>'}</span><span style={{ color: '#d4d4d4' }}>();</span>
            </h3>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-16 h-px" style={{ background: '#569cd6' }}></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="card group hover:transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#dcdcaa' }}>
                  <span style={{ color: '#569cd6' }}>Project</span> <span style={{ color: '#dcdcaa' }}>{project.title.replace(/\s+/g, '')}</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#9cdcfe' }}>Project</span><span style={{ color: '#d4d4d4' }}>();</span>
                </h3>
                <p className="mb-4 leading-relaxed" style={{ fontWeight: 400, color: '#d4d4d4' }}>
                  <span style={{ color: '#6a9955' }}>// </span>{project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span style={{ color: '#569cd6' }}>String[]</span> <span style={{ color: '#dcdcaa' }}>tech</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded text-xs font-medium transition-colors"
                      style={{ background: '#2d2d30', border: '1px solid #3e3e42', color: '#9cdcfe' }}
                      onMouseEnter={(e) => e.target.style.borderColor = '#569cd6'}
                      onMouseLeave={(e) => e.target.style.borderColor = '#3e3e42'}
                    >
                      <span style={{ color: '#ce9178' }}>"{tech}"</span>{idx < project.technologies.length - 1 ? <span style={{ color: '#d4d4d4' }}>,</span> : <span style={{ color: '#d4d4d4' }}>;</span>}
                    </span>
                  ))}
                  <span style={{ color: '#d4d4d4' }}>{'}'}</span>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold transition-colors"
                    style={{ color: '#569cd6' }}
                    onMouseEnter={(e) => e.target.style.color = '#9cdcfe'}
                    onMouseLeave={(e) => e.target.style.color = '#569cd6'}
                  >
                    <FaGithub /> <span style={{ color: '#d4d4d4' }}>repository</span><span style={{ color: '#d4d4d4' }}>.</span><span style={{ color: '#dcdcaa' }}>getUrl</span><span style={{ color: '#d4d4d4' }}>();</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-semibold transition-colors"
                      style={{ color: '#569cd6' }}
                      onMouseEnter={(e) => e.target.style.color = '#9cdcfe'}
                      onMouseLeave={(e) => e.target.style.color = '#569cd6'}
                    >
                      <FaExternalLinkAlt /> <span style={{ color: '#d4d4d4' }}>project</span><span style={{ color: '#d4d4d4' }}>.</span><span style={{ color: '#dcdcaa' }}>launch</span><span style={{ color: '#d4d4d4' }}>();</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

