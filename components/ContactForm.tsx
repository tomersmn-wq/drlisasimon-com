'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/contactSchema'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Auto-hide success message after 5 seconds with proper cleanup
  useEffect(() => {
    if (success) {
      const timeoutId = setTimeout(() => {
        setSuccess(false)
      }, 5000)
      return () => clearTimeout(timeoutId)
    }
  }, [success])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) throw new Error('Submission failed')

      setSuccess(true)
      reset() // Clear form
    } catch (err) {
      console.error('Contact form submission error:', err)
      setError('אירעה שגיאה. אנא נסה שוב')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-accent mb-6">שלחו הודעה</h3>
      
      {success && (
        <div 
          className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-lg text-green-800 font-medium"
          role="alert"
          aria-live="polite"
        >
          ההודעה נשלחה בהצלחה! נחזור אליך בהקדם
        </div>
      )}

      {error && (
        <div 
          className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg text-red-800 font-medium"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="block text-foreground font-medium mb-2 text-base">
            שם מלא <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base min-h-[44px]"
            placeholder="שם מלא"
            disabled={isSubmitting}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600 font-medium" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-foreground font-medium mb-2 text-base">
            דוא״ל <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base min-h-[44px]"
            placeholder="your@email.com"
            disabled={isSubmitting}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600 font-medium" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-foreground font-medium mb-2 text-base">
            טלפון (אופציונלי)
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base min-h-[44px]"
            placeholder="050-123-4567"
            disabled={isSubmitting}
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-red-600 font-medium" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-foreground font-medium mb-2 text-base">
            הודעה <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={5}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none text-base"
            placeholder="כתבו כאן את הודעתכם..."
            disabled={isSubmitting}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-600 font-medium" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-white py-3 px-4 rounded-lg font-medium hover:bg-accent/90 focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] text-base"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'שולח...' : 'שלח הודעה'}
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4 text-center leading-relaxed">
        הפרטים שלכם נשמרים בצורה מאובטחת ולא יועברו לצד שלישי
      </p>
    </div>
  )
}
