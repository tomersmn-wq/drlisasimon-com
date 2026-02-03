/**
 * Contact information configuration
 * Values are loaded from environment variables with fallbacks
 */

export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'dr.lisa@example.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '050-123-4567',
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || 'רחוב הרצל 123, תל אביב',
  hours: process.env.NEXT_PUBLIC_CONTACT_HOURS || 'ימים א׳-ה׳, 9:00-19:00',
} as const
