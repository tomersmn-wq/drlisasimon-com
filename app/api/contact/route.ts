import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { contactFormSchema } from '@/lib/contactSchema'
import { getResendClient, getContactEmailTo, EMAIL_CONFIG, validateEmailConfig } from '@/lib/resend'
import ContactFormEmail from '@/lib/emails/ContactFormEmail'
import { logger } from '@/lib/logger'

// Force this route to be dynamic (not evaluated at build time)
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = contactFormSchema.parse(body)
    
    // Insert into Supabase using admin client (bypasses RLS)
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([validatedData])
      .select()
    
    if (error) {
      logger.error('Supabase error', error, { data: validatedData })
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      )
    }
    
    // Send email notification
    // Note: Email failure won't block the form submission since data is already saved
    try {
      // Validate email configuration before sending
      validateEmailConfig()
      
      // Get Resend client and email configuration
      const resend = getResendClient()
      const emailTo = getContactEmailTo()
      
      const submittedAt = data[0]?.created_at || new Date().toISOString()
      
      // Send email using Resend
      const emailResult = await resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: emailTo,
        subject: EMAIL_CONFIG.subject,
        react: ContactFormEmail({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          message: validatedData.message,
          submittedAt,
        }),
      })
      
      if (emailResult.error) {
        // Log email error but don't fail the request
        logger.error('Email sending failed', emailResult.error)
      } else {
        logger.info('Email sent successfully', { emailId: emailResult.data?.id })
      }
    } catch (emailError) {
      // Log email error but don't fail the request
      // The form data is already saved in Supabase
      logger.error('Email notification error', emailError)
    }
    
    return NextResponse.json(
      { message: 'Success', data },
      { status: 201 }
    )
  } catch (error) {
    logger.error('API error', error)
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
