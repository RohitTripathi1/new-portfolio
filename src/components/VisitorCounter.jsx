import React, { useState, useEffect } from 'react'
import { FaEye } from 'react-icons/fa'

const VisitorCounter = () => {
    const [views, setViews] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Using CountAPI - a free, simple visitor counter service
        // You can also use alternatives like: hits.sh, visitor-badge.glitch.me, etc.
        const fetchViewCount = async () => {
            try {
                // Replace 'your-portfolio' with a unique namespace for your site
                // This creates a unique counter for your portfolio
                const namespace = 'rohit-tripathi-portfolio'
                const key = 'visits'

                // This API call increments the counter and returns the new count
                const response = await fetch(
                    `https://api.countapi.xyz/hit/${namespace}/${key}`
                )
                const data = await response.json()

                if (data.value) {
                    setViews(data.value)
                }
            } catch (error) {
                console.error('Error fetching view count:', error)
                // Fallback to localStorage for offline counting
                const localCount = localStorage.getItem('portfolio-views') || 0
                const newCount = parseInt(localCount) + 1
                localStorage.setItem('portfolio-views', newCount)
                setViews(newCount)
            } finally {
                setLoading(false)
            }
        }

        fetchViewCount()
    }, [])

    // Format number with commas
    const formatNumber = (num) => {
        if (!num) return '0'
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return (
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg transition-all hover:scale-105"
            style={{
                background: '#264f78',
                border: '1px solid #3e3e42',
                fontFamily: "'JetBrains Mono', monospace"
            }}>
            <FaEye className="text-base sm:text-lg" style={{ color: '#569cd6' }} />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-xs sm:text-sm" style={{ color: '#858585' }}>
                    <span style={{ color: '#569cd6' }}>int</span> <span style={{ color: '#dcdcaa' }}>views</span> <span style={{ color: '#d4d4d4' }}>=</span>
                </span>
                <span className="text-sm sm:text-base font-semibold" style={{ color: '#b5cea8' }}>
                    {loading ? (
                        <span className="animate-pulse">...</span>
                    ) : (
                        <>
                            {formatNumber(views)}<span style={{ color: '#d4d4d4' }}>;</span>
                        </>
                    )}
                </span>
            </div>
        </div>
    )
}

export default VisitorCounter
