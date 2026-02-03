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

  it('should render accessibility button', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const button = screen.getByRole('button', { name: /פתח תפריט נגישות/i })
    expect(button).toBeInTheDocument()
  })

  it('should have proper ARIA attributes on button', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const button = screen.getByRole('button', { name: /פתח תפריט נגישות/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-haspopup', 'menu')
  })

  it('should open popup menu when button is clicked', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const button = screen.getByRole('button', { name: /פתח תפריט נגישות/i })
    
    // Menu should not be visible initially
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    
    // Click button to open
    fireEvent.click(button)
    
    // Menu should now be visible
    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('should close popup menu when button is clicked again', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const button = screen.getByRole('button', { name: /פתח תפריט נגישות/i })
    
    // Open menu
    fireEvent.click(button)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    
    // Close menu
    fireEvent.click(button)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('should have accessible menu items with proper roles', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const button = screen.getByRole('button', { name: /פתח תפריט נגישות/i })
    fireEvent.click(button)
    
    const menuItems = screen.getAllByRole('menuitem')
    expect(menuItems).toHaveLength(3)
    
    menuItems.forEach(item => {
      expect(item).toHaveAttribute('aria-label')
    })
  })

  it('should change font size when menu item is clicked', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    // Open menu
    const button = screen.getByRole('button', { name: /פתח תפריט נגישות/i })
    fireEvent.click(button)
    
    // Click medium size option
    const mediumButton = screen.getByRole('menuitem', { name: /גודל טקסט בינוני/i })
    fireEvent.click(mediumButton)
    
    // Menu should close after selection
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('should close menu on Escape key', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    // Open menu
    const button = screen.getByRole('button', { name: /פתח תפריט נגישות/i })
    fireEvent.click(button)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    
    // Press Escape
    fireEvent.keyDown(document, { key: 'Escape' })
    
    // Menu should close
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('should have minimum touch target size for button', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const button = screen.getByRole('button', { name: /פתח תפריט נגישות/i })
    
    // Button should have w-14 h-14 (56px × 56px, exceeds 44px minimum)
    expect(button.className).toMatch(/w-14/)
    expect(button.className).toMatch(/h-14/)
  })

  it('should have minimum touch target size for menu items', () => {
    render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    const button = screen.getByRole('button', { name: /פתח תפריט נגישות/i })
    fireEvent.click(button)
    
    const menuItems = screen.getAllByRole('menuitem')
    
    menuItems.forEach(item => {
      // Should have min-h-[44px] class for accessibility
      expect(item.className).toMatch(/min-h-\[44px\]/)
    })
  })

  it('should close menu when clicking outside', () => {
    const { container } = render(
      <AccessibilityProvider>
        <FontSizeControl />
      </AccessibilityProvider>
    )
    
    // Open menu
    const button = screen.getByRole('button', { name: /פתח תפריט נגישות/i })
    fireEvent.click(button)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    
    // Click outside the component
    fireEvent.mouseDown(document.body)
    
    // Menu should close
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })
})
