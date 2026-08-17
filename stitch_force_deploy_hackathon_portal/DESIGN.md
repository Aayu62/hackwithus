---
name: NO LIMITS zero//constraints
colors:
  surface: '#0c160a'
  surface-dim: '#0c160a'
  surface-bright: '#313c2e'
  surface-container-lowest: '#071106'
  surface-container-low: '#141e12'
  surface-container: '#182216'
  surface-container-high: '#222d20'
  surface-container-highest: '#2d382a'
  on-surface: '#dae6d2'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#dae6d2'
  inverse-on-surface: '#283326'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#edfbff'
  on-tertiary: '#00363f'
  tertiary-container: '#8beaff'
  on-tertiary-container: '#006a7a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#a4eeff'
  tertiary-fixed-dim: '#00daf8'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5a'
  background: '#0c160a'
  on-background: '#dae6d2'
  surface-variant: '#2d382a'
  surface-void: '#000000'
  surface-low: '#0a0a0a'
  surface-mid: '#1a1a1a'
  terminal-green: '#00ff41'
  warning-amber: '#ffb000'
  critical-red: '#ff3131'
typography:
  headline-xl:
    fontFamily: JetBrains Mono
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  code-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  button-text:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
spacing:
  unit: 4px
  gutter: 24px
  margin-sm: 16px
  margin-md: 32px
  margin-lg: 64px
  container-max: 1280px
---

## Brand & Style

The design system is a high-performance, technical framework designed for a "zero-constraint" developer environment. It evokes the feeling of a terminal-bound mission control where limits are removed and raw logic prevails.

The visual style is a fusion of **Brutalism** and **Cyberpunk Minimalism**. It prioritizes technical density over decorative softness. The personality is aggressive, empowering, and unapologetically digital. Key visual anchors include sharp geometry, a high-contrast terminal palette, and functional "glitch" textures that mirror the structure of a live command line.

### Visual Principles
- **Terminal Authenticity:** UI elements should feel like components of an advanced IDE or a high-stakes command center.
- **Data-First Hierarchy:** Prioritize information density and legibility through high-contrast monochrome foundations.
- **Uncompromising Precision:** Every edge is deliberate. This design system rejects organic curves in favor of structural rigidity.

## Colors

The palette is rooted in a "Void" black foundation, providing the ultimate high-contrast base for the signature terminal-green accent.

- **Primary (Terminal Green):** #00ff41. Reserved for active states, primary actions, and critical "successful" data streams.
- **Secondary (Pure White):** #ffffff. Used for maximum legibility in body text and high-impact headers.
- **Tertiary (Data Cyan):** #00daf8. Supporting accent for secondary interactive elements and non-critical system telemetry.
- **Surface Tiers:**
  - **Surface-Void:** #000000 (Base background)
  - **Surface-Low:** #0a0a0a (Primary containers/modules)
  - **Surface-Mid:** #1a1a1a (Inputs, hover states, and interactive zones)

## Typography

This design system utilizes **JetBrains Mono** exclusively across all levels to reinforce the technical, developer-centric nature of the brand.

**Styling Rules:**
- **Case Sensitivty:** All UI labels, buttons, and system headers must be in **Uppercase**.
- **Visual Prefixes:** High-level headings should occasionally use terminal prefixes like `//` or `>` to simulate command lines.
- **Readability:** Maintain high line-heights for body text to offset the monospaced character width.
- **Data Display:** Data tables and technical logs should use the `code-label` tier at 14px for maximum density.

## Layout & Spacing

The layout is built on a rigid **4px baseline grid**. All spacing values must be strict multiples of 4 to maintain mechanical consistency.

### Grid System
A **12-column fixed grid** is utilized for desktop (max-width 1280px). 
- **Desktop:** 64px margins, 24px gutters.
- **Tablet:** 32px margins, 20px gutters.
- **Mobile:** 16px margins, 16px gutters (4-column fluid layout).

### Alignment
Elements must feel "docked." Use vertical and horizontal rules (1px lines) instead of whitespace to separate functional zones, mimicking the structure of a tiled window manager.

## Elevation & Depth

This design system rejects soft shadows. Depth is communicated through **Tonal Layering and Glowing Outlines**.

- **Tonal Layers:** Objects closer to the user are rendered in lighter surface shades (`Surface-Mid`).
- **Glow Effects:** Instead of traditional shadows, elevated or active elements use a localized primary green glow (`box-shadow: 0 0 12px rgba(0, 255, 65, 0.4)`).
- **Glass-Terminal Effect:** Use `backdrop-filter: blur(12px)` on overlays with a 90% opaque `Surface-Void` background.
- **System Overlay:** A global fixed scanline overlay (2px interval linear gradient) should be applied at 3% opacity to simulate the texture of a high-end CRT terminal.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every component—from buttons and input fields to full-screen modals—must maintain 90-degree corners. This communicates the "zero constraint" logic of the brand.

**Specific Details:**
- **Chamfers:** Complex UI components (like selection indicators) may use a 45-degree chamfered corner, but never a radius.
- **Borders:** Use 1px or 2px solid borders to define container boundaries in lieu of shadows.

## Components

### Buttons
- **Primary:** Solid `#00FF41` background with `#000000` text. Hover state: Inverse (White background, black text).
- **Secondary:** Transparent background, 1px white border. Hover state: Green border and green text glow.
- **Text:** All button labels must be uppercase and include a `>_` cursor prefix.

### Input Fields
- **Style:** 1px border using `Surface-Mid`. 
- **Focus:** The border shifts to Primary Green with a blinking vertical pipe `|` cursor at the end of the text string.

### Cards & Modules
- Modules are `Surface-Low` containers with a 1px `Surface-Mid` border.
- Headers for modules should have a solid 2px top-accent bar in Primary Green.

### Chips & Status Tags
- Rectangular with a 1px border. Use `code-label` typography.
- Formatting: Enclose status text in brackets, e.g., `[RUNNING]` or `[NULL_SIG]`.

### Lists
- Use binary markers (0/1) or square terminal blocks for bullets.
- Selection state: Full-width `Surface-Mid` background highlight with a primary green left-border (2px).