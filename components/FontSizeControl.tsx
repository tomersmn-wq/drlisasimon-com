'use client'

import { useAccessibility } from '@/context/AccessibilityContext'
import { useState, useEffect, useRef } from 'react'

export default function FontSizeControl() {
  const { fontSize, setFontSize } = useAccessibility()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close popup on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectSize = (size: 'default' | 'medium' | 'large') => {
    setFontSize(size)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="fixed bottom-6 left-6 z-50">
      {/* Accessibility Button */}
      <button
        onClick={handleToggle}
        className="w-14 h-14 bg-white rounded-full shadow-lg border-2 border-primary hover:bg-primary/10 transition-all flex items-center justify-center"
        aria-label="פתח תפריט נגישות - שינוי גודל טקסט"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {/* Accessibility Icon (Universal Access Symbol) */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
          aria-hidden="true"
        >
          {/* Person icon with accessibility symbol style */}
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v5" />
          <path d="M12 12l-3 5" />
          <path d="M12 12l3 5" />
          <path d="M8 9h8" />
        </svg>
      </button>

      {/* Popup Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-label="תפריט גודל טקסט"
          className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-xl border-2 border-primary p-3 min-w-[180px]"
        >
          <div className="text-sm font-semibold text-text-dark mb-3 text-center">
            גודל טקסט
          </div>
          <div className="space-y-2">
            <button
              role="menuitem"
              onClick={() => handleSelectSize('default')}
              className={`w-full px-4 py-2 rounded-md text-right transition-all min-h-[44px] flex items-center gap-3 ${
                fontSize === 'default'
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-foreground hover:bg-gray-200'
              }`}
              aria-label="גודל טקסט רגיל"
            >
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                fontSize === 'default' ? 'border-white' : 'border-accent'
              }`}>
                {fontSize === 'default' && (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
              </span>
              <span className="text-sm">רגיל (א)</span>
            </button>
            <button
              role="menuitem"
              onClick={() => handleSelectSize('medium')}
              className={`w-full px-4 py-2 rounded-md text-right transition-all min-h-[44px] flex items-center gap-3 ${
                fontSize === 'medium'
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-foreground hover:bg-gray-200'
              }`}
              aria-label="גודל טקסט בינוני"
            >
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                fontSize === 'medium' ? 'border-white' : 'border-accent'
              }`}>
                {fontSize === 'medium' && (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
              </span>
              <span className="text-base">בינוני (א)</span>
            </button>
            <button
              role="menuitem"
              onClick={() => handleSelectSize('large')}
              className={`w-full px-4 py-2 rounded-md text-right transition-all min-h-[44px] flex items-center gap-3 ${
                fontSize === 'large'
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-foreground hover:bg-gray-200'
              }`}
              aria-label="גודל טקסט גדול"
            >
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                fontSize === 'large' ? 'border-white' : 'border-accent'
              }`}>
                {fontSize === 'large' && (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
              </span>
              <span className="text-lg">גדול (א)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
