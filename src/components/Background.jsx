import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Background = () => {
  const { theme, colors } = useTheme()
  // Generate random code-like characters
  const codeChars = ['<', '/', '>', '{', '}', '(', ')', ';', '=', 'const', 'let', 'function', 'return', '=>', '{}', '[]']
  
  // Get color values for grid and particles
  const gridColor = theme === 'dark' ? 'rgba(86, 156, 214, 0.1)' : 'rgba(0, 0, 255, 0.05)'
  const particleColor = theme === 'dark' ? 'rgba(86, 156, 214, 0.05)' : 'rgba(0, 0, 255, 0.03)'
  const borderColor = theme === 'dark' ? '#424242' : '#d0d0d0'
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* VS Code theme base with subtle grid */}
      <div className="absolute inset-0" style={{ background: colors.background, transition: 'background 0.3s ease' }}>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(${gridColor} 1px, transparent 1px),
              linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transition: 'background-image 0.3s ease'
          }}
        />
      </div>

      {/* Floating 3D geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating cube */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-3">
          <div className="relative w-full h-full animate-float-3d">
            <div className="absolute inset-0 border transform rotate-45" style={{ borderColor: borderColor, transform: 'rotateX(45deg) rotateY(45deg)', transition: 'border-color 0.3s ease' }}></div>
            <div className=" inset-0 border transform -rotate-45" style={{ borderColor: borderColor, transform: 'rotateX(-45deg) rotateY(-45deg)', transition: 'border-color 0.3s ease' }}></div>
          </div>
        </div>

        {/* Medium floating shapes */}
        <div className="absolute top-1/3 left-10 w-20 h-20 opacity-3">
          <div className="relative w-full h-full animate-float-3d-delay">
            <div className="absolute inset-0 border rounded-lg transform rotate-12" style={{ borderColor: borderColor, transition: 'border-color 0.3s ease' }}></div>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-3">
          <div className="relative w-full h-full animate-float-3d-delay-2">
            <div className="absolute inset-0 border transform rotate-45" style={{ borderColor: borderColor, transition: 'border-color 0.3s ease' }}></div>
          </div>
        </div>

        {/* Small floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-10 animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              background: colors.keyword,
              transition: 'background 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Animated code-like text in background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs md:text-sm animate-code-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              color: particleColor,
              fontFamily: "'JetBrains Mono', monospace",
              transition: 'color 0.3s ease'
            }}
          >
            {codeChars[Math.floor(Math.random() * codeChars.length)]}
          </div>
        ))}
      </div>

      {/* Overlay for consistency */}
      <div className="absolute top-0 left-0 w-full h-full" style={{ background: theme === 'dark' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.05)', transition: 'background 0.3s ease' }}></div>
    </div>
  )
}

export default Background

