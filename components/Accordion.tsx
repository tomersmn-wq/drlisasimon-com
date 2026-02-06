'use client'

import { useState, useRef, useEffect } from 'react'

interface AccordionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  id?: string
}

export default function Accordion({ title, children, defaultOpen = false, id }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [contentHeight, setContentHeight] = useState<number | string>(defaultOpen ? 'auto' : 0)
  const contentRef = useRef<HTMLDivElement>(null)
  const accordionId = id || `accordion-${Math.random().toString(36).substring(2, 11)}`
  const contentId = `${accordionId}-content`
  const buttonId = `${accordionId}-button`

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setContentHeight(contentRef.current.scrollHeight)
      } else {
        setContentHeight(0)
      }
    }
  }, [isOpen, children])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle()
    }
  }

  return (
    <div className="w-full">
      <button
        id={buttonId}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-center justify-between p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-right focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 min-h-[44px]"
      >
        <span className="text-xl md:text-2xl font-semibold text-text-dark">{title}</span>
        <svg
          className={`w-6 h-6 text-accent transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={contentId}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: typeof contentHeight === 'number' ? `${contentHeight}px` : contentHeight,
        }}
        aria-labelledby={buttonId}
      >
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mt-2">
          {children}
        </div>
      </div>
    </div>
  )
}
