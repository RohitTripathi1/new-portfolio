import React from 'react'
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices',
    },
    {
      icon: <FaRocket />,
      title: 'Fast Delivery',
      description: 'Delivering high-quality solutions within deadlines without compromising quality',
    },
    {
      icon: <FaUsers />,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams to achieve common goals',
    },
    {
      icon: <FaLightbulb />,
      title: 'Problem Solver',
      description: 'Analyzing complex problems and designing innovative solutions',
    },
  ]

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" style={{ fontWeight: 400, color: '#d4d4d4', fontFamily: "'JetBrains Mono', monospace" }}>
              <span style={{ color: '#569cd6' }}>public class</span> <span style={{ color: '#dcdcaa' }}>AboutMe</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span><br/>
              <span style={{ color: '#6a9955' }}>  // </span><span style={{ color: '#ce9178' }}>"Passionate software engineer"</span><br/>
              <span style={{ color: '#569cd6' }}>  private</span> <span style={{ color: '#9cdcfe' }}>String</span> <span style={{ color: '#dcdcaa' }}>foundation</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"Computer Science"</span><span style={{ color: '#d4d4d4' }}>;</span><br/>
              <span style={{ color: '#569cd6' }}>  private</span> <span style={{ color: '#9cdcfe' }}>String</span> <span style={{ color: '#dcdcaa' }}>drive</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"Create impactful solutions"</span><span style={{ color: '#d4d4d4' }}>;</span><br/>
              <span style={{ color: '#569cd6' }}>  private</span> <span style={{ color: '#9cdcfe' }}>String</span> <span style={{ color: '#dcdcaa' }}>journey</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"Continuous learning"</span><span style={{ color: '#d4d4d4' }}>;</span><br/>
              <span style={{ color: '#d4d4d4' }}>{'}'}</span>
            </p>
            <p className="text-lg leading-relaxed" style={{ fontWeight: 400, color: '#d4d4d4', fontFamily: "'JetBrains Mono', monospace" }}>
              <span style={{ color: '#569cd6' }}>public void</span> <span style={{ color: '#dcdcaa' }}>buildApplications</span><span style={{ color: '#d4d4d4' }}>()</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span><br/>
              <span style={{ color: '#9cdcfe' }}>  List</span><span style={{ color: '#d4d4d4' }}>{'<'}</span><span style={{ color: '#9cdcfe' }}>String</span><span style={{ color: '#d4d4d4' }}>{'>'}</span> <span style={{ color: '#dcdcaa' }}>technologies</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#9cdcfe' }}>ArrayList</span><span style={{ color: '#d4d4d4' }}>{'<>'}</span><span style={{ color: '#d4d4d4' }}>();</span><br/>
              <span style={{ color: '#dcdcaa' }}>  technologies</span><span style={{ color: '#d4d4d4' }}>.</span><span style={{ color: '#dcdcaa' }}>add</span><span style={{ color: '#d4d4d4' }}>(</span><span style={{ color: '#ce9178' }}>"Scalable Applications"</span><span style={{ color: '#d4d4d4' }}>);</span><br/>
              <span style={{ color: '#dcdcaa' }}>  technologies</span><span style={{ color: '#d4d4d4' }}>.</span><span style={{ color: '#dcdcaa' }}>add</span><span style={{ color: '#d4d4d4' }}>(</span><span style={{ color: '#ce9178' }}>"Clean, Maintainable Code"</span><span style={{ color: '#d4d4d4' }}>);</span><br/>
              <span style={{ color: '#d4d4d4' }}>{'}'}</span>
            </p>
            <p className="text-lg leading-relaxed" style={{ fontWeight: 400, color: '#d4d4d4', fontFamily: "'JetBrains Mono', monospace" }}>
              <span style={{ color: '#569cd6' }}>public void</span> <span style={{ color: '#dcdcaa' }}>contributeToOpenSource</span><span style={{ color: '#d4d4d4' }}>()</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span><br/>
              <span style={{ color: '#6a9955' }}>  // </span><span style={{ color: '#ce9178' }}>"Exploring new technologies"</span><br/>
              <span style={{ color: '#6a9955' }}>  // </span><span style={{ color: '#ce9178' }}>"Sharing knowledge with community"</span><br/>
              <span style={{ color: '#d4d4d4' }}>{'}'}</span>
            </p>
          </div>
          
          <div className="relative">
            <div style={{ background: '#252526', border: '1px solid #3e3e42', borderRadius: '0.5rem', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)' }}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full" style={{ background: '#569cd6' }}></div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
                  <span style={{ color: '#569cd6' }}>String[]</span> <span style={{ color: '#dcdcaa' }}>whatIDo</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
                </h3>
              </div>
              <ul className="space-y-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <li style={{ fontWeight: 400, color: '#d4d4d4' }}>
                  <span style={{ color: '#ce9178' }}>"Full-stack web development(React.js, Java)"</span><span style={{ color: '#d4d4d4' }}>,</span>
                </li>
                <li style={{ fontWeight: 400, color: '#d4d4d4' }}>
                  <span style={{ color: '#ce9178' }}>"System architecture & design"</span><span style={{ color: '#d4d4d4' }}>,</span>
                </li>
                <li style={{ fontWeight: 400, color: '#d4d4d4' }}>
                  <span style={{ color: '#ce9178' }}>"Agentic AI development"</span><span style={{ color: '#d4d4d4' }}>,</span>
                </li>
                <li style={{ fontWeight: 400, color: '#d4d4d4' }}>
                  <span style={{ color: '#ce9178' }}>"Code reviews & mentoring"</span><span style={{ color: '#d4d4d4' }}>,</span>
                </li>
                <li style={{ fontWeight: 400, color: '#d4d4d4' }}>
                  <span style={{ color: '#ce9178' }}>"Agile development practices"</span><br/>
                  <span style={{ color: '#d4d4d4' }}>{'}'}</span><span style={{ color: '#d4d4d4' }}>;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="card text-center hover:transform hover:scale-105 transition-transform duration-300 min-w-0"
              style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
            >
              <div className="text-4xl mb-4 flex justify-center" style={{ color: '#569cd6' }}>
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 break-words" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
                <span style={{ color: '#569cd6' }}>this</span><span style={{ color: '#d4d4d4' }}>.</span><span style={{ color: '#dcdcaa' }}>{highlight.title.replace(/\s+/g, '')}</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{highlight.title}"</span><span style={{ color: '#d4d4d4' }}>;</span>
              </h3>
              <p style={{ fontWeight: 400, lineHeight: '1.6', color: '#d4d4d4', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                <span style={{ color: '#6a9955' }}>// </span>{highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

