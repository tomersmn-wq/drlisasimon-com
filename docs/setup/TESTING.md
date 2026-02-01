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

---

# Accessibility Testing

This section covers how to test the website's accessibility features to ensure WCAG 2.1 Level AA compliance and Israeli Standard 5568 compliance.

## Prerequisites

Install dependencies if not already done:

```bash
npm install
```

## Automated Accessibility Testing

### Running Tests

```bash
# Run all tests
npm test

# Run only accessibility tests
npm run test:a11y

# Run tests in watch mode
npm run test:watch
```

### What Gets Tested

Automated tests check:
- ✅ Navigation accessibility (ARIA labels, keyboard access)
- ✅ Form field labels and associations
- ✅ Proper heading hierarchy
- ✅ Color contrast
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ ARIA attributes
- ✅ Touch target sizes

### Test Output

Successful output:
```
PASS  tests/accessibility/navigation.test.tsx
PASS  tests/accessibility/contact-form.test.tsx
PASS  tests/accessibility/home.test.tsx
PASS  tests/accessibility/font-size-control.test.tsx

Test Suites: 4 passed, 4 total
Tests:       15 passed, 15 total
```

### If Tests Fail

Tests will fail with detailed violation reports:
```
Expected no accessibility violations but found:
  - Critical: Form field missing label (1 instance)
  - Serious: Insufficient color contrast (2 instances)
```

Fix violations before deploying to production.

## Manual Accessibility Testing

### 1. Keyboard Navigation Test

**Goal**: Ensure all functionality is accessible via keyboard.

**Steps:**
1. Start at top of page (refresh page)
2. Press `Tab` key repeatedly
3. Verify you can:
   - Access skip-to-content link (first tab)
   - Navigate through all menu items
   - Focus on all interactive elements
   - Submit the contact form
   - Use font size controls
4. Press `Shift+Tab` to navigate backward
5. Verify focus indicators are visible

**Pass Criteria:**
- ✅ All interactive elements receive focus
- ✅ Focus order is logical (top to bottom, right to left for Hebrew)
- ✅ Focus indicators are clearly visible
- ✅ No keyboard traps (can always move focus)
- ✅ Skip-to-content link appears on first Tab

### 2. Screen Reader Test

#### Windows (NVDA - Free)

**Setup:**
1. Download NVDA from [nvaccess.org](https://www.nvaccess.org/)
2. Install and start NVDA
3. Open website in Chrome or Firefox

**Test Navigation:**
- Press `H` to jump between headings
- Press `Tab` to move through interactive elements
- Press `Down Arrow` to read next line
- Press `Insert+F7` to list all headings

**What to Check:**
- ✅ Page title is announced
- ✅ Headings announce level and text
- ✅ Form labels are read with fields
- ✅ Error messages are announced
- ✅ Links have descriptive text
- ✅ Buttons have clear labels

#### macOS (VoiceOver - Built-in)

**Setup:**
1. Press `Cmd+F5` to start VoiceOver
2. Open website in Safari

**Test Navigation:**
- Press `VO+H` to jump to next heading (VO = Control+Option)
- Press `Tab` to move through interactive elements
- Press `VO+Right Arrow` to move to next element
- Press `VO+U` to open rotor menu

**What to Check:**
- ✅ Page structure is clear
- ✅ Navigation is announced as navigation landmark
- ✅ Form fields announce label and type
- ✅ Decorative images are skipped

### 3. Color Contrast Test

**Using Browser DevTools:**

1. Open Chrome DevTools (F12)
2. Select an element with text
3. Look for contrast ratio in Styles panel
4. Verify ratios meet standards:
   - Normal text: 4.5:1 minimum
   - Large text (18pt+): 3.1 minimum

**Using Online Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio Calculator](https://contrast-ratio.com/)

**Check These Elements:**
- Body text on background
- Link text on background
- Button text on button background
- Error messages
- All interactive element states (hover, focus, active)

### 4. Font Size Adjustment Test

**Steps:**
1. Click font size controls (bottom-left corner)
2. Try all three sizes: default, medium, large
3. Verify:
   - ✅ Text size changes immediately
   - ✅ Layout doesn't break
   - ✅ No horizontal scrolling
   - ✅ All text remains readable
   - ✅ Preference persists on page reload

### 5. Reduced Motion Test

**On macOS:**
1. System Preferences → Accessibility → Display
2. Enable "Reduce motion"
3. Reload website

**On Windows:**
1. Settings → Ease of Access → Display
2. Enable "Show animations in Windows"
3. Reload website

**Verify:**
- ✅ Animations are minimal or removed
- ✅ Transitions are instant or very short
- ✅ Scroll behavior is smooth but not animated
- ✅ Site remains functional

### 6. Mobile/Touch Test

**On Mobile Device:**
1. Open website on smartphone
2. Test touch targets:
   - Navigation menu
   - Form fields
   - Buttons
   - Font size controls

**Verify:**
- ✅ All touch targets are at least 44×44 pixels
- ✅ Adequate spacing between interactive elements
- ✅ No accidental activations
- ✅ Form inputs are easy to tap

### 7. Zoom Test

**Steps:**
1. Zoom browser to 200% (Ctrl/Cmd + Plus)
2. Navigate through entire site
3. Check at 300% and 400% if possible

**Verify:**
- ✅ All content remains visible
- ✅ No horizontal scrolling required
- ✅ Text reflows properly
- ✅ Images scale appropriately
- ✅ Interactive elements remain accessible

## Browser Testing Matrix

Test across these browsers (latest versions):

| Browser | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Chrome | ✅ | ✅ | Primary test browser |
| Firefox | ✅ | ✅ | Good screen reader support |
| Safari | ✅ | ✅ | Test on macOS and iOS |
| Edge | ✅ | - | Windows users |

## Testing Checklist

Before each release:

### Automated
- [ ] All jest-axe tests pass
- [ ] No console errors
- [ ] Build succeeds without warnings

### Manual - Keyboard
- [ ] Skip to content link works
- [ ] All navigation accessible
- [ ] Form can be completed with keyboard
- [ ] No keyboard traps

### Manual - Screen Reader
- [ ] Test with NVDA (Windows)
- [ ] Test with VoiceOver (macOS)
- [ ] All content is announced
- [ ] Navigation is clear

### Manual - Visual
- [ ] Color contrast passes
- [ ] Font size adjustment works
- [ ] Zoom to 200% works
- [ ] Mobile touch targets adequate

### Manual - Preferences
- [ ] Reduced motion respected
- [ ] Font size persists
- [ ] RTL layout correct

## Accessibility Statement

Verify the accessibility statement page:

1. Visit `/accessibility`
2. Check all information is current:
   - Last updated date
   - Contact information
   - Compliance standards
   - Known limitations

## Reporting Issues

If you find accessibility issues:

1. Document the issue:
   - What's the problem?
   - What page/component?
   - What assistive technology?
   - Steps to reproduce
2. Create a GitHub issue or notify the team
3. Prioritize based on severity:
   - Critical: Site unusable for some users
   - High: Major barrier to access
   - Medium: Inconvenience
   - Low: Minor improvement

## Resources

### Tools
- [axe DevTools Extension](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (built into Chrome)

### Guidelines
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Israeli Standard 5568](https://www.gov.il/he/departments/guides/net-accessibility)
- [WebAIM Resources](https://webaim.org/resources/)

### Learning
- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [Keyboard Testing](https://webaim.org/articles/keyboard/)
- [Color Contrast Testing](https://webaim.org/articles/contrast/)

---

For more detailed accessibility implementation information, see [ACCESSIBILITY.md](../implementation/ACCESSIBILITY.md).
