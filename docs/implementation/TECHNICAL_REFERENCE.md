# Technical Reference - Email Feature

## Architecture

```
User fills form → POST /api/contact → Supabase save → Email send → Response
                                           ↓               ↓
                                    [Always succeeds]  [Log on fail]
```

## Code Flow

### 1. API Route (`app/api/contact/route.ts`)

```typescript
POST /api/contact
├─ Validate input (Zod schema)
├─ Save to Supabase
├─ Try send email (non-blocking)
│  ├─ Validate env vars
│  ├─ Get Resend client
│  ├─ Render React Email template
│  └─ Send via Resend API
└─ Return success (regardless of email status)
```

### 2. Email Client (`lib/resend.ts`)

**Lazy initialization** - Client created on first use, not at module load:

```typescript
let resendInstance: Resend | null = null

export function getResendClient(): Resend {
  if (!resendInstance) {
    resendInstance = new Resend(process.env.RESEND_API_KEY)
  }
  return resendInstance
}
```

**Why**: Prevents build-time errors when env vars unavailable.

### 3. Email Template (`lib/emails/ContactFormEmail.tsx`)

React component using `@react-email/components`:
- Inline styles (email client compatibility)
- RTL-aware Hebrew text
- Responsive layout
- Clickable email/phone links

## Dependencies

```json
{
  "resend": "^6.9.1",              // Email API client
  "@react-email/components": "^1.0.6",  // Email UI components
  "@react-email/render": "^2.0.4"       // Server-side rendering
}
```

## Environment Variables

```bash
RESEND_API_KEY=re_xxx    # From resend.com dashboard
CONTACT_EMAIL_TO=xxx     # Destination email address
```

**Local**: `.env.local`  
**Production**: Vercel environment variables

## Error Handling

Email failures are **non-blocking**:

```typescript
try {
  await resend.emails.send(...)
  console.log('Email sent')
} catch (emailError) {
  console.error('Email failed:', emailError)
  // Form submission still succeeds
}
```

Data integrity > Email delivery

## Email Content

Subject: `הודעה חדשה מטופס יצירת קשר - אתר ד״ר ליסה`

Fields:
- Name (required)
- Email (required, clickable mailto:)
- Phone (optional, clickable tel:)
- Message (required, pre-wrapped)
- Timestamp (auto-generated)

## Rate Limits

Resend free tier: 100 emails/day  
Upgrade for higher limits.

## Debugging

**Local**:
```bash
npm run dev
# Check terminal logs for email send status
```

**Production**:
- Resend dashboard: https://resend.com/emails
- Vercel logs: `vercel logs https://drlisasimon.com`

## Common Issues

1. **"RESEND_API_KEY is not defined"**  
   → Add to `.env.local` or Vercel env vars

2. **Email not received**  
   → Check Resend dashboard for delivery status  
   → Verify CONTACT_EMAIL_TO is correct

3. **Build error "supabaseUrl is required"**  
   → Pre-existing issue, unrelated to email feature  
   → TypeScript compiles successfully

## Security

- API keys in env vars (not committed)
- Email validation via Zod schema
- Rate limiting via Resend API
- No sensitive data in email (already submitted by user)
