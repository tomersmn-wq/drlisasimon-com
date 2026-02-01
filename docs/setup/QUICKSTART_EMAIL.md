# Quick Start: Email Notifications

## 🚀 Setup in 3 Steps

### 1. Get Resend API Key
```bash
# Visit https://resend.com and sign up
# Go to API Keys → Create API Key
# Copy the key (starts with "re_")
```

### 2. Add Environment Variables
Create or update `.env.local`:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL_TO=your-email@example.com
```

### 3. Test It
```bash
npm run dev
# Navigate to http://localhost:3000
# Scroll to contact form
# Fill out and submit
# Check your email!
```

## 📧 Email Preview

When someone submits the form, you'll receive an email with:
- **Subject**: "הודעה חדשה מטופס יצירת קשר - אתר ד״ר ליסה"
- **From**: Contact Form <onboarding@resend.dev>
- **Contents**:
  - Sender's name (clickable)
  - Sender's email (clickable)
  - Sender's phone (clickable, if provided)
  - Full message text
  - Submission timestamp

## 🔍 Troubleshooting

### Emails not arriving?
1. Check spam/junk folder
2. Verify `CONTACT_EMAIL_TO` is correct
3. Check server logs for errors
4. Verify API key is valid (starts with `re_`)

### Build failing?
- The build requires environment variables to be set
- See `BUILD_NOTES.md` for details
- Or use placeholder values for CI/CD

### Want custom email domain?
1. Add your domain in Resend dashboard
2. Verify DNS records
3. Update `from` in `/lib/resend.ts`
4. Change to: `Your Name <noreply@yourdomain.com>`

## 📚 More Info

- **Full setup guide**: [EMAIL_SETUP.md](EMAIL_SETUP.md)
- **Testing guide**: [TESTING.md](TESTING.md)
- **Implementation details**: [../implementation/IMPLEMENTATION_SUMMARY.md](../implementation/IMPLEMENTATION_SUMMARY.md)
- **Build notes**: [BUILD_NOTES.md](BUILD_NOTES.md)

## 💡 Tips

- Free tier: 100 emails/day
- Emails appear instantly (1-2 minutes max)
- Form submissions always work, even if email fails
- Check terminal logs for email confirmation
