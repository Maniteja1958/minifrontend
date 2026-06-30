---
name: Cyber-Minimalist
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
  surface-slate: '#0F172A'
  deep-well: '#020617'
  border-muted: rgba(31, 41, 55, 0.5)
  glass-stroke: rgba(255, 255, 255, 0.08)
typography:
  display-xl:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  section-gap: 64px
  card-padding: 32px
  stack-sm: 8px
  stack-md: 16px
---

## Brand & Style
The brand personality is **sophisticated, high-tech, and breathable**. It targets a professional audience that values AI-driven intelligence but demands a premium, "calm-tech" experience. The design avoids the cluttered "dashboard fatigue" common in technical tools, opting instead for a **Cyber-Minimalist** aesthetic.

This style is characterized by:
- **Atmospheric Depth:** Using a deep navy base with layered glassmorphism to create a sense of infinite digital space.
- **Precision:** Ultra-thin borders and tight typography tracking that suggest surgical accuracy.
- **Responsiveness:** Fluid motion and glowing hover states that make the interface feel alive and reactive to user intent.
- **Premium Restraint:** High whitespace and a focused accent palette that highlights success and intelligence without overwhelming the senses.

## Colors
The color strategy relies on a foundational **Deep Navy (#0B0F19)** to provide a canvas for vibrant, neon-inflected accents. 

- **Primary (Indigo):** Used for core actions and primary brand identity.
- **Secondary (Violet):** Used for supplemental branding and depth in gradients.
- **Tertiary (Emerald):** Reserved exclusively for positive outcomes, success states, and high-match scores.
- **Glassmorphism:** Use `surface-slate` with varying opacities (30% to 60%) combined with a `backdrop-blur-xl` to create tiered surfaces. Borders should use `glass-stroke` for an ultra-thin, premium feel.

## Typography
The typography system creates high contrast between **Outfit** (geometric and technical) and **Plus Jakarta Sans** (humanist and readable).

- **Headings:** Always use Outfit with negative letter-spacing (tracking) to create a "locked-in" technical appearance.
- **Body:** Use Plus Jakarta Sans with generous line height (leading) to ensure maximum readability against the dark background.
- **Labels:** Small labels and metadata should be uppercase with increased letter spacing to provide a systematic, labeled feel like a technical schematic.

## Layout & Spacing
The layout follows a **fluid grid** model with significant breathing room between sections.

- **Grid:** Use a 12-column grid for desktop with 24px gutters. Content should be centered with a max-width of 1200px.
- **Rhythm:** Vertical spacing should be aggressive (64px+) between major sections to emphasize the "Minimalist" portion of the aesthetic.
- **Mobile:** Transition to a single-column layout with 16px side margins. Large display type should scale down using the mobile-specific tokens to prevent clipping.

## Elevation & Depth
Depth is created through **translucency and inner luminescence** rather than heavy drop shadows.

- **Tonal Layers:** The primary background is the lowest level. Cards sit on "Glass" layers (`bg-slate-900/40`) with `backdrop-blur-xl`.
- **Inner Glow:** Instead of standard shadows, use a subtle 1px inner-border (stroke) that is slightly lighter than the surface color to simulate a thin edge catch-light.
- **Ambient Glow:** Primary interactive elements (like the "Analyze" button) utilize an indigo-tinted outer glow (`shadow-indigo-500/20`) to appear as if they are light sources.

## Shapes
The shape language is defined by **large, soft radii** that contrast with the "sharp" technical nature of the AI.

- **Primary Containers:** Use a minimum of 24px (rounded-3xl) for main cards and forms.
- **Buttons & Inputs:** Follow the pill-shaped or high-radius convention (16px+) to make the UI feel approachable and modern.
- **Interactive States:** On hover, shapes should not change radius, but can subtly "inflate" via scale transforms (e.g., `scale-102`) to feel responsive.

## Components

### Buttons
- **Primary:** Gradient from Indigo to Violet. 24px radius. Inner glow on the top edge. 
- **Hover:** Increase saturation and apply a soft glow shadow. Active state scales to 0.98 for tactile feedback.

### Cards
- **Construction:** `backdrop-blur-xl` + `bg-slate-900/40` + `border-glass-stroke`.
- **Details:** 32px padding. If the card is interactive, the border should brighten to `indigo-500/50` on hover.

### Input Fields
- **Style:** Deep background (`slate-950/50`) with a 1px border. 
- **Focus:** Border transitions to Indigo with a subtle outer ring. Text uses Plus Jakarta Sans for clarity.

### Chips & Badges
- **Success (Emerald):** Low opacity background (`emerald-500/10`) with solid text. 
- **Technical:** Use a monospaced font for score values to emphasize the "Analyzer" aspect.

### Progress & Scanning
- **The "Scan" Line:** A horizontal gradient line (Indigo) that moves vertically across the resume upload area during the analysis phase. Use a `pulseGlow` animation for the active container.