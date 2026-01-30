# App Folder

## What This Folder Contains
The `app` folder is the core of the Next.js application. It contains the main pages, layout structure, API endpoints, and global styles that define how the website works and looks.

## Intended Purpose
This folder serves as the entry point for all website functionality:
- **Layout** (`layout.tsx`): Defines the overall structure, fonts, and metadata for every page
- **Main Page** (`page.tsx`): The homepage that assembles all sections together
- **API Routes** (`api/contact/route.ts`): Handles form submissions and server-side operations
- **Global Styles** (`globals.css`): Contains website-wide styling rules

## Impact Examples

### Example 1: Changing the Site Title
If you modify the `title` in `layout.tsx`, it will change what appears in browser tabs and search engine results across the entire website.

### Example 2: Adding a New Section
When you add a new section component to `page.tsx`, it will appear as a new section on the homepage, changing the site's content structure.

### Example 3: Modifying Contact Form Behavior
Changes to `api/contact/route.ts` affect how contact form submissions are processed, stored, and responded to, potentially impacting data collection and user experience.

## Key Files
- `layout.tsx` - Website shell and metadata
- `page.tsx` - Homepage content assembly
- `api/contact/route.ts` - Contact form submission handler
- `globals.css` - Global styling rules
