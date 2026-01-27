import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Default to dark mode
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  const themeColors = {
    dark: {
      // VS Code Dark+ Theme
      background: '#1e1e1e',
      editorBg: '#252526',
      border: '#3e3e42',
      text: '#d4d4d4',
      textSecondary: '#858585',
      keyword: '#569cd6',
      function: '#dcdcaa',
      string: '#ce9178',
      variable: '#9cdcfe',
      comment: '#6a9955',
      number: '#b5cea8',
      buttonBg: '#0e639c',
      buttonHover: '#1177bb',
      cardBg: '#252526',
      accent: '#264f78',
    },
    light: {
      // VS Code Light+ Theme
      background: '#ffffff',
      editorBg: '#f8f8f8',
      border: '#e8e8e8',
      text: '#333333',
      textSecondary: '#666666',
      keyword: '#0000ff',
      function: '#795e26',
      string: '#a31515',
      variable: '#001080',
      comment: '#008000',
      number: '#098658',
      buttonBg: '#007acc',
      buttonHover: '#005a9e',
      cardBg: '#f8f8f8',
      accent: '#cce8ff',
    },
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: themeColors[theme] }}>
      {children}
    </ThemeContext.Provider>
  )
}


