import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Navigation from '@/components/Navigation'

expect.extend(toHaveNoViolations)

describe('Navigation Accessibility', () => {
  it('should not have any automatically detectable accessibility issues', async () => {
    const { container } = render(<Navigation />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should have proper ARIA labels', () => {
    const { getByRole } = render(<Navigation />)
    const nav = getByRole('navigation', { name: /ניווט ראשי/i })
    expect(nav).toBeInTheDocument()
  })

  it('should have accessible navigation links', () => {
    const { getAllByRole } = render(<Navigation />)
    const links = getAllByRole('link')
    
    links.forEach(link => {
      // Each link should have accessible text
      expect(link).toHaveAccessibleName()
    })
  })

  it('should have mobile menu toggle with proper ARIA attributes', () => {
    const { getByRole } = render(<Navigation />)
    const menuButton = getByRole('button', { name: /תפריט/i })
    
    expect(menuButton).toHaveAttribute('aria-expanded')
    expect(menuButton).toHaveAttribute('aria-controls')
  })
})
