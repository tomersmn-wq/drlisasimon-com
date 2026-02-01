# Email Configuration Setup

This document provides instructions for setting up email notifications for the contact form.

## Required Environment Variables

Add the following variables to your `.env.local` file:

```bash
# Email Configuration (Resend)
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Email address where contact form submissions should be sent
CONTACT_EMAIL_TO=your-email@example.com
```

## Getting a Resend API Key

1. Visit [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day included)
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and add it to your `.env.local` file

## Domain Verification (Optional but Recommended)

For production use, verify your domain in Resend:

1. Go to Resend Dashboard → Domains
2. Add your domain
3. Add the provided DNS records to your domain
4. Wait for verification (usually takes a few minutes)

Once verified, you can send emails from your custom domain (e.g., noreply@yourdomain.com).

## Testing

For testing purposes, you can use Resend's default "from" address (onboarding@resend.dev) which requires no domain verification.

## Important Notes

- The `RESEND_API_KEY` must start with `re_`
- Make sure `.env.local` is in your `.gitignore` to keep credentials secure
- Email failures will be logged but won't block form submissions
- Contact form data is still saved to Supabase even if email fails
