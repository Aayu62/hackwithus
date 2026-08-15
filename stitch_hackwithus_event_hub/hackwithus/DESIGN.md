---
name: HackWithUs
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#3f4852'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#6f7883'
  outline-variant: '#bec7d4'
  surface-tint: '#00629d'
  primary: '#00629d'
  on-primary: '#ffffff'
  primary-container: '#00a3ff'
  on-primary-container: '#00375a'
  inverse-primary: '#98cbff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#904d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#eb8104'
  on-tertiary-container: '#522900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#98cbff'
  on-primary-fixed: '#001d33'
  on-primary-fixed-variant: '#004a77'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  surface-subtle: '#F8FAFC'
  border-light: '#E2E8F0'
  text-muted: '#64748B'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 96px
---

## Brand & Style
The design system embodies a **Minimalist** and **Corporate Modern** aesthetic tailored for a high-end hackathon platform. It moves away from high-intensity "gamer" aesthetics toward a clean, professional, and gallery-like experience. The focus is on clarity, whitespace, and precision, evoking a sense of calm efficiency and intellectual rigor.

The visual narrative is driven by "The Void and the Spark"—a vast white canvas (The Void) where ideas (The Spark) are highlighted through focused Light Blue accents. This approach ensures that the content—the projects, the people, and the code—remains the protagonist without visual noise.

## Colors
The palette is restricted and purposeful, prioritizing legibility and interactive clarity.
- **Primary (Light Blue):** Used exclusively for interactive elements, primary actions, and progress indicators. It serves as a digital "ink" that guides the user.
- **Secondary (Deep Black):** Reserved for strong structural elements like top-level navigation, headers, and primary text to ensure maximum contrast and authority.
- **Neutral (White/Off-White):** The foundation of the design. White is used for the main background, while subtle grays create soft containment for secondary information.
- **Functional Colors:** Error, success, and warning states should be desaturated to fit the minimal aesthetic, using thin strokes rather than heavy fills.

## Typography
The typography system uses a sharp, contemporary neo-grotesque for headlines and a highly functional sans-serif for body text.
- **Headings:** **Hanken Grotesk** provides a clean, technical, yet sophisticated feel. Large displays should use tight tracking to maintain a strong visual "block" feel.
- **Body:** **Inter** is the workhorse for all long-form content, providing exceptional readability at any scale.
- **Technical/Utility:** **JetBrains Mono** is utilized for metadata, tags, and small utility labels to subtly nod to the "Hack" nature of the brand without overwhelming the minimalist aesthetic.

## Layout & Spacing
The design system employs a **Fixed Grid** on desktop and a **Fluid Grid** on mobile to maintain controlled, editorial-style layouts.
- **Rhythm:** An 8px linear scale governs all spacing.
- **Desktop:** 12-column grid with a 1200px max-width, centered on the viewport. This "island" layout helps focus attention on the content.
- **Whitespace:** Use generous vertical margins (Section Gap) between major content blocks to allow the eye to rest and to signify transitions in information hierarchy.
- **Alignment:** Content should be strictly aligned to the grid; avoid off-grid decorative elements to maintain a sense of precision.

## Elevation & Depth
In this light-themed system, depth is communicated through **Low-Contrast Outlines** and **Ambient Shadows** rather than heavy fills.
- **Surfaces:** Use `#FFFFFF` for the base and `#F8FAFC` for secondary containers.
- **Shadows:** Shadows are rare and highly refined. Use a "Soft Float" (e.g., `0 4px 20px rgba(0,0,0,0.04)`) for cards to give them a subtle lift without appearing heavy.
- **Borders:** Use 1px borders in `#E2E8F0` to define boundaries in high-density areas. On interactive elements, the border should transition to the Primary Blue or Secondary Black on hover.

## Shapes
The system uses a **Soft** (4px) roundedness. This subtle curvature maintains a professional and structural feel—avoiding the playfulness of larger radii while removing the harshness of sharp corners.
- **Interactive Elements:** Buttons and input fields follow the 4px standard.
- **Status Pills:** Tags and chips use a "Full" pill shape to distinguish them from actionable buttons.

## Components
- **Buttons:** Primary buttons use a solid Secondary Black fill with White text for maximum impact. Secondary buttons are outlined in `#E2E8F0` and transition to a Primary Blue border on hover.
- **Input Fields:** Clean white backgrounds with a subtle 1px gray border. On focus, the border shifts to Primary Blue with a 2px outer "glow" of 10% opacity blue.
- **Cards:** Minimalist white containers with a subtle border. Content is prioritized with high contrast; avoid using background images in cards unless they are project thumbnails.
- **Chips/Badges:** Use JetBrains Mono for text. Backgrounds should be very light tints of the status color (e.g., light blue background with dark blue text) to keep the UI light and airy.
- **Lists:** Clean rows separated by 1px horizontal lines. High contrast between primary list text (Black) and secondary metadata (Muted Gray).
- **Navigation:** A clean top bar with the 'HackWithUs' wordmark in bold Secondary Black. Links are text-only with a subtle Primary Blue underline appearing only on active or hover states.