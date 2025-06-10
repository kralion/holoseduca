# DaisyUI 5 Documentation

DaisyUI 5 is a CSS library for Tailwind CSS 4 that provides class names for common UI components.

## Installation

1. DaisyUI 5 requires Tailwind CSS 4
2. `tailwind.config.js` file is deprecated in Tailwind CSS v4. Do not use `tailwind.config.js`
3. Install DaisyUI 5 using:
   ```bash
   npm i -D daisyui@latest
   ```
4. Add to your CSS file:
   ```css
   @import "tailwindcss";
   @plugin "daisyui";
   ```

## Usage Rules

1. Add DaisyUI class names to HTML elements:
   - Component class name
   - Part class names (if available)
   - Modifier class names (if available)

2. Components can be customized using Tailwind CSS utility classes
   Example: `btn px-10` sets custom horizontal padding to a `btn`

3. Use `!` suffix for forceful overrides
   Example: `btn bg-red-500!` forcefully sets background color

4. Create custom components with Tailwind CSS utilities if needed

5. Use Tailwind CSS responsive prefixes for `flex` and `grid` layouts

6. Only use existing DaisyUI class names or Tailwind CSS utility classes

7. Avoid custom CSS when possible

8. For placeholder images, use: https://picsum.photos/200/300

9. Avoid custom fonts unless necessary

10. Don't add `bg-base-100 text-base-content` to body unless necessary

## Colors

### Color Names

- `primary`: Primary brand color
- `primary-content`: Foreground content for primary color
- `secondary`: Secondary brand color
- `secondary-content`: Foreground content for secondary color
- `accent`: Accent brand color
- `accent-content`: Foreground content for accent color
- `neutral`: Neutral dark color
- `neutral-content`: Foreground content for neutral color
- `base-100`: Base surface color
- `base-200`: Darker base color for elevations
- `base-300`: Even darker base color
- `base-content`: Foreground content for base color
- `info`: Info/helpful message color
- `info-content`: Foreground content for info color
- `success`: Success/safe message color
- `success-content`: Foreground content for success color
- `warning`: Warning/caution message color
- `warning-content`: Foreground content for warning color
- `error`: Error/danger message color
- `error-content`: Foreground content for error color

### Color Rules

1. DaisyUI adds semantic color names to Tailwind CSS
2. Use color names in utility classes (e.g., `bg-primary`)
3. Colors change based on theme
4. No need for `dark:` prefix
5. Use DaisyUI color names for theme compatibility
6. Tailwind CSS colors (e.g., `red-500`) remain constant across themes
7. DaisyUI colors (e.g., `primary`) change with theme
8. Avoid Tailwind CSS text colors for contrast issues
9. `*-content` colors maintain good contrast
10. Use `base-*` colors for main content, `primary` for important elements

## Components

### Stack
- Component: `stack`
- Modifiers: `stack-top`, `stack-bottom`, `stack-start`, `stack-end`
- Use `w-*` and `h-*` for dimensions

### Stat
- Component: `stats`
- Parts: `stat`, `stat-title`, `stat-value`, `stat-desc`, `stat-figure`, `stat-actions`
- Direction: `stats-horizontal`, `stats-vertical`

### Status
- Component: `status`
- Colors: `status-neutral`, `status-primary`, etc.
- Sizes: `status-xs` through `status-xl`

### Steps
- Component: `steps`
- Parts: `step`, `step-icon`
- Colors: `step-neutral`, `step-primary`, etc.
- Direction: `steps-vertical`, `steps-horizontal`

### Swap
- Component: `swap`
- Parts: `swap-on`, `swap-off`, `swap-indeterminate`
- Modifiers: `swap-active`
- Styles: `swap-rotate`, `swap-flip`

### Tab
- Component: `tabs`
- Parts: `tab`, `tab-content`
- Styles: `tabs-box`, `tabs-border`, `tabs-lift`
- Modifiers: `tab-active`, `tab-disabled`
- Placement: `tabs-top`, `tabs-bottom`

### Table
- Component: `table`
- Modifiers: `table-zebra`, `table-pin-rows`, `table-pin-cols`
- Sizes: `table-xs` through `table-xl`

### Textarea
- Component: `textarea`
- Style: `textarea-ghost`
- Colors: `textarea-neutral`, `textarea-primary`, etc.
- Sizes: `textarea-xs` through `textarea-xl`

### Theme Controller
- Component: `theme-controller`
- Use with checkbox/radio inputs

### Timeline
- Component: `timeline`
- Parts: `timeline-start`, `timeline-middle`, `timeline-end`
- Modifiers: `timeline-snap-icon`, `timeline-box`, `timeline-compact`
- Direction: `timeline-vertical`, `timeline-horizontal`

### Toast
- Component: `toast`
- Placement: `toast-start`, `toast-center`, `toast-end`, `toast-top`, `toast-middle`, `toast-bottom`

### Toggle
- Component: `toggle`
- Colors: `toggle-primary`, `toggle-secondary`, etc.
- Sizes: `toggle-xs` through `toggle-xl`

### Validator
- Component: `validator`
- Part: `validator-hint`
- Use with `input`, `select`, `textarea` 