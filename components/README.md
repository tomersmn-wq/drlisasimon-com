# Components Folder

## What This Folder Contains
The `components` folder holds reusable UI building blocks that can be used across different parts of the website. These are like LEGO pieces that get assembled to create the full website experience.

## Intended Purpose
Components provide consistent, reusable functionality:
- **Navigation** (`Navigation.tsx`): The main menu/navigation bar that appears on every page
- **ContactForm** (`ContactForm.tsx`): A form component for users to send messages
- **ScrollSection** (`ScrollSection.tsx`): A wrapper that adds scroll animations to page sections

## Impact Examples

### Example 1: Updating Navigation Links
Modifying `Navigation.tsx` will change the menu items visible to users across all pages, affecting site navigation and user flow.

### Example 2: Changing Form Fields
Adding or removing fields in `ContactForm.tsx` will change what information is collected from users, impacting data collection and potentially requiring database updates.

### Example 3: Adjusting Scroll Animations
Changes to `ScrollSection.tsx` will affect how sections appear when users scroll, altering the visual experience and perceived performance of the site.

## Key Files
- `Navigation.tsx` - Site navigation menu
- `ContactForm.tsx` - Contact form with validation
- `ScrollSection.tsx` - Animated section wrapper
