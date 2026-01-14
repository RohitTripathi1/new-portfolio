import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiCode } from 'react-icons/hi'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden"
    >
      {/* Animated code-like particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-400/10 font-mono text-xs animate-code-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          >
            {['<', '/>', '{', '}', '()', '=>', 'const', 'function'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700/50 flex items-center justify-center shadow-2xl">
                <HiCode className="text-6xl text-gray-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-blue-500/50"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-blue-500/50"></div>
            </div>
          </div>
          
          <div className="relative mb-6">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-16 h-0.5" style={{ background: '#569cd6' }}></div>
            <h1 className="text-5xl md:text-7xl font-semibold mb-4 animate-slide-up" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
              <span style={{ color: '#569cd6' }}>class</span> <span style={{ color: '#dcdcaa' }}>RohitTripathi</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
            </h1>
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-0.5" style={{ background: '#569cd6' }}></div>
          </div>
          
          <div className="text-2xl md:text-4xl font-medium mb-6 animate-slide-up relative inline-block px-8" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#569cd6' }}>
            <span className="absolute left-0 top-1/2 w-6 h-px" style={{ background: 'rgba(86, 156, 214, 0.3)' }}></span>
            <span style={{ color: '#569cd6' }}>public</span> <span style={{ color: '#dcdcaa' }}>SoftwareEngineer</span> <span style={{ color: '#d4d4d4' }}>developer</span> <span style={{ color: '#d4d4d4' }}>;</span>
            <span className="absolute right-0 top-1/2 w-6 h-px" style={{ background: 'rgba(86, 156, 214, 0.3)' }}></span>
          </div>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-slide-up leading-relaxed" style={{ fontWeight: 400, color: '#d4d4d4', fontFamily: "'JetBrains Mono', monospace" }}>
            <span style={{ color: '#6a9955' }}>// </span>
            <span style={{ color: '#ce9178' }}>"Crafting elegant solutions"</span> <span style={{ color: '#d4d4d4' }}>+</span> <span style={{ color: '#ce9178' }}>" to complex problems"</span> <span style={{ color: '#d4d4d4' }}>;</span><br/>
            <span style={{ color: '#569cd6' }}>build</span><span style={{ color: '#d4d4d4' }}>(</span><span style={{ color: '#9cdcfe' }}>scalableApplications</span><span style={{ color: '#d4d4d4' }}>)</span> <span style={{ color: '#d4d4d4' }}>.</span><span style={{ color: '#dcdcaa' }}>deliver</span><span style={{ color: '#d4d4d4' }}>(</span><span style={{ color: '#ce9178' }}>"exceptional user experiences"</span><span style={{ color: '#d4d4d4' }}>)</span> <span style={{ color: '#d4d4d4' }}>;</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
            <a
              href="#contact"
              className="btn-3d-primary flex items-center justify-center"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="btn-3d-secondary flex items-center justify-center"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=18eFPp6ysq9sYv1lhCfLItxpQHLw9k4tM"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-accent flex items-center justify-center gap-2"
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-slide-up">
            <a
              href="https://github.com/RohitTripathi1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-colors transform hover:scale-110"
              style={{ color: '#858585' }}
              onMouseEnter={(e) => e.target.style.color = '#569cd6'}
              onMouseLeave={(e) => e.target.style.color = '#858585'}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-tripathi-3a048a21b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-colors transform hover:scale-110"
              style={{ color: '#858585' }}
              onMouseEnter={(e) => e.target.style.color = '#569cd6'}
              onMouseLeave={(e) => e.target.style.color = '#858585'}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/rohit_3001/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-colors transform hover:scale-110"
              style={{ color: '#858585' }}
              onMouseEnter={(e) => e.target.style.color = '#FFA116'}
              onMouseLeave={(e) => e.target.style.color = '#858585'}
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="mailto:businessrohit70@gmail.com"
              className="text-3xl transition-colors transform hover:scale-110"
              style={{ color: '#858585' }}
              onMouseEnter={(e) => e.target.style.color = '#569cd6'}
              onMouseLeave={(e) => e.target.style.color = '#858585'}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full flex justify-center" style={{ border: '2px solid rgba(86, 156, 214, 0.5)' }}>
          <div className="w-1 h-3 rounded-full mt-2" style={{ background: 'rgba(86, 156, 214, 0.5)' }}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

