# Quick Reference - Email Feature

## URLs
- **Production**: https://drlisasimon.com
- **Resend Dashboard**: https://resend.com
- **Email Logs**: https://resend.com/emails

## Environment Variables
```bash
RESEND_API_KEY=re_xxx       # From resend.com/api-keys
CONTACT_EMAIL_TO=xxx        # Your email address
```

## Key Files
```
app/api/contact/route.ts             # API endpoint (modified)
lib/resend.ts                        # Email client (new)
lib/emails/ContactFormEmail.tsx      # Email template (new)
package.json                         # Added 3 dependencies
```

## Dependencies Added
```bash
npm install resend @react-email/components @react-email/render
```

## How It Works
1. User submits contact form
2. Data saved to Supabase ✅
3. Email sent via Resend (best effort)
4. User sees success message

## Email Template
- **Subject**: הודעה חדשה מטופס יצירת קשר - אתר ד״ר ליסה
- **From**: Contact Form <onboarding@resend.dev>
- **To**: Value of `CONTACT_EMAIL_TO`
- **Content**: Name, email, phone, message, timestamp

## Testing
```bash
# Local
npm run dev
# Submit form at http://localhost:3000
# Check terminal for "Email sent successfully"

# Production
# Submit form at https://drlisasimon.com
# Check Resend dashboard for delivery status
```

## Troubleshooting
| Issue | Solution |
|-------|----------|
| Email not sent | Check Resend dashboard logs |
| "API key not defined" | Add to `.env.local` or Vercel |
| Form fails | Check Supabase credentials |

## Deployment
```bash
vercel --prod
```

## Documentation
- [EMAIL_SETUP.md](EMAIL_SETUP.md) - Setup guide
- [TECHNICAL_REFERENCE.md](TECHNICAL_REFERENCE.md) - Deep dive
- [DEPLOYMENT_SUMMARY.md](DEPLOYMENT_SUMMARY.md) - Deployment details
- [CHANGELOG.md](CHANGELOG.md) - All changes
