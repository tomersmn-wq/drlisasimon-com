# Lib Folder

## What This Folder Contains
The `lib` folder contains shared utility files and configurations that support the website's functionality. These are the "behind-the-scenes" files that handle data validation, database connections, and other technical operations.

## Intended Purpose
Library files provide core functionality used across the application:
- **contactSchema** (`contactSchema.ts`): Defines the rules and structure for contact form data validation
- **supabase** (`supabase.ts`): Contains database connection settings and configuration for storing form submissions

## Impact Examples

### Example 1: Changing Form Validation Rules
Modifying `contactSchema.ts` to require additional fields (like phone number) will change what information users must provide, potentially reducing form submissions if requirements become too strict.

### Example 2: Updating Database Connection
Changes to `supabase.ts` affect how form submissions are stored. Incorrect configuration could prevent forms from working entirely or cause data loss.

### Example 3: Adjusting Data Requirements
Adding or removing validation rules in `contactSchema.ts` will change what data is accepted, impacting both user experience (error messages) and data quality in the database.

## Key Files
- `contactSchema.ts` - Form validation rules
- `supabase.ts` - Database connection configuration
