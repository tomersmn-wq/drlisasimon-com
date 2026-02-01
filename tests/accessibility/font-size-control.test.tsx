import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import FontSizeControl from '@/components/FontSizeControl'
import { AccessibilityProvider } from '@/context/AccessibilityContext'

expect.extend(toHaveNoViolations)

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock as any

describe('FontSizeControl Accessibility', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should not have any automatically detectable accessibility issues', async () => {
    const { container } = render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should have proper toolbar role and label', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const toolbar = screen.getByRole('toolbar', { name: /בקרת גודל טקסט/i })
    expect(toolbar).toBeInTheDocument()
  })

  it('should have accessible buttons with proper ARIA attributes', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
    
    buttons.forEach(button => {
      expect(button).toHaveAttribute('aria-label')
      expect(button).toHaveAttribute('aria-pressed')
    })
  })

  it('should have minimum touch target size', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const buttons = screen.getAllByRole('button')
    
    buttons.forEach(button => {
      // Should have min-w-[44px] and min-h-[44px] classes for accessibility
      expect(button.className).toMatch(/min-w-\[44px\]/)
      expect(button.className).toMatch(/min-h-\[44px\]/)
    })
  })

  it('should update aria-pressed when button is clicked', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const mediumButton = screen.getByRole('button', { name: /גודל טקסט בינוני/i })
    const defaultButton = screen.getByRole('button', { name: /גודל טקסט רגיל/i })
    
    // Default should be pressed initially
    expect(defaultButton).toHaveAttribute('aria-pressed', 'true')
    expect(mediumButton).toHaveAttribute('aria-pressed', 'false')
    
    // Click medium button
    fireEvent.click(mediumButton)
    
    // Medium should now be pressed
    expect(mediumButton).toHaveAttribute('aria-pressed', 'true')
    expect(defaultButton).toHaveAttribute('aria-pressed', 'false')
  })
})
