'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type FontSize = 'default' | 'medium' | 'large'

interface AccessibilityContextType {
  fontSize: FontSize
  setFontSize: (size: FontSize) => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('default')
  const [isClient, setIsClient] = useState(false)

  // Load saved preference from localStorage on mount
  useEffect(() => {
    setIsClient(true)
    const savedFontSize = localStorage.getItem('fontSizePreference') as FontSize
    if (savedFontSize && ['default', 'medium', 'large'].includes(savedFontSize)) {
      setFontSizeState(savedFontSize)
      document.body.className = document.body.className.replace(/font-size-\w+/g, '')
      document.body.classList.add(`font-size-${savedFontSize}`)
    } else {
      document.body.classList.add('font-size-default')
    }
  }, [])

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size)
    localStorage.setItem('fontSizePreference', size)
    
    // Update body class
    document.body.className = document.body.className.replace(/font-size-\w+/g, '')
    document.body.classList.add(`font-size-${size}`)
  }

  if (!isClient) {
    // Return default values during SSR
    return (
      <AccessibilityContext.Provider value={{ fontSize: 'default', setFontSize: () => {} }}>
        {children}
      </AccessibilityContext.Provider>
    )
  }

  return (
    <AccessibilityContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}
