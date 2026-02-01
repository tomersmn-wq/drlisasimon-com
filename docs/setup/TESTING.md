# Testing the Email Notification Feature

This guide helps you test the contact form email notification feature.

## Prerequisites

1. **Environment Variables**: Ensure `.env.local` has:
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
   CONTACT_EMAIL_TO=your-email@example.com
   ```

2. **Resend Account**: Sign up at [https://resend.com](https://resend.com) if you haven't already.

## Testing Steps

### 1. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 2. Navigate to Contact Section

Scroll down to the contact form or navigate directly to the contact section.

### 3. Test Case 1: Valid Submission

Fill out the form with:
- **Name**: Your Name
- **Email**: valid@email.com
- **Phone**: 050-123-4567 (optional)
- **Message**: Test message with at least 10 characters

Click "שלח הודעה" (Send Message)

**Expected Results:**
- ✅ Success message appears: "ההודעה נשלחה בהצלחה! נחזור אליך בהקדם"
- ✅ Form clears automatically
- ✅ Email arrives at `CONTACT_EMAIL_TO` address within 1-2 minutes
- ✅ Email contains all form details with proper formatting

### 4. Test Case 2: Missing Required Fields

Try submitting with:
- Empty name field
- Invalid email format
- Message less than 10 characters

**Expected Results:**
- ❌ Validation errors appear below each field
- ❌ Form doesn't submit
- ❌ No email sent

### 5. Test Case 3: Check Email Content

When you receive the email, verify:
- ✅ Subject line: "הודעה חדשה מטופס יצירת קשר - אתר ד״ר ליסה"
- ✅ From address: "Contact Form <onboarding@resend.dev>"
- ✅ All form fields displayed correctly
- ✅ Timestamp included
- ✅ Clickable email and phone links work
- ✅ Professional formatting and styling

### 6. Test Case 4: Form Without Phone Number

Submit form with:
- Name and email filled
- Phone field left empty
- Valid message

**Expected Results:**
- ✅ Submission succeeds
- ✅ Email received without phone number section
- ✅ All other fields present

## Checking Server Logs

### View API Logs

1. Submit the form
2. Check terminal/console for logs:
   ```
   Email sent successfully: [email-id]
   ```

### If Email Fails

If you see email errors in logs:
```
Email notification error: [error details]
```

**Common Issues:**
- Invalid or missing `RESEND_API_KEY`
- Invalid or missing `CONTACT_EMAIL_TO`
- Resend API rate limit exceeded (100 emails/day on free tier)
- Network connectivity issues

**Important**: Form submission still succeeds even if email fails. Data is saved to Supabase.

## Verifying Supabase Storage

Check that data is saved in Supabase:

1. Open Supabase dashboard
2. Navigate to Table Editor → `contact_submissions`
3. Verify new row with form data

## Production Testing

Before deploying to production:

1. ✅ Verify all environment variables set in Vercel/hosting platform
2. ✅ Test form submission in production environment
3. ✅ Confirm email arrives at correct recipient
4. ✅ Check error handling works (temporarily use invalid API key)
5. ✅ Monitor email sending rates to stay within limits

## Troubleshooting

### Emails Not Arriving

1. Check spam/junk folder
2. Verify `CONTACT_EMAIL_TO` is correct
3. Check Resend dashboard for delivery status
4. Verify API key is valid and not expired
5. Check server logs for errors

### Build Errors

If you see build errors:

```bash
npm run build
```

Common issues:
- Missing environment variables (build-time check)
- Type errors in email template
- Import path issues

### Email Formatting Issues

If emails look broken:
- Inline styles are required for email clients
- Test across different email clients (Gmail, Outlook, etc.)
- Use [Resend's testing tools](https://resend.com/docs/dashboard/emails/preview)

## Next Steps

### Optional Enhancements

1. **Custom Domain**: Verify your domain in Resend to send from your own email address
2. **Reply-To Header**: Add reply-to header pointing to form submitter's email
3. **Auto-Reply**: Send confirmation email to form submitter
4. **Email Templates**: Create variations for different form types
5. **Analytics**: Track email open rates and engagement

## Need Help?

- [Resend Documentation](https://resend.com/docs)
- [React Email Documentation](https://react.email/docs)
- Check [EMAIL_SETUP.md](EMAIL_SETUP.md) for configuration details
