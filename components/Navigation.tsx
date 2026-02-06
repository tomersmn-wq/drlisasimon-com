'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { id: 'home', label: 'בית', href: '#home' },
  { id: 'about', label: 'אודות', href: '#about' },
  { id: 'therapy', label: 'טיפול', href: '#therapy' },
  { id: 'how-to-start', label: 'איך מתחילים', href: '#how-to-start' },
  { id: 'academic', label: 'מחקר', href: '#academic' },
  { id: 'lectures', label: 'הרצאות', href: '#lectures' },
  { id: 'contact', label: 'יצירת קשר', href: '#contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for background effect
      setIsScrolled(window.scrollY > 10)

      // Update active section
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string, id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-md' 
          : 'bg-background/80 backdrop-blur-sm'
      } border-b border-primary`}
      role="navigation"
      aria-label="ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center h-16 gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleClick(item.href, item.id)}
              className={`text-lg font-medium transition-all duration-300 hover:text-accent focus-visible:text-accent ${
                activeSection === item.id
                  ? 'text-accent border-b-2 border-accent pb-1'
                  : 'text-foreground'
              }`}
              aria-label={`עבור לסעיף ${item.label}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          <div className="text-xl font-semibold text-foreground">ד״ר ליסה סיימון</div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 text-foreground hover:text-accent transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleClick(item.href, item.id)}
                className={`block py-3 px-4 rounded-lg transition-all duration-200 min-h-[44px] flex items-center ${
                  activeSection === item.id
                    ? 'bg-accent/20 text-accent font-medium'
                    : 'text-foreground hover:bg-primary/50'
                }`}
                aria-label={`עבור לסעיף ${item.label}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
