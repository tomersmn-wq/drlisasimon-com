# Accessibility Features

This website includes comprehensive accessibility features to ensure it meets WCAG 2.1 Level AA and Israeli Standard 5568 compliance.

## Features Implemented

### 1. Font Size Adjustment
- Located in bottom-left corner of the screen
- Three size options: Default (100%), Medium (112.5%), Large (125%)
- Preference saved in browser localStorage
- Fully keyboard accessible

### 2. Semantic HTML & ARIA
- Proper heading hierarchy throughout site
- Section landmarks with `aria-labelledby`
- All interactive elements have proper ARIA attributes
- Decorative images marked with `aria-hidden="true"`

### 3. Keyboard Navigation
- Skip to main content link (Tab on page load)
- All functionality accessible via keyboard
- Visible focus indicators
- Logical tab order

### 4. Color Contrast
- All text meets WCAG AA minimum contrast ratios
- Normal text: 4.5:1
- Large text: 3:1
- Updated accent color for better visibility

### 5. Screen Reader Support
- Compatible with NVDA, JAWS, VoiceOver, and TalkBack
- Proper form field labels and error announcements
- Descriptive link text
- Live regions for dynamic content

### 6. Reduced Motion
- Respects system-level motion preferences
- Animations disabled when `prefers-reduced-motion` is set
- Maintains full functionality

### 7. Touch Targets
- All interactive elements minimum 44×44 pixels
- Adequate spacing between touch targets
- Mobile-friendly navigation

### 8. Accessibility Statement
- Dedicated accessibility statement page at `/accessibility`
- Contact information for accessibility feedback
- List of supported assistive technologies
- Compliance information

## Testing

### Automated Tests
Run accessibility tests with:
```bash
npm run test:a11y
```

### Manual Testing Checklist
- [ ] Keyboard navigation works throughout site
- [ ] Screen reader announces all content properly
- [ ] Font size adjustment works
- [ ] All colors meet contrast requirements
- [ ] Site works at 200% zoom
- [ ] Mobile touch targets are adequate

## Standards Compliance

- **WCAG 2.1 Level AA**: Full compliance
- **Israeli Standard 5568**: Full compliance
- **Section 508**: Compliant
- **EN 301 549**: Compliant

## Documentation

For detailed information, see:
- [Full Accessibility Documentation](docs/implementation/ACCESSIBILITY.md)
- [Testing Guide](docs/setup/TESTING.md)
- [Accessibility Statement](/accessibility)

## Contact

For accessibility feedback or issues:
- Email: dr.lisa@example.com
- Phone: 050-123-4567
