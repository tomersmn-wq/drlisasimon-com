# Dr. Lisa Simon - Clinical Psychologist Website

Professional website for Dr. Lisa Simon, clinical psychologist.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Supabase (contact form backend)
- React Hook Form + Zod

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
/app          - Next.js app router pages
/sections     - Homepage section components
/components   - Reusable UI components
/lib          - Utils, schemas, Supabase client
```

## Key Sections

- **Home**: Split-screen hero with abstract portrait + credentials
- **Therapy**: Services and specializations
- **About**: Background and qualifications
- **Academic**: Research focus areas
- **Lectures**: Speaking topics and audiences
- **Contact**: Form + contact details

## Deployment

Deploy to Vercel:

```bash
npm run build
```

See [CHANGELOG.md](CHANGELOG.md) for recent changes.
