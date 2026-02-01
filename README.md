# Dr. Lisa Simon - Clinical Psychologist Website

Professional website for Dr. Lisa Simon, clinical psychologist.

## Features

✨ **Modern & Accessible**
- WCAG 2.1 Level AA compliant
- Israeli Standard 5568 compliant
- Font size adjustment controls
- Keyboard navigation
- Screen reader support
- Reduced motion support

📧 **Contact Form with Email Notifications**
- Form validation with Zod
- Data storage in Supabase
- Email notifications via Resend
- Professional email templates

🎨 **Beautiful Design**
- Responsive layout
- Hebrew RTL support
- Smooth scrolling sections
- Modern color palette

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Supabase (contact form backend)
- React Hook Form + Zod
- Resend + React Email (email notifications)
- Jest + jest-axe (accessibility testing)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL_TO=your-email@example.com
```

See [docs/setup/EMAIL_SETUP.md](docs/setup/EMAIL_SETUP.md) for detailed email configuration instructions.

## Testing

```bash
# Run all tests
npm test

# Run accessibility tests
npm run test:a11y

# Run tests in watch mode
npm run test:watch
```

## Documentation

📚 **[Complete Documentation](docs/)** - Comprehensive guides for setup, implementation, and deployment

Quick links:
- [Quick Start Guide](docs/START_HERE.md) - Start here if you're new
- [Accessibility Guide](ACCESSIBILITY.md) - Accessibility features overview
- [Full Accessibility Docs](docs/implementation/ACCESSIBILITY.md) - Complete accessibility implementation
- [Email Setup](docs/setup/QUICKSTART_EMAIL.md) - Set up email notifications (3 steps)
- [Testing Guide](docs/setup/TESTING.md) - Test the application (email + accessibility)
- [Technical Reference](docs/implementation/TECHNICAL_REFERENCE.md) - Architecture and code details

## Structure

```
/app                      - Next.js app router pages
  /accessibility          - Accessibility statement page
  /api/contact            - Contact form API endpoint
/sections                 - Homepage section components
/components               - Reusable UI components
  FontSizeControl.tsx     - Font size adjustment widget
  Footer.tsx              - Site footer
  Navigation.tsx          - Main navigation
  ContactForm.tsx         - Contact form
/context                  - React contexts
  AccessibilityContext    - Font size state management
/lib                      - Utils, schemas, clients
  /emails                 - Email templates
/tests                    - Test suites
  /accessibility          - Accessibility tests
/docs                     - Complete project documentation
```

## Key Sections

- **Home**: Split-screen hero with abstract portrait + credentials
- **Therapy**: Services and specializations
- **About**: Background and qualifications
- **Academic**: Research focus areas
- **Lectures**: Speaking topics and audiences
- **Contact**: Form + contact details (with email notifications)
- **Footer**: Quick links, contact info, accessibility statement link

## Accessibility

This website is designed to be accessible to all users:

- **WCAG 2.1 Level AA** compliant
- **Israeli Standard 5568** compliant
- Font size adjustment (3 levels)
- Full keyboard navigation
- Screen reader compatible
- Reduced motion support
- Minimum 4.5:1 color contrast
- 44×44px touch targets

See [ACCESSIBILITY.md](ACCESSIBILITY.md) for details or visit [/accessibility](/accessibility) on the live site.

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Make sure to add environment variables in your Vercel project settings.

See [docs/CHANGELOG.md](docs/CHANGELOG.md) for recent changes and [docs/deployment/DEPLOYMENT_SUMMARY.md](docs/deployment/DEPLOYMENT_SUMMARY.md) for deployment details.
