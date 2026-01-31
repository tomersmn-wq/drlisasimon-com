# Sections Folder

## What This Folder Contains
The `sections` folder contains the main content blocks that make up the homepage. Each section represents a distinct part of the website's content, like chapters in a book.

## Intended Purpose
Sections organize the homepage into logical content areas:
- **HomeSection** (`HomeSection.tsx`): Hero section with split layout - abstract portrait visual + name/credentials
- **TherapySection** (`TherapySection.tsx`): Information about therapy services
- **AboutSection** (`AboutSection.tsx`): About the doctor
- **AcademicSection** (`AcademicSection.tsx`): Academic credentials and research
- **LecturesSection** (`LecturesSection.tsx`): Information about lectures
- **ContactSection** (`ContactSection.tsx`): Contact information and form

## Impact Examples

### Example 1: Updating Professional Information
Changing content in `AboutSection.tsx` or `AcademicSection.tsx` will update what visitors learn about the doctor's background and qualifications.

### Example 2: Modifying Service Descriptions
Editing `TherapySection.tsx` will change how therapy services are presented to potential clients, affecting how they understand available treatments.

### Example 3: Reordering Sections
Changing the order in which sections are imported in `page.tsx` will rearrange the homepage layout, potentially changing user engagement patterns and information hierarchy.

## Key Files
- `HomeSection.tsx` - Split-screen hero: abstract portrait silhouette + professional info
- `TherapySection.tsx` - Therapy services information
- `AboutSection.tsx` - About section
- `AcademicSection.tsx` - Academic credentials
- `LecturesSection.tsx` - Lectures information
- `ContactSection.tsx` - Contact section
