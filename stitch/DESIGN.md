---
name: Technical Utility Core
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#b7c8e1'
  on-secondary: '#213145'
  secondary-container: '#3a4a5f'
  on-secondary-container: '#a9bad3'
  tertiary: '#ffb596'
  on-tertiary: '#581e00'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  label-caps:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 24px
---

## Brand & Style
The design system is engineered for high-density technical monitoring and rapid troubleshooting. The brand personality is clinical, reliable, and strictly functional. It operates on a "utility-first" philosophy, where every pixel serves a purpose in data visualization or system control. 

The visual style is a blend of **Modern Minimalism** and **Technical Brutalism**. It prioritizes high information density without visual clutter, utilizing clear structural borders rather than heavy shadows to define hierarchy. The emotional response should be one of calm control and absolute clarity, minimizing cognitive load for users managing complex loops and smoke tests.

## Colors
This design system uses a **Dark Mode** default to reduce eye strain during extended monitoring sessions. 

The palette is built on a deep slate foundation. The **Neutral** shades range from `#0F172A` (background) to `#334155` (borders), creating a low-contrast environment that allows functional status colors to pop. 

- **Primary Blue:** Reserved strictly for intentional user actions and active states.
- **Functional Colors:** Success Green, Warning Amber, and Error Red are used with high saturation against the dark background to ensure immediate recognition of system health.
- **Surface Tiers:** Use subtle shifts in slate values to denote nested containers, maintaining a flat but structured appearance.

## Typography
The typographic strategy balances readability with technical precision. 

- **Geist** is used for structural headings, providing a sharp, modern geometric feel.
- **Inter** handles the bulk of the UI text, chosen for its exceptional legibility at small sizes.
- **JetBrains Mono** is the functional workhorse, utilized for all dynamic data, including timestamps, status codes, logs, and IDs. This ensures that characters like '0' and 'O' are never confused.

On mobile devices, scale `display-sm` down to `headline-md` and maintain all `code` sizes to ensure data integrity is not compromised by excessive wrapping.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a base-4 increment system. For a high-density utility tool, the focus is on maximizing vertical and horizontal space.

- **Desktop:** 12-column grid with narrow 12px gutters to keep related data close together.
- **Tablet:** 6-column grid.
- **Mobile:** 2-column grid or single-stack, with 16px side margins.

Content should be grouped into logical "Zones." Use `spacing-sm` (8px) for internal element grouping and `spacing-md` (16px) for separating logical blocks within a card.

## Elevation & Depth
In this design system, depth is communicated through **Low-Contrast Outlines** and tonal stepping rather than shadows. 

- **Level 0 (Background):** `#0F172A`. The base canvas.
- **Level 1 (Cards/Containers):** `#1E293B` with a `1px` border of `#334155`.
- **Level 2 (Active/Hover):** A subtle background shift to `#2D3748`.

Shadows are used sparingly and only for "floating" elements like tooltips or dropdown menus, using a tight, dark shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.3)`. This maintains the "board" aesthetic where everything feels pinned to the surface.

## Shapes
This design system uses **Soft (1)** roundedness. 

- **Default (4px):** Used for standard buttons, input fields, and small cards.
- **Large (8px):** Used for primary dashboard containers.
- **Full/Pill:** Used exclusively for status tags (e.g., "Active", "Offline") to distinguish them from interactive buttons.

The sharp-yet-slightly-softened corners reflect a professional tool that is precise but modern.

## Components

### Buttons
- **Primary:** Solid `#2563EB` background with white text. 4px radius. No gradient.
- **Secondary:** Transparent background with a `1px` border of `#334155`.
- **Ghost:** No border or background unless hovered. Used for utility actions in toolbars.

### Input Fields & Toggles
- **Inputs:** `#0F172A` background with a `#334155` border. Text uses `code-md` for technical data entry. Focus state uses a `1px` primary blue glow.
- **Toggles:** Small, rectangular switches with a `2px` internal padding. Active state is Success Green; Inactive is Slate.

### Cards & Lists
- **Compact Cards:** Used for individual test loops. Padding is fixed at `12px`.
- **Data Lists:** Use zebra-striping (alternating `#1E293B` and `#161E2E`) for long logs. Borders should only be horizontal to maintain flow.

### Status Indicators
- **Smoke Pins:** Small circular indicators (8px x 8px) that glow subtly when active.
- **Chips:** Small, pill-shaped tags using `label-caps` typography to indicate environment (e.g., PROD, STAGING).