import React, { useEffect, useState, useRef } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only show cursor on desktop (not touch devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let ringX = 0
    let ringY = 0
    let animationId = null

    const updateCursorPosition = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setPosition({ x: mouseX, y: mouseY })
    }

    const animateCursor = () => {
      // Smooth cursor dot (faster)
      if (cursorRef.current) {
        cursorX += (mouseX - cursorX) * 0.15
        cursorY += (mouseY - cursorY) * 0.15
        cursorRef.current.style.left = `${cursorX}px`
        cursorRef.current.style.top = `${cursorY}px`
      }

      // Smooth ring (slower, creates trailing effect)
      if (ringRef.current) {
        ringX += (mouseX - ringX) * 0.08
        ringY += (mouseY - ringY) * 0.08
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }

      animationId = requestAnimationFrame(animateCursor)
    }

    animateCursor()

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Check if element is interactive
    const checkInteractive = (e) => {
      try {
        const target = e.target
        const isInteractive = 
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('.card') ||
          target.closest('.btn-3d-primary') ||
          target.closest('.btn-3d-secondary') ||
          target.closest('.btn-3d-accent') ||
          target.closest('input') ||
          target.closest('textarea')
        
        setIsHovering(isInteractive)
      } catch (error) {
        // Silently handle any errors
        setIsHovering(false)
      }
    }

    const handleMouseMove = (e) => {
      updateCursorPosition(e)
      checkInteractive(e)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Hide cursor when leaving window
    const handleMouseLeaveWindow = () => setIsVisible(false)
    const handleMouseEnterWindow = () => setIsVisible(true)

    document.addEventListener('mouseleave', handleMouseLeaveWindow)
    document.addEventListener('mouseenter', handleMouseEnterWindow)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeaveWindow)
      document.removeEventListener('mouseenter', handleMouseEnterWindow)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s ease-out',
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ${
            isClicking ? 'w-3 h-3' : isHovering ? 'w-2.5 h-2.5' : 'w-2 h-2'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)'
              : '0 0 5px rgba(255, 255, 255, 0.5)'
          }}
        />
      </div>

      {/* Outer ring cursor */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHovering
              ? 'w-12 h-12 border-blue-400/80 bg-blue-500/10 border-2'
              : isClicking
              ? 'w-10 h-10 border-blue-400/60 border-2'
              : 'w-8 h-8 border-blue-500/30 border'
          }`}
          style={{
            boxShadow: isHovering
              ? '0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.1)'
              : '0 0 10px rgba(59, 130, 246, 0.2)'
          }}
        />
      </div>
    </>
  )
}

export default CustomCursor

