# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **Email notifications**: Contact form sends notifications to designated email with all submission details
  - Resend API integration (`resend` package)
  - React Email template (`@react-email/components`, `@react-email/render`)
  - Hebrew email formatting with submission timestamp
  - Non-blocking: email failures don't prevent form submission to Supabase
  - Requires: `RESEND_API_KEY`, `CONTACT_EMAIL_TO` env vars
  - Config: [EMAIL_SETUP.md](EMAIL_SETUP.md)

### Changed
- **Section order**: About section now appears before Therapy section (Home → About → Therapy → Academic → Lectures → Contact)
- **HomeSection redesign**: Split-screen layout with abstract portrait silhouette on left, content on right
  - Responsive: stacks vertically on mobile, side-by-side on desktop (lg breakpoint)
  - Abstract silhouette visual replaces generic placeholder
  - Decorative botanical leaf clusters and accent circles
  - Professional credentials badge added
  - Refined tagline: "מלווה אנשים במסע של צמיחה אישית והבנה עצמית עמוקה"
  - Subtle dot pattern background overlay
