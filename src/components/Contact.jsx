import React, { useState, useRef } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' })

  // EmailJS Configuration
  // Replace these with your EmailJS credentials from https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_i6dkuma'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_vsn03or'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'gYr2T5nMjTHYGNmiH'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        })
        setFormData({ name: '', email: '', message: '' })
        // Clear status after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' })
        }, 5000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly at businessrohit70@gmail.com',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'businessrohit70@gmail.com',
      link: 'mailto:businessrohit70@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '9264936379',
      link: '',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Noida, India',
      link: null,
    },
  ]

  return (
    <section id="contact" className="section-container relative overflow-hidden" style={{ background: '#1e1e1e' }}>
      <h2 className="section-title">Get In Touch</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 w-1 h-full" style={{ background: '#569cd6' }}></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 break-words" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
                <span style={{ color: '#569cd6' }}>public class</span> <span style={{ color: '#dcdcaa' }}>Contact</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
              </h3>
            </div>
            <p className="mb-8 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontWeight: 400, color: '#d4d4d4', fontFamily: "'JetBrains Mono', monospace" }}>
              <span style={{ color: '#6a9955' }}>// </span>
              <span style={{ color: '#ce9178' }}>"Always open to discussing opportunities"</span><span style={{ color: '#d4d4d4' }}>;</span><br />
              <span style={{ color: '#6a9955' }}>// </span>
              <span style={{ color: '#ce9178' }}>"Feel free to reach out!"</span><span style={{ color: '#d4d4d4' }}>;</span>
            </p>

            <div className="space-y-6 mb-8" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-xl sm:text-2xl flex-shrink-0" style={{ background: '#264f78', border: '1px solid #3e3e42', color: '#569cd6' }}>
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm" style={{ color: '#858585' }}>
                      <span style={{ color: '#569cd6' }}>private</span> <span style={{ color: '#9cdcfe' }}>String</span> <span style={{ color: '#dcdcaa' }}>{info.label.toLowerCase()}</span><span style={{ color: '#d4d4d4' }}>;</span>
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-semibold transition-colors text-sm sm:text-base break-words"
                        style={{ color: '#9cdcfe' }}
                        onMouseEnter={(e) => e.target.style.color = '#569cd6'}
                        onMouseLeave={(e) => e.target.style.color = '#9cdcfe'}
                      >
                        <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{info.value}"</span><span style={{ color: '#d4d4d4' }}>;</span>
                      </a>
                    ) : (
                      <div className="font-semibold text-sm sm:text-base break-words" style={{ color: '#9cdcfe' }}>
                        <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>"{info.value}"</span><span style={{ color: '#d4d4d4' }}>;</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/rohit-tripathi-3a048a21b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center text-xl sm:text-2xl text-blue-400 hover:bg-blue-500/30 hover:border-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/RohitTripathi1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center text-xl sm:text-2xl text-blue-400 hover:bg-blue-500/30 hover:border-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/rohit_3001/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center text-xl sm:text-2xl hover:bg-blue-500/30 hover:border-blue-400 transition-colors"
                style={{ color: '#FFA116' }}
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
              <a
                href="mailto:businessrohit70@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center text-xl sm:text-2xl text-blue-400 hover:bg-blue-500/30 hover:border-blue-400 transition-colors"
                aria-label="Email"
              >
                <HiMail />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#252526', backdropFilter: 'blur(8px)', border: '1px solid #3e3e42', borderRadius: '0.5rem', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)' }}>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 w-1 h-full" style={{ background: '#569cd6' }}></div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 break-words" style={{ color: '#dcdcaa', fontFamily: "'JetBrains Mono', monospace" }}>
                <span style={{ color: '#569cd6' }}>public void</span> <span style={{ color: '#dcdcaa' }}>sendMessage</span><span style={{ color: '#d4d4d4' }}>()</span> <span style={{ color: '#d4d4d4' }}>{'{'}</span>
              </h3>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#d4d4d4' }}>
                  <span style={{ color: '#569cd6' }}>String</span> <span style={{ color: '#dcdcaa' }}>name</span><span style={{ color: '#d4d4d4' }}>;</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-all text-sm sm:text-base"
                  style={{ background: '#2d2d30', border: '1px solid #3e3e42', color: '#d4d4d4' }}
                  placeholder="name = &quot;Your Name&quot;;"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#569cd6'
                    e.target.style.outline = 'none'
                    e.target.style.boxShadow = '0 0 0 2px rgba(86, 156, 214, 0.2)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#3e3e42'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#d4d4d4' }}>
                  <span style={{ color: '#569cd6' }}>String</span> <span style={{ color: '#dcdcaa' }}>email</span><span style={{ color: '#d4d4d4' }}>;</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-all text-sm sm:text-base"
                  style={{ background: '#2d2d30', border: '1px solid #3e3e42', color: '#d4d4d4' }}
                  placeholder="email = &quot;your.email@example.com&quot;;"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#569cd6'
                    e.target.style.outline = 'none'
                    e.target.style.boxShadow = '0 0 0 2px rgba(86, 156, 214, 0.2)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#3e3e42'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#d4d4d4' }}>
                  <span style={{ color: '#569cd6' }}>String</span> <span style={{ color: '#dcdcaa' }}>message</span><span style={{ color: '#d4d4d4' }}>;</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-all resize-none text-sm sm:text-base"
                  style={{ background: '#2d2d30', border: '1px solid #3e3e42', color: '#d4d4d4' }}
                  placeholder="message = &quot;Your message here...&quot;;"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#569cd6'
                    e.target.style.outline = 'none'
                    e.target.style.boxShadow = '0 0 0 2px rgba(86, 156, 214, 0.2)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#3e3e42'
                    e.target.style.boxShadow = 'none'
                  }}
                ></textarea>
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg border ${submitStatus.type === 'success'
                    ? 'bg-green-900/20 border-green-500/30'
                    : 'bg-red-900/20 border-red-500/30'
                    }`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <p
                    style={{
                      color: submitStatus.type === 'success' ? '#4ec9b0' : '#f48771',
                      fontSize: '0.9rem',
                    }}
                  >
                    <span style={{ color: '#6a9955' }}>// </span>
                    <span style={{ color: submitStatus.type === 'success' ? '#4ec9b0' : '#f48771' }}>
                      {submitStatus.message}
                    </span>
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-3d-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {isLoading ? (
                  <span>
                    <span style={{ color: '#569cd6' }}>contact</span>
                    <span style={{ color: '#d4d4d4' }}>.</span>
                    <span style={{ color: '#dcdcaa' }}>sending</span>
                    <span style={{ color: '#d4d4d4' }}>();</span>
                    <span style={{ color: '#6a9955', marginLeft: '8px' }}>// Sending...</span>
                  </span>
                ) : (
                  <span>
                    <span style={{ color: '#569cd6' }}>contact</span>
                    <span style={{ color: '#d4d4d4' }}>.</span>
                    <span style={{ color: '#dcdcaa' }}>send</span>
                    <span style={{ color: '#d4d4d4' }}>();</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

