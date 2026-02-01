import React from 'react'

interface ScrollSectionProps {
  id: string
  children: React.ReactNode
  className?: string
}

export default function ScrollSection({ id, children, className = '' }: ScrollSectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen py-20 px-6 md:px-12 lg:px-24 scroll-mt-20 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
