# Dr. Lisa Simon - Clinical Psychologist Website

Professional website for Dr. Lisa Simon, clinical psychologist.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Supabase (contact form backend)
- React Hook Form + Zod
- Resend + React Email (email notifications)

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

## Documentation

📚 **[Complete Documentation](docs/)** - Comprehensive guides for setup, implementation, and deployment

Quick links:
- [Quick Start Guide](docs/START_HERE.md) - Start here if you're new
- [Email Setup](docs/setup/QUICKSTART_EMAIL.md) - Set up email notifications (3 steps)
- [Testing Guide](docs/setup/TESTING.md) - Test the application
- [Technical Reference](docs/implementation/TECHNICAL_REFERENCE.md) - Architecture and code details

## Structure

```
/app          - Next.js app router pages
/sections     - Homepage section components
/components   - Reusable UI components
/lib          - Utils, schemas, Supabase client
/docs         - Complete project documentation
```

## Key Sections

- **Home**: Split-screen hero with abstract portrait + credentials
- **Therapy**: Services and specializations
- **About**: Background and qualifications
- **Academic**: Research focus areas
- **Lectures**: Speaking topics and audiences
- **Contact**: Form + contact details (with email notifications)

## Deployment

Deploy to Vercel:

```bash
npm run build
```

See [docs/CHANGELOG.md](docs/CHANGELOG.md) for recent changes and [docs/deployment/DEPLOYMENT_SUMMARY.md](docs/deployment/DEPLOYMENT_SUMMARY.md) for deployment details.
