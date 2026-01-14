import React from 'react'
import {
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiGraphql,
  SiTailwindcss,
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
        { name: 'Next.js', icon: <SiTypescript />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Java', icon: <FaNode />, level: 90 },
        { name: 'Spring Boot', icon: <FaPython />, level: 85 },
        { name: 'Node.js', icon: <FaJava />, level: 80 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 75 },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
        { name: 'Redis', icon: <SiRedis />, level: 75 },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 80 },
        { name: 'Docker', icon: <FaDocker />, level: 85 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 75 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="card">
              <div className="relative mb-6">
                <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#569cd6', fontFamily: "'JetBrains Mono', monospace" }}>
                  <span style={{ color: '#569cd6' }}>Map</span><span style={{ color: '#d4d4d4' }}>{'<'}</span><span style={{ color: '#9cdcfe' }}>String</span><span style={{ color: '#d4d4d4' }}>,</span> <span style={{ color: '#9cdcfe' }}>Integer</span><span style={{ color: '#d4d4d4' }}>{'>'}</span> <span style={{ color: '#dcdcaa' }}>{category.category}</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#9cdcfe' }}>HashMap</span><span style={{ color: '#d4d4d4' }}>{'<>'}</span><span style={{ color: '#d4d4d4' }}>();</span>
                </h3>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-12 h-px" style={{ background: '#569cd6' }}></div>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" style={{ color: '#569cd6' }}>{skill.icon}</span>
                        <span className="font-semibold" style={{ color: '#dcdcaa' }}>
                          <span style={{ color: '#dcdcaa' }}>{category.category.toLowerCase()}</span><span style={{ color: '#d4d4d4' }}>.</span><span style={{ color: '#dcdcaa' }}>put</span><span style={{ color: '#d4d4d4' }}>(</span><span style={{ color: '#ce9178' }}>"{skill.name}"</span><span style={{ color: '#d4d4d4' }}>, </span><span style={{ color: '#b5cea8' }}>{skill.level}</span><span style={{ color: '#d4d4d4' }}>);</span>
                        </span>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: '#9cdcfe' }}>{skill.level}%</span>
                    </div>
                    <div className="w-full rounded-full h-2.5" style={{ background: '#2d2d30' }}>
                      <div
                        className="h-2.5 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${skill.level}%`,
                          background: '#0e639c',
                          boxShadow: '0 0 10px rgba(14, 99, 156, 0.5)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card">
          <div className="relative mb-6">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#569cd6', fontFamily: "'JetBrains Mono', monospace" }}>
              <span style={{ color: '#569cd6' }}>String[]</span> <span style={{ color: '#dcdcaa' }}>additionalSkills</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
            </h3>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-12 h-px" style={{ background: '#569cd6' }}></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {[
              'Agile/Scrum',
              'RESTful APIs',
              'Microservices',
              'System Design',
              'Code Review',
              'Kafka',
              'Problem Solving',
              'Team Leadership',
              'CI/CD',
              'Testing',
              'Performance Optimization',
              'Security Best Practices',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded text-sm font-medium transition-colors"
                style={{ 
                  background: '#264f78', 
                  border: '1px solid #3e3e42', 
                  color: '#9cdcfe' 
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#569cd6'
                  e.target.style.background = '#2d5a87'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#3e3e42'
                  e.target.style.background = '#264f78'
                }}
              >
                <span style={{ color: '#ce9178' }}>"{skill}"</span>{index < 11 ? <span style={{ color: '#d4d4d4' }}>,</span> : <span style={{ color: '#d4d4d4' }}>;</span>}
              </span>
            ))}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: '#d4d4d4', textAlign: 'center', marginTop: '1rem' }}>{'}'}</div>
        </div>
      </div>
    </section>
  )
}

export default Skills

