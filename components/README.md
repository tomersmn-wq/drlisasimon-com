# Components Folder

## What This Folder Contains
The `components` folder holds reusable UI building blocks that can be used across different parts of the website. These are like LEGO pieces that get assembled to create the full website experience.

## Intended Purpose
Components provide consistent, reusable functionality:
- **Navigation** (`Navigation.tsx`): The main menu/navigation bar that appears on every page
- **ContactForm** (`ContactForm.tsx`): A form component for users to send messages
- **ScrollSection** (`ScrollSection.tsx`): A wrapper that adds scroll animations to page sections
- **FontSizeControl** (`FontSizeControl.tsx`): Accessibility widget for adjusting text size
- **Footer** (`Footer.tsx`): Site footer with links and accessibility information

## Impact Examples

### Example 1: Updating Navigation Links
Modifying `Navigation.tsx` will change the menu items visible to users across all pages, affecting site navigation and user flow.

### Example 2: Changing Form Fields
Adding or removing fields in `ContactForm.tsx` will change what information is collected from users, impacting data collection and potentially requiring database updates.

### Example 3: Adjusting Scroll Animations
Changes to `ScrollSection.tsx` will affect how sections appear when users scroll, altering the visual experience and perceived performance of the site.

### Example 4: Font Size Controls
`FontSizeControl.tsx` provides accessibility features that allow users to adjust text size. Changes here affect the user experience for people with visual impairments.

## Key Files

### Core Navigation & Layout
- `Navigation.tsx` - Site navigation menu with ARIA labels
- `Footer.tsx` - Site footer with accessibility statement link
- `ScrollSection.tsx` - Animated section wrapper with proper landmarks

### Forms & Interaction
- `ContactForm.tsx` - Contact form with validation and accessibility features

### Accessibility
- `FontSizeControl.tsx` - Font size adjustment widget
  - Three size options (default, medium, large)
  - Persists user preference in localStorage
  - Fully keyboard accessible with ARIA attributes

## Accessibility Features

All components in this folder follow WCAG 2.1 Level AA guidelines:
- Proper ARIA labels and roles
- Keyboard navigation support
- Minimum 44×44px touch targets
- Screen reader compatible
- Focus indicators
- Semantic HTML

See [../docs/implementation/ACCESSIBILITY.md](../docs/implementation/ACCESSIBILITY.md) for detailed accessibility documentation.
