import React from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech',
      institution: 'Shiv Nadar University',
      location: 'Noida, India',
      period: '2021 - 2025',
      description: 'Specialized in software engineering, algorithms, and data structures.',
      relevantCoursework: 'Data Structures, Algorithms, Database Systems, Software Engineering',
    },
  ]

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="card relative pl-8" style={{ borderLeft: '4px solid #569cd6' }}>
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#264f78', border: '2px solid #569cd6' }}>
                <FaGraduationCap className="text-sm" style={{ color: '#9cdcfe' }} />
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 break-words" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
                    <span style={{ color: '#569cd6' }}>class</span> <span style={{ color: '#dcdcaa' }}>{edu.degree.replace(/\s+/g, '')}</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
                  </h3>
                  <div className="flex items-center font-semibold mb-2 text-sm sm:text-base break-words" style={{ fontWeight: 600, color: '#569cd6', fontFamily: "'JetBrains Mono', monospace" }}>
                    <span style={{ color: '#569cd6' }}>private</span> <span style={{ color: '#9cdcfe' }}>String</span> <span style={{ color: '#dcdcaa' }}>institution</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{edu.institution}"</span><span style={{ color: '#d4d4d4' }}>;</span>
                  </div>
                  <div className="flex items-center mb-4 text-xs sm:text-sm break-words" style={{ fontWeight: 400, color: '#858585', fontFamily: "'JetBrains Mono', monospace" }}>
                    <span style={{ color: '#569cd6' }}>private</span> <span style={{ color: '#9cdcfe' }}>String</span> <span style={{ color: '#dcdcaa' }}>location</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{edu.location}"</span><span style={{ color: '#d4d4d4' }}>;</span>
                  </div>
                </div>
                <div className="flex items-center px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm" style={{ fontWeight: 500, color: '#9cdcfe', background: '#264f78', border: '1px solid #3e3e42', fontFamily: "'JetBrains Mono', monospace" }}>
                  <span style={{ color: '#569cd6' }}>String</span> <span style={{ color: '#dcdcaa' }}>period</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{edu.period}"</span><span style={{ color: '#d4d4d4' }}>;</span>
                </div>
              </div>

              <p className="mb-4 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400, color: '#d4d4d4', fontFamily: "'JetBrains Mono', monospace" }}>
                <span style={{ color: '#6a9955' }}>// </span>{edu.description}
              </p>

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-px" style={{ background: '#569cd6' }}></div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
                      <span style={{ color: '#569cd6' }}>String[]</span> <span style={{ color: '#dcdcaa' }}>achievements</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
                    </h4>
                    <div className="flex-1 h-px" style={{ background: '#569cd6' }}></div>
                  </div>
                  <ul className="list-none space-y-1" style={{ fontWeight: 400, color: '#d4d4d4', fontFamily: "'JetBrains Mono', monospace" }}>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>
                        <span style={{ color: '#ce9178' }}>"{achievement}"</span>{idx < edu.achievements.length - 1 ? <span style={{ color: '#d4d4d4' }}>,</span> : <span style={{ color: '#d4d4d4' }}>;</span>}
                      </li>
                    ))}
                    <li><span style={{ color: '#d4d4d4' }}>{'}'}</span></li>
                  </ul>
                </div>
              )}

              {edu.relevantCoursework && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-px" style={{ background: '#569cd6' }}></div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base break-words" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
                      <span style={{ color: '#569cd6' }}>String</span> <span style={{ color: '#dcdcaa' }}>relevantCoursework</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{edu.relevantCoursework}"</span><span style={{ color: '#d4d4d4' }}>;</span>
                    </h4>
                    <div className="flex-1 h-px" style={{ background: '#569cd6' }}></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

