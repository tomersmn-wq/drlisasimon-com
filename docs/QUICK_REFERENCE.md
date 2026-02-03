# Quick Reference

## URLs
- **Production**: https://drlisasimon.com
- **Accessibility Statement**: https://drlisasimon.com/accessibility
- **Resend Dashboard**: https://resend.com
- **Email Logs**: https://resend.com/emails

## Environment Variables

### Required
```bash
# Supabase (Database)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Email (Resend)
RESEND_API_KEY=re_xxx                    # From resend.com/api-keys
CONTACT_EMAIL_TO=your-email@example.com  # Where to receive form submissions
```

### Optional (Contact Info)
```bash
# Public contact information displayed on the site
NEXT_PUBLIC_CONTACT_EMAIL=dr.lisa@example.com
NEXT_PUBLIC_CONTACT_PHONE=050-123-4567
NEXT_PUBLIC_CONTACT_ADDRESS=רחוב הרצל 123, תל אביב
NEXT_PUBLIC_CONTACT_HOURS=ימים א׳-ה׳, 9:00-19:00

# Custom email sender (after domain verification)
EMAIL_FROM=Contact Form <noreply@yourdomain.com>
```

## Key Files

### Email Feature
```
app/api/contact/route.ts             # API endpoint (modified)
lib/resend.ts                        # Email client
lib/emails/ContactFormEmail.tsx      # Email template
```

### Accessibility Features
```
context/AccessibilityContext.tsx     # Font size state management
components/FontSizeControl.tsx       # Font size adjustment UI
components/Footer.tsx                # Site footer with accessibility link
app/accessibility/page.tsx           # Accessibility statement page
app/globals.css                      # Includes accessibility styles
tests/accessibility/                 # Accessibility test suite
```

## Dependencies

### Email
```bash
npm install resend @react-email/components @react-email/render
```

### Testing
```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom jest-axe @axe-core/react
```

## Common Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
```

### Testing
```bash
npm test             # Run all tests
npm run test:a11y    # Run accessibility tests only
npm run test:watch   # Run tests in watch mode
```

### Linting
```bash
npm run lint         # Run ESLint
```

## How It Works

### Contact Form Flow
1. User submits contact form
2. Data saved to Supabase ✅
3. Email sent via Resend (best effort)
4. User sees success message

### Accessibility Features
1. **Font Size Control**: Users can adjust text size (3 levels)
2. **Keyboard Navigation**: Full site accessible via keyboard
3. **Screen Reader Support**: ARIA labels and semantic HTML
4. **Reduced Motion**: Respects system preferences
5. **Color Contrast**: WCAG AA compliant

## Email Template
- **Subject**: הודעה חדשה מטופס יצירת קשר - אתר ד״ר ליסה
- **From**: Contact Form <onboarding@resend.dev>
- **To**: Value of `CONTACT_EMAIL_TO`
- **Content**: Name, email, phone, message, timestamp

## Accessibility Standards
- **WCAG 2.1 Level AA**: International standard
- **Israeli Standard 5568**: Local compliance
- **Features**:
  - Semantic HTML with proper ARIA
  - Keyboard navigation
  - Font size adjustment
  - Reduced motion support
  - 44×44px touch targets
  - 4.5:1 color contrast ratio

## Testing

### Email Testing
```bash
# Local
npm run dev
# Submit form at http://localhost:3000
# Check terminal for "Email sent successfully"

# Production
# Submit form at https://drlisasimon.com
# Check Resend dashboard for delivery status
```

### Accessibility Testing
```bash
# Automated tests
npm run test:a11y

# Manual testing
# - Tab through site with keyboard
# - Test with screen reader (NVDA/VoiceOver)
# - Verify font size controls
# - Check at 200% zoom
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Email not sent | Check Resend dashboard logs |
| "API key not defined" | Add to `.env.local` or Vercel |
| Form fails | Check Supabase credentials |
| Accessibility test fails | Run `npm run test:a11y` for details |
| Font size not persisting | Check localStorage in DevTools |

## Deployment
```bash
vercel --prod
```

## Documentation

### Setup
- [setup/EMAIL_SETUP.md](setup/EMAIL_SETUP.md) - Email setup guide
- [setup/TESTING.md](setup/TESTING.md) - Testing guide (email + accessibility)

### Implementation
- [implementation/ACCESSIBILITY.md](implementation/ACCESSIBILITY.md) - Full accessibility documentation
- [implementation/TECHNICAL_REFERENCE.md](implementation/TECHNICAL_REFERENCE.md) - Technical deep dive

### Deployment
- [deployment/DEPLOYMENT_SUMMARY.md](deployment/DEPLOYMENT_SUMMARY.md) - Deployment details

### Other
- [CHANGELOG.md](CHANGELOG.md) - All changes
- [START_HERE.md](START_HERE.md) - Project overview
