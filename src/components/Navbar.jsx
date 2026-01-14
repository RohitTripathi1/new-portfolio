import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme, colors } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? colors.editorBg : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? (theme === 'dark' ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)') : 'none',
        borderBottom: isScrolled ? `1px solid ${colors.border}` : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl font-bold transition-colors"
              style={{ color: colors.keyword }}
              onMouseEnter={(e) => e.target.style.color = colors.variable}
              onMouseLeave={(e) => e.target.style.color = colors.keyword}
            >
              {'<RT />'}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{ 
                    color: colors.text,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = colors.keyword
                    e.target.style.background = theme === 'dark' ? 'rgba(86, 156, 214, 0.1)' : 'rgba(0, 0, 255, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = colors.text
                    e.target.style.background = 'transparent'
                  }}
                >
                  {link.name}
                </a>
              ))}
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{ 
                  color: colors.text,
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = colors.keyword
                  e.target.style.background = theme === 'dark' ? 'rgba(86, 156, 214, 0.1)' : 'rgba(0, 0, 255, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = colors.text
                  e.target.style.background = 'transparent'
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md transition-colors"
              style={{ color: colors.text }}
              onMouseEnter={(e) => e.target.style.background = theme === 'dark' ? 'rgba(86, 156, 214, 0.1)' : 'rgba(0, 0, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md transition-colors"
              style={{ color: colors.text }}
              onMouseEnter={(e) => e.target.style.background = theme === 'dark' ? 'rgba(86, 156, 214, 0.1)' : 'rgba(0, 0, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{ background: colors.editorBg, backdropFilter: 'blur(10px)', boxShadow: theme === 'dark' ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderBottom: `1px solid ${colors.border}` }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors"
                style={{ color: colors.text }}
                onMouseEnter={(e) => {
                  e.target.style.background = theme === 'dark' ? 'rgba(86, 156, 214, 0.1)' : 'rgba(0, 0, 255, 0.1)'
                  e.target.style.color = colors.keyword
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = colors.text
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

