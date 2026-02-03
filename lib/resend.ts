import { Resend } from 'resend'

/**
 * Resend client instance
 * Lazily initialized to avoid build-time errors
 * 
 * @see https://resend.com/docs
 */
let resendInstance: Resend | null = null

/**
 * Get or create the Resend client instance
 * @throws Error if RESEND_API_KEY is not defined
 */
export function getResendClient(): Resend {
  if (!resendInstance) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error(
        'RESEND_API_KEY is not defined. Please add it to your .env.local file.'
      )
    }
    resendInstance = new Resend(process.env.RESEND_API_KEY)
  }
  return resendInstance
}

/**
 * Configuration for contact form emails
 */
export const EMAIL_CONFIG = {
  from: process.env.EMAIL_FROM || 'Contact Form <onboarding@resend.dev>',
  subject: 'הודעה חדשה מטופס יצירת קשר - אתר ד״ר ליסה',
} as const

/**
 * Get the destination email address from environment
 * @throws Error if CONTACT_EMAIL_TO is not defined
 */
export function getContactEmailTo(): string {
  const emailTo = process.env.CONTACT_EMAIL_TO
  if (!emailTo) {
    throw new Error(
      'CONTACT_EMAIL_TO is not defined. Please add it to your .env.local file.'
    )
  }
  return emailTo
}

/**
 * Validates email configuration
 * @throws Error if configuration is invalid
 */
export function validateEmailConfig() {
  if (!process.env.CONTACT_EMAIL_TO) {
    throw new Error(
      'CONTACT_EMAIL_TO is not defined. Please add it to your .env.local file.'
    )
  }

  if (!process.env.RESEND_API_KEY) {
    throw new Error(
      'RESEND_API_KEY is not defined. Please add it to your .env.local file.'
    )
  }
}
