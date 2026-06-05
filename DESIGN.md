---
name: Cinéma Noir Editorial
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dcdddd'
  on-secondary-container: '#5f6161'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#858383'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-xl:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '300'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  unit: 8px
  margin-mobile: 24px
  margin-desktop: 64px
  gutter: 32px
  section-gap: 120px
---

## Brand & Style

The design system is a minimalist editorial framework designed for high-end entertainment and culture. It evokes the feeling of a premium physical monograph or a cinematic title sequence. The target audience is discerning, valuing curation and artistic intent over visual noise. 

The aesthetic is grounded in **Minimalism** with a **Cinematic** edge. It prioritizes deliberate asymmetry, stark contrasts, and expansive whitespace to allow high-quality imagery to serve as the primary emotional driver. The interface remains quiet, acting as a sophisticated gallery frame for the content. There are no gradients, no decorative blurs, and no heavy shadows; depth is achieved through layering, scale, and meticulous typographic hierarchy.

## Colors

The palette is anchored by a soft off-white (#F5F5F5) which acts as the "canvas," reducing the harshness of pure white while maintaining an editorial feel. Headlines use Deep Black (#0A0A0A) for maximum impact, while Charcoal Grey (#333333) is reserved for metadata, captions, and secondary details to create a clear visual hierarchy.

The accent palette is used sparingly to denote context or mood. **Champagne** and **Cream** are used for elevated lifestyle content; **Olive** provides a natural, grounded feel; **Piano Black**, **Navy**, and **Deep Purple** are reserved for dark-mode transitions or "After Dark" entertainment sections to evoke an intimate nightlife atmosphere without relying on neon or vibrant glows.

## Typography

Typography is the cornerstone of this design system. We use **Montserrat** for headlines to provide a bold, geometric, and high-contrast presence. For large display sizes, tight letter spacing creates a compact, modern editorial look.

**Hanken Grotesk** is utilized for body text and labels. Its clean, sharp, and contemporary letterforms provide excellent legibility while maintaining a sophisticated "thin" appearance. Body text should always lean towards a lighter weight (300) to contrast against the heavy headlines. Use the `label-caps` style for section headers and navigation to mimic the look of architectural signage or magazine headers.

## Layout & Spacing

This design system employs an **Editorial Fluid Grid** that emphasizes asymmetry. 
- **Desktop:** A 12-column grid with wide 64px margins. Content should often be offset—for example, a headline might span columns 1-8 while the body text starts at column 5 and spans to 10.
- **Whitespace:** Generous vertical spacing (`section-gap`) is mandatory to separate distinct narratives or "acts."
- **Mobile:** A 4-column grid with 24px margins. To maintain the editorial feel, avoid centering everything; use left-aligned compositions with intentional empty blocks to create rhythm.

The goal is to avoid a "template" look. Elements should feel placed with intent, not just snapped to a uniform container.

## Elevation & Depth

Depth in the design system is achieved through **Tonal Layering** rather than shadows. 
- **Flat Planes:** All elements sit on the same physical plane. Hierarchy is established through size, color contrast (Black on Cream), and overlapping elements.
- **Overlays:** Imagery can slightly overlap text containers or other images to create a "collage" feel without adding drop shadows.
- **Outlines:** Use thin, 1px solid borders in #333333 or #0A0A0A for buttons and containers when on a light background. 
- **No Shadows:** Shadows are strictly prohibited. The UI should feel like ink on paper or a projection on a wall.

## Shapes

The design system uses a **Sharp** shape language (0px radius). All containers, images, and buttons must have hard 90-degree corners. This reinforces the architectural and professional nature of the brand, mimicking the edges of film frames or printed pages. Circular elements are only permitted for specific media controls (e.g., Play buttons) to provide a functional distinction from layout elements.

## Components

- **Buttons:** Primary buttons are solid #0A0A0A with #F5F5F5 text. Secondary buttons are 1px outlines with no fill. All buttons use the `label-caps` typography style.
- **Inputs:** Simple bottom-border only (1px solid #333333). Labels sit above in `label-caps`. Focus state changes the border to 2px solid #0A0A0A.
- **Cards:** Cards do not have background fills or shadows. They are defined by their content alignment and occasional 1px top-borders to separate items in a list.
- **Chips/Tags:** Small rectangular boxes with 1px borders, using 12px `label-caps` text.
- **Media Players:** Use "Piano Black" for video/audio player skins. Controls should be minimal, using thin-line iconography.
- **Lists:** Editorial lists use large numerals in Montserrat bold (e.g., 01, 02) followed by the Hanken Grotesk body text, separated by a horizontal rule.