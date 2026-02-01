import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import ContactForm from '@/components/ContactForm'

expect.extend(toHaveNoViolations)

describe('ContactForm Accessibility', () => {
  it('should not have any automatically detectable accessibility issues', async () => {
    const { container } = render(<ContactForm />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should have properly labeled form fields', () => {
    const { getByLabelText } = render(<ContactForm />)
    
    expect(getByLabelText(/שם מלא/i)).toBeInTheDocument()
    expect(getByLabelText(/דוא״ל/i)).toBeInTheDocument()
    expect(getByLabelText(/טלפון/i)).toBeInTheDocument()
    expect(getByLabelText(/הודעה/i)).toBeInTheDocument()
  })

  it('should have proper form field associations', () => {
    const { getByLabelText } = render(<ContactForm />)
    
    const nameInput = getByLabelText(/שם מלא/i)
    const emailInput = getByLabelText(/דוא״ל/i)
    
    expect(nameInput).toHaveAttribute('id', 'name')
    expect(emailInput).toHaveAttribute('id', 'email')
  })

  it('should have accessible submit button', () => {
    const { getByRole } = render(<ContactForm />)
    const submitButton = getByRole('button', { name: /שלח הודעה/i })
    
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('should mark required fields appropriately', () => {
    const { container } = render(<ContactForm />)
    
    // Check for required indicators
    const requiredMarkers = container.querySelectorAll('.text-red-600')
    expect(requiredMarkers.length).toBeGreaterThan(0)
  })
})
