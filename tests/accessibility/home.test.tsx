import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import HomeSection from '@/sections/HomeSection'
import AboutSection from '@/sections/AboutSection'
import TherapySection from '@/sections/TherapySection'

expect.extend(toHaveNoViolations)

describe('Home Page Sections Accessibility', () => {
  describe('HomeSection', () => {
    it('should not have any automatically detectable accessibility issues', async () => {
      const { container } = render(<HomeSection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper heading structure', () => {
      const { getByRole } = render(<HomeSection />)
      const heading = getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent(/ד״ר ליסה סיימון/i)
    })

    it('should have section with proper ARIA label', () => {
      const { container } = render(<HomeSection />)
      const section = container.querySelector('section')
      expect(section).toHaveAttribute('aria-labelledby', 'home-heading')
    })
  })

  describe('AboutSection', () => {
    it('should not have any automatically detectable accessibility issues', async () => {
      const { container } = render(<AboutSection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper heading hierarchy', () => {
      const { getByRole, getAllByRole } = render(<AboutSection />)
      
      // Should have main h2 heading
      const h2Heading = getByRole('heading', { level: 2, name: /אודות/i })
      expect(h2Heading).toBeInTheDocument()
      
      // Should have h3 subheadings
      const h3Headings = getAllByRole('heading', { level: 3 })
      expect(h3Headings.length).toBeGreaterThan(0)
    })
  })

  describe('TherapySection', () => {
    it('should not have any automatically detectable accessibility issues', async () => {
      const { container } = render(<TherapySection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have accessible lists', () => {
      const { getAllByRole } = render(<TherapySection />)
      const lists = getAllByRole('list')
      
      expect(lists.length).toBeGreaterThan(0)
      
      lists.forEach(list => {
        const listItems = list.querySelectorAll('li')
        expect(listItems.length).toBeGreaterThan(0)
      })
    })
  })
})
