/**
 * Contact information configuration
 * Values are loaded from environment variables with fallbacks
 */

export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'lisazelen@gmail.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '054-5454872',
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || 'חיים וייסבורג 17, תל אביב',
  hours: process.env.NEXT_PUBLIC_CONTACT_HOURS || 'ימים א׳-ה׳, 9:00-19:00',
} as const
