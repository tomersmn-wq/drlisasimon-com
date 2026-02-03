# Lib Folder

## What This Folder Contains
The `lib` folder contains shared utility files and configurations that support the website's functionality. These are the "behind-the-scenes" files that handle data validation, database connections, logging, and other technical operations.

## Intended Purpose
Library files provide core functionality used across the application:
- **contactSchema** (`contactSchema.ts`): Defines the rules and structure for contact form data validation
- **supabase** (`supabase.ts`): Contains database connection settings and configuration for storing form submissions
- **resend** (`resend.ts`): Email service configuration for sending contact form notifications
- **logger** (`logger.ts`): Structured logging utility for application monitoring and debugging
- **config** (`config.ts`): Centralized configuration for contact information and site settings
- **emails** (`emails/`): Email templates for various notifications

## Impact Examples

### Example 1: Changing Form Validation Rules
Modifying `contactSchema.ts` to require additional fields (like phone number) will change what information users must provide, potentially reducing form submissions if requirements become too strict.

### Example 2: Updating Database Connection
Changes to `supabase.ts` affect how form submissions are stored. Incorrect configuration could prevent forms from working entirely or cause data loss.

### Example 3: Adjusting Data Requirements
Adding or removing validation rules in `contactSchema.ts` will change what data is accepted, impacting both user experience (error messages) and data quality in the database.

### Example 4: Configuring Contact Information
Updates to `config.ts` change the contact details displayed throughout the site. Values are loaded from environment variables for easy deployment configuration.

## Key Files
- `contactSchema.ts` - Form validation rules
- `supabase.ts` - Database connection configuration with environment validation
- `resend.ts` - Email service client and configuration
- `logger.ts` - Application logging utility (development/production aware)
- `config.ts` - Site configuration (contact info, etc.)
- `emails/ContactFormEmail.tsx` - Email template for form submissions
