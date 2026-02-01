# Build Configuration Notes

## Build-Time Environment Variables

The Next.js build process requires certain environment variables to be available at build time, even for dynamic API routes.

### Required for Build

If you encounter build errors like "supabaseUrl is required" or "RESEND_API_KEY is not defined", you need to ensure your `.env.local` file has all required variables:

```bash
# Supabase (required for build)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email (optional for build, required for runtime)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL_TO=your-email@example.com
```

### Development vs Production

- **Development** (`npm run dev`): Environment variables are loaded from `.env.local` automatically
- **Production Build** (`npm run build`): You need to either:
  1. Have `.env.local` with valid values
  2. Or set environment variables in your CI/CD pipeline
  3. Or use placeholder values for build (will fail at runtime if not set)

### Vercel Deployment

When deploying to Vercel:

1. Go to Project Settings → Environment Variables
2. Add all required variables for Production, Preview, and Development environments
3. Redeploy the project

The build will succeed as long as the variables are set (they don't need to be valid during build, only at runtime).

### Local Build Without Environment Variables

If you need to build without environment variables (e.g., CI/CD), you can use placeholder values:

```bash
NEXT_PUBLIC_SUPABASE_URL=http://placeholder \
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder \
SUPABASE_SERVICE_ROLE_KEY=placeholder \
RESEND_API_KEY=re_placeholder \
CONTACT_EMAIL_TO=placeholder@example.com \
npm run build
```

Note: The app will fail at runtime if these aren't real values.
