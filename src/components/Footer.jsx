import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: '#252526', backdropFilter: 'blur(10px)', borderTop: '1px solid #3e3e42', padding: '2rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm sm:text-base" style={{ color: '#d4d4d4' }}>
              <span style={{ color: '#6a9955' }}>// </span>
              <span style={{ color: '#ce9178' }}>"Made with"</span> <FaHeart className="text-red-500 animate-pulse" /> <span style={{ color: '#ce9178' }}>"by Rohit Tripathi"</span><span style={{ color: '#d4d4d4' }}>;</span>
            </p>
            <p className="text-xs sm:text-sm mt-1" style={{ color: '#858585' }}>
              <span style={{ color: '#6a9955' }}>// </span>
              <span style={{ color: '#ce9178' }}>"© {currentYear} All rights reserved."</span>
            </p>
          </div>

          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/RohitTripathi1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors transform hover:scale-110"
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
              className="text-2xl transition-colors transform hover:scale-110"
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
              className="text-2xl transition-colors transform hover:scale-110"
              style={{ color: '#858585' }}
              onMouseEnter={(e) => e.target.style.color = '#FFA116'}
              onMouseLeave={(e) => e.target.style.color = '#858585'}
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="mailto:businessrohit70@gmail.com"
              className="text-2xl transition-colors transform hover:scale-110"
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
    </footer>
  )
}

export default Footer

