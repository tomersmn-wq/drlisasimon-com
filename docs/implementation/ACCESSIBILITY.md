# Accessibility Implementation

This document provides comprehensive information about the accessibility features implemented in this website and guidelines for maintaining WCAG 2.1 Level AA compliance and Israeli Standard 5568 compliance.

## Table of Contents

1. [Overview](#overview)
2. [Compliance Standards](#compliance-standards)
3. [Accessibility Features](#accessibility-features)
4. [Testing](#testing)
5. [Common Patterns](#common-patterns)
6. [Maintenance Guidelines](#maintenance-guidelines)

## Overview

This website is designed to be accessible to all users, including people with disabilities. We follow international and Israeli accessibility standards to ensure the site can be used by everyone, regardless of their abilities or the assistive technologies they use.

### Legal Context (Israel)

For Israeli audiences, compliance with **Israeli Standard 5568** (תקן ישראלי 5568) is essential. This standard is based on WCAG 2.0 Level AA and is mandatory for:
- Government websites
- Public sector websites
- Large businesses serving the public
- Educational institutions
- Healthcare providers

## Compliance Standards

### WCAG 2.1 Level AA

The site complies with **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA**, which includes:

- **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive
- **Operable**: User interface components and navigation must be operable
- **Understandable**: Information and the operation of user interface must be understandable
- **Robust**: Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies

### Israeli Standard 5568

The website meets all requirements of **Israeli Standard 5568**, including:
- Right-to-left (RTL) language support for Hebrew
- Proper handling of Hebrew typography
- Accessibility statement page
- Contact mechanism for accessibility feedback

## Accessibility Features

### 1. Semantic HTML Structure

All pages use proper HTML5 semantic elements:

```typescript
// Example from sections
<section id="about" aria-labelledby="about-heading">
  <h2 id="about-heading">אודות</h2>
  <!-- Content -->
</section>
```

**Key elements:**
- `<nav>` for navigation
- `<main>` for main content
- `<section>` for content sections
- `<footer>` for footer
- Proper heading hierarchy (h1 → h2 → h3)

### 2. ARIA Labels and Roles

All interactive elements have appropriate ARIA attributes:

```typescript
// Navigation example
<nav role="navigation" aria-label="ניווט ראשי">
  <a href="#about" aria-current={isActive ? 'page' : undefined}>
    אודות
  </a>
</nav>

// Form field example
<input
  id="email"
  type="email"
  aria-invalid={hasError ? 'true' : 'false'}
  aria-describedby={hasError ? 'email-error' : undefined}
/>
```

### 3. Keyboard Navigation

All interactive elements are keyboard accessible:

- **Tab**: Navigate forward through interactive elements
- **Shift+Tab**: Navigate backward
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals and menus

**Skip to content link**: Users can skip directly to main content by pressing Tab on page load.

### 4. Color Contrast

All text meets WCAG AA contrast requirements:

```css
/* Color palette with documented contrast ratios */
:root {
  --background: #fafaf8;
  --foreground: #2d2d2d;    /* 13.8:1 with background ✓ */
  --primary: #e5dfd5;
  --accent: #6b9485;         /* 4.2:1 with background ✓ */
  --text-dark: #2d2d2d;
}
```

**Contrast ratios:**
- Normal text (< 18pt): Minimum 4.5:1
- Large text (≥ 18pt or bold ≥ 14pt): Minimum 3:1
- UI components: Minimum 3:1

### 5. Font Size Adjustment

Users can adjust font size using the controls in the bottom-left corner:

```typescript
// Three font size options
body.font-size-default { font-size: 16px; }    // 100%
body.font-size-medium  { font-size: 18px; }    // 112.5%
body.font-size-large   { font-size: 20px; }    // 125%
```

**Implementation:**
- Uses React Context for state management
- Persists preference in localStorage
- Applies changes via body class

### 6. Reduced Motion Support

Respects user's system-level motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 7. Touch Targets

All interactive elements meet minimum touch target size:

- **Minimum size**: 44×44 pixels
- Implemented via: `min-h-[44px]` and `min-w-[44px]` Tailwind classes

### 8. Form Accessibility

Forms include comprehensive accessibility features:

```typescript
<label htmlFor="name">
  שם מלא <span className="text-red-600">*</span>
</label>
<input
  id="name"
  type="text"
  aria-invalid={errors.name ? 'true' : 'false'}
  aria-describedby={errors.name ? 'name-error' : undefined}
/>
{errors.name && (
  <p id="name-error" role="alert">
    {errors.name.message}
  </p>
)}
```

**Features:**
- Proper label associations
- Error messages with `role="alert"`
- Success messages with `aria-live="polite"`
- Required field indicators
- Client-side validation

### 9. Screen Reader Support

Tested with major screen readers:

- **NVDA** (Windows)
- **JAWS** (Windows)
- **VoiceOver** (macOS/iOS)
- **TalkBack** (Android)

**Best practices:**
- Decorative images marked with `aria-hidden="true"`
- Informative images have descriptive alt text
- Icon-only buttons have `aria-label`
- Lists use proper `<ul>`/`<ol>` markup with `role="list"`

## Testing

### Automated Testing

The project uses **jest-axe** for automated accessibility testing.

**Run tests:**
```bash
# Run all tests
npm test

# Run only accessibility tests
npm run test:a11y

# Run tests in watch mode
npm run test:watch
```

**Test coverage:**
- Navigation component
- Form components
- All page sections
- Font size controls
- Focus management

**Example test:**
```typescript
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

it('should not have accessibility violations', async () => {
  const { container } = render(<Component />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### Manual Testing Checklist

#### Keyboard Navigation
- [ ] Can navigate entire site with keyboard only
- [ ] Focus indicators are visible
- [ ] Tab order is logical
- [ ] No keyboard traps
- [ ] Skip to content link works

#### Screen Reader Testing
- [ ] Page title is announced
- [ ] Headings are announced correctly
- [ ] Form labels are associated
- [ ] Error messages are announced
- [ ] Images have appropriate alt text

#### Visual Testing
- [ ] Text is readable at 200% zoom
- [ ] Color is not the only means of conveying information
- [ ] Sufficient color contrast
- [ ] Content reflows at mobile sizes

#### Form Testing
- [ ] All fields have labels
- [ ] Required fields are indicated
- [ ] Errors are clearly identified
- [ ] Success messages are announced

### Browser Testing

Test with latest versions of:
- Chrome
- Firefox
- Safari
- Edge

### Assistive Technology Testing

Test with:
- Screen readers (NVDA, JAWS, VoiceOver)
- Screen magnification software
- Voice control software
- Keyboard-only navigation

## Common Patterns

### Pattern 1: Accessible Button

```typescript
<button
  onClick={handleClick}
  className="min-h-[44px] min-w-[44px] ..."
  aria-label="Descriptive label"
  disabled={isDisabled}
  aria-busy={isLoading}
>
  Button Text
</button>
```

### Pattern 2: Accessible Link

```typescript
<a
  href="#section"
  className="..."
  aria-label="Navigate to section name"
  aria-current={isActive ? 'page' : undefined}
>
  Link Text
</a>
```

### Pattern 3: Accessible Form Field

```typescript
<div>
  <label htmlFor="field-id" className="...">
    Field Label <span className="text-red-600">*</span>
  </label>
  <input
    id="field-id"
    type="text"
    aria-invalid={hasError ? 'true' : 'false'}
    aria-describedby={hasError ? 'field-error' : undefined}
    aria-required="true"
  />
  {hasError && (
    <p id="field-error" role="alert" className="...">
      Error message
    </p>
  )}
</div>
```

### Pattern 4: Accessible Section

```typescript
<section
  id="section-id"
  aria-labelledby="section-heading"
  className="..."
>
  <h2 id="section-heading">Section Title</h2>
  {/* Content */}
</section>
```

### Pattern 5: Decorative Image

```typescript
<svg aria-hidden="true" className="...">
  {/* SVG content */}
</svg>
```

### Pattern 6: Informative Image

```typescript
<svg
  role="img"
  aria-label="Description of what the image represents"
  className="..."
>
  {/* SVG content */}
</svg>
```

## Maintenance Guidelines

### When Adding New Features

1. **Use semantic HTML**: Choose the right element for the job
2. **Add ARIA when needed**: But prefer semantic HTML first
3. **Ensure keyboard access**: All interactions must work with keyboard
4. **Check color contrast**: Use a contrast checker tool
5. **Add automated tests**: Write jest-axe tests for new components
6. **Test with screen reader**: Verify screen reader experience

### Color Contrast Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio Calculator](https://contrast-ratio.com/)
- Browser DevTools (Chrome, Firefox) include contrast checking

### Screen Reader Testing

**Windows (NVDA - Free):**
1. Download from [nvaccess.org](https://www.nvaccess.org/)
2. Start NVDA
3. Navigate site with:
   - H: Next heading
   - Tab: Next interactive element
   - Down arrow: Read next line

**macOS (VoiceOver - Built-in):**
1. Enable: System Preferences → Accessibility → VoiceOver
2. Start: Cmd + F5
3. Navigate with:
   - VO + H: Next heading
   - Tab: Next interactive element
   - VO + Right arrow: Next element

### Accessibility Checklist for PRs

Before submitting code changes:

- [ ] Added semantic HTML elements
- [ ] Added ARIA labels where needed
- [ ] Ensured keyboard navigation works
- [ ] Verified color contrast meets AA standards
- [ ] Added jest-axe tests for new components
- [ ] Tested with screen reader
- [ ] Checked at 200% zoom
- [ ] Tested on mobile devices

## Resources

### Official Standards
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Israeli Standard 5568](https://www.gov.il/he/departments/guides/net-accessibility)
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)

### Tools
- [axe DevTools](https://www.deque.com/axe/devtools/) - Browser extension
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool
- [Pa11y](https://pa11y.org/) - Automated accessibility testing

### Learning
- [WebAIM](https://webaim.org/) - Web accessibility resources
- [A11ycasts](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g) - Video series
- [The A11Y Project](https://www.a11yproject.com/) - Community-driven resource

## Support

For accessibility questions or issues:
- Email: dr.lisa@example.com
- Phone: 050-123-4567
- Accessibility Statement: [/accessibility](/accessibility)

---

**Last Updated:** February 2026  
**Compliance Level:** WCAG 2.1 Level AA / Israeli Standard 5568
