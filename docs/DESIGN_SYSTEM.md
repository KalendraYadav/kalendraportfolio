# Design System Specification
## Project: Kalendra Yadav — Personal Developer Portfolio

**Version**: 1.0.0  
**Phase**: Phase 1 — Specification & Architecture  
**Status**: Implementation-Ready  
**Design Direction**: Neo-Brutalism + Pop Art + Interactive Editorial Storytelling  
**Last Updated**: October 2026  

---

## 1. Design Philosophy & Aesthetic Core

The visual identity of this portfolio balances raw architectural boldness with vibrant pop-art energy and clean editorial precision.

```
+-----------------------------------------------------------------------------------+
|                                THE THREE PILLARS                                  |
+-----------------------------------------------------------------------------------+
| 1. NEO-BRUTALISM          | 2. POP ART ACCENTS        | 3. EDITORIAL CLARITY      |
| - 3px/4px solid black     | - Red & Blue duotone      | - Clear typographical     |
|   borders                 |   screenprint portrait    |   hierarchy               |
| - Hard rectangular drop   | - Halftone dot patterns   | - High readability body   |
|   shadows (0px blur)      | - Angled tape labels      |   copy                    |
| - Cyber yellow surfaces   | - High-contrast cyan/pink | - Structured architecture |
| - Tactile physical press  |   stickers                |   case studies            |
|   feedback                | - Comic-inspired energy   | - Zero visual clutter     |
+-----------------------------------------------------------------------------------+
```

### Core Design Rules
1. **No Soft Gradients or Blurry Shadows**: Shadows are strictly hard offsets (`#0A0A0A` with `0px blur, 0px spread`). Gradients are forbidden except for graphic pop-art halftone matrices.
2. **High-Contrast Geometry**: Clean rectangular containers, bold divider rules, and sharp 90-degree corners or minimal 4px rounded radius (never bubbly pill cards).
3. **Physical Tactility**: Interactive elements behave like physical objects—they lift on hover and depress into the page on click.
4. **Editorial Respect for Information**: Decorative stickers and bold headlines exist to highlight real accomplishments, not obscure them.

---

## 2. Color System & Semantic Tokens

All color decisions are governed by strict contrast rules and semantic intent.

```
       #FFE600                  #0A0A0A                 #FFFFFF
[ CYBER YELLOW (60%) ]    [ INK BLACK (25%) ]    [ PURE WHITE (10%) ]
  Main Hero Canvas,         Borders, Shadows,       Card Canvas,
  Primary Action Buttons    Headings, Text          High-Legibility Copy

             #0047FF                 #FF3333                 #00E5FF                 #FF2A85
       [ COBALT BLUE (2%) ]    [ POP RED (1%) ]        [ CYBER CYAN (1%) ]     [ POP PINK (1%) ]
         Duotone Midtone,        Duotone Highlight,      Offset Backing,         Sticker Labels,
         Technical Tags          Alert/Hot Badges        Active Status Dot       Tape Highlights
```

### 2.1 Color Palette Specifications

| Token Name | Hex Code | Semantic Role | Intended Usage | Prohibited Usage |
| :--- | :--- | :--- | :--- | :--- |
| `color-primary-yellow` | `#FFE600` | Signature Hero Canvas & Primary CTAs | Hero background, primary buttons, major section callouts. | Never use as text color on light backgrounds. |
| `color-surface-white` | `#FFFFFF` | Readability Canvas | Project card backgrounds, modal bodies, input fields. | Never blend with soft gray gradients. |
| `color-canvas-cream` | `#FAF7EE` | Secondary Section Canvas | Background for long-form reading sections (Skills, Experience, About). | Do not use for primary CTA buttons. |
| `color-ink-black` | `#0A0A0A` | Structural Line & Typography | All borders, hard drop shadows, body text, high-impact headings. | Never lighten to muddy gray (`#777`) for essential text. |
| `color-text-muted` | `#525252` | Secondary Metadata | Timestamps, file sizes, supplementary labels, tag prefixes (`//`). | Never use for body copy or headlines. |
| `color-accent-blue` | `#0047FF` | Pop Art Duotone & Code Accent | Portrait duotone midtone, code tag highlights, focus rings. | Never use for large background expanses. |
| `color-accent-red` | `#FF3333` | Pop Art Duotone & Urgency | Portrait duotone highlights, `HOT!` stickers, error states. | Never use for long text blocks. |
| `color-accent-cyan` | `#00E5FF` | Tech Accent & Frame Backing | Portrait offset backing frame, active status pill, graphic stars. | Never place white text on cyan (fails contrast). |
| `color-accent-pink` | `#FF2A85` | Graphic Pop Accent | Tape labels, sticky notes, secondary badges (`NEW`). | Never use as main page background. |
| `color-accent-green` | `#22C55E` | Verification & Success | Live demo indicator dot, success state confirmation. | Do not use for generic borders. |

### 2.2 Contrast & Accessibility Audit

| Background Color | Foreground Color | Calculated Contrast Ratio | WCAG 2.2 AA Compliance |
| :--- | :--- | :---: | :---: |
| `#FFE600` (Cyber Yellow) | `#0A0A0A` (Ink Black) | **15.34 : 1** | Pass (Exceeds AAA) |
| `#FFFFFF` (Pure White) | `#0A0A0A` (Ink Black) | **19.80 : 1** | Pass (Exceeds AAA) |
| `#FAF7EE` (Canvas Cream) | `#0A0A0A` (Ink Black) | **18.42 : 1** | Pass (Exceeds AAA) |
| `#0A0A0A` (Ink Black) | `#FFE600` (Cyber Yellow) | **15.34 : 1** | Pass (Exceeds AAA) |
| `#0A0A0A` (Ink Black) | `#FFFFFF` (Pure White) | **19.80 : 1** | Pass (Exceeds AAA) |
| `#00E5FF` (Cyber Cyan) | `#0A0A0A` (Ink Black) | **13.41 : 1** | Pass (Exceeds AAA) |
| `#FF2A85` (Pop Pink) | `#0A0A0A` (Ink Black) | **6.12 : 1** | Pass (AA Regular, AAA Large) |
| `#0047FF` (Cobalt Blue) | `#FFFFFF` (Pure White) | **8.58 : 1** | Pass (Exceeds AAA) |

---

## 3. Typography System

We pair an idiosyncratic, geometric display typeface with a world-class, ultra-legible body typeface and an engineering monospace accent.

### 3.1 Typeface Selection
- **Display & Headings**: `Space Grotesk` (Google Font / SIL OFL). Heavy, eccentric geometric sans-serif that embodies neo-brutalist tech personality.
- **Body & Long-form**: `Inter` (Google Font / SIL OFL). Pristine readability at small sizes, optimal x-height, and neutral editorial tone.
- **Monospace & Metadata**: `JetBrains Mono` (Google Font / Apache 2.0). Code snippets, section numbers (`// 01`), timestamps, and tech badges.

### 3.2 Typographic Hierarchy & Scale

| Level | Font Family | Size (Mobile) | Size (Desktop) | Weight | Line Height | Tracking | Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Title** | `Space Grotesk` | `2.75rem` (44px) | `5.0rem` (80px) | `800` (Bold) | `0.95` | `-0.04em` | UPPERCASE |
| **H1 (Hero Lead)** | `Space Grotesk` | `2.25rem` (36px) | `3.75rem` (60px) | `800` (Bold) | `1.0` | `-0.03em` | UPPERCASE |
| **H2 (Section)** | `Space Grotesk` | `1.75rem` (28px) | `2.5rem` (40px) | `700` (Bold) | `1.1` | `-0.02em` | UPPERCASE |
| **H3 (Card Title)**| `Space Grotesk` | `1.25rem` (20px) | `1.5rem` (24px) | `700` (Bold) | `1.2` | `-0.01em` | Normal / Title |
| **Lead Paragraph** | `Inter` | `1.125rem` (18px)| `1.25rem` (20px) | `500` (Medium)| `1.5` | `-0.01em` | Sentence Case |
| **Body Regular** | `Inter` | `1.0rem` (16px) | `1.0rem` (16px) | `400` (Regular)| `1.6` | `0` | Sentence Case |
| **Body Small** | `Inter` | `0.875rem` (14px)| `0.875rem` (14px)| `400` (Regular)| `1.5` | `0` | Sentence Case |
| **Mono Label** | `JetBrains Mono`| `0.75rem` (12px) | `0.8125rem` (13px)| `600` (SemiBold)| `1.4` | `+0.05em` | UPPERCASE |

### 3.3 Typography Usage Rules
- All major section headers use `Space Grotesk` in **UPPERCASE** with an editorial prefix (e.g., `// 01. FEATURED PROJECTS`).
- Long-form descriptions, case-study narratives, and bio paragraphs **must always use `Inter` in sentence case** for maximum readability. Never set long paragraphs in all-caps display fonts.
- Monospace is reserved for metadata, dates, tech stack pills, and status tags.

---

## 4. Borders, Hard Shadows, and Corners

Neo-brutalist depth is created through **physical line weight and solid geometric offsets**, never blurry diffusion.

### 4.1 Border Thickness Scale
- `border-thin`: `2px solid #0A0A0A` (Used for small badges, tags, and internal table dividers).
- `border-standard`: `3px solid #0A0A0A` (Default for buttons, cards, input fields, and navbar).
- `border-heavy`: `4px solid #0A0A0A` (Used for hero portrait frame, modal dialog borders, and main section dividers).

### 4.2 Hard Shadow Scale (Solid Black, Zero Blur)
- `shadow-sm`: `2px 2px 0px #0A0A0A` (Small badges, pressed button state).
- `shadow-md` (Default): `4px 4px 0px #0A0A0A` (Standard cards, resting buttons, interactive pills).
- `shadow-lg` (Hero/Accent): `6px 6px 0px #0A0A0A` (Hovered cards, hero portrait frame, modal dialogs).
- `shadow-xl`: `8px 8px 0px #0A0A0A` (Signature hero callout blocks).

### 4.3 Corner Radii (Deliberate Box Geometry)
- `rounded-none` (`0px`): Default for sections, divider strips, table cells, and marquee banners.
- `rounded-sm` (`2px`–`4px`): Default for buttons, cards, and modal frames (provides a subtle refined edge without looking like bubble gum).
- `rounded-full`: Reserved strictly for status indicator dots (e.g., live green pulse) or avatar circles.

---

## 5. Spacing, Grid, and Layout System

### 5.1 Spacing Scale (4px Base Grid)
- `space-1`: `4px`
- `space-2`: `8px`
- `space-3`: `12px`
- `space-4`: `16px` (Default card padding on mobile)
- `space-6`: `24px` (Default card padding on desktop)
- `space-8`: `32px` (Internal section gutter)
- `space-12`: `48px` (Major component separation)
- `space-16`: `64px` (Section vertical padding on mobile)
- `space-24`: `96px` (Section vertical padding on desktop)

### 5.2 Container Widths & Gutters
- `max-w-7xl` (`1280px`): Maximum page content container width.
- `max-w-4xl` (`896px`): Maximum reading width for case study modals and about text.
- Desktop Gutters: `px-6 lg:px-8` (Ensures hard shadows never clip the browser viewport edge).
- Mobile Gutters: `px-4` (`16px` minimum padding).

### 5.3 Responsive Breakpoints
- `sm`: `640px` (Tablets portrait)
- `md`: `768px` (Tablets landscape / small laptops)
- `lg`: `1024px` (Desktop)
- `xl`: `1280px` (Large Desktop)

---

## 6. Component Style Specifications

### 6.1 Buttons

```
Resting:
+-------------------------------+
|  EXPLORE PROJECTS ➔           |  <-- 3px border-black, bg-primary-yellow
+-------------------------------+--+
   |  4px solid black hard shadow  |
   +-------------------------------+

Hover:
Translates -2px, -2px; shadow expands to 6px 6px 0px #0A0A0A

Active (Click):
Translates +2px, +2px; shadow collapses to 0px 0px 0px (Tactile snap!)
```

- **Primary Button**: Background `#FFE600`, Text `#0A0A0A`, Border `3px solid #0A0A0A`, Shadow `4px 4px 0px #0A0A0A`.
- **Secondary Button**: Background `#FFFFFF`, Text `#0A0A0A`, Border `3px solid #0A0A0A`, Shadow `4px 4px 0px #0A0A0A`.
- **Accent Button (Hot/Danger)**: Background `#FF2A85`, Text `#FFFFFF`, Border `3px solid #0A0A0A`, Shadow `4px 4px 0px #0A0A0A`.
- **Accessibility**: Explicit `focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-black focus-visible:ring-offset-2`. Minimum touch target size: `44px x 44px`.

### 6.2 Project Cards
- **Structure**:
  - Window Header Strip: Background `#0A0A0A` with title in `#FFFFFF` and retro dots `[● ■ ✕]` or category badge.
  - Image Container: 16:9 ratio, border-bottom `3px solid #0A0A0A`, duotone/high-contrast thumbnail.
  - Content Body: Pure white background `#FFFFFF`, padding `24px`.
  - Tag Row: Flex wrap of tech stack pills.
  - Footer Action Strip: Grid of action buttons (`[Case Study]`, `[GitHub]`, `[Live Demo]`).
- **Shadow**: `shadow-[4px_4px_0px_#0A0A0A]` resting; `shadow-[6px_6px_0px_#0A0A0A]` on hover.

### 6.3 Tape & Sticker Badges
- **Appearance**: Monospace uppercase text inside a high-contrast container rotated slightly (`rotate-[-2deg]` or `rotate-[2deg]`).
- **Types**:
  - `HOT!` / `NEW`: Background `#FF2A85`, text white, border `2px solid #0A0A0A`.
  - `SECTION INDEX`: Background `#0A0A0A`, text yellow, border `2px solid #0A0A0A`.
  - `STATUS: LIVE`: Background `#22C55E`, text black, border `2px solid #0A0A0A` with pulsing green circle.

### 6.4 Marquee Ticker Banner
- **Appearance**: Full-width container with top and bottom `3px solid #0A0A0A` borders.
- **Palette**: Background `#0A0A0A`, Text `#FFE600` (or inverted for secondary ticker).
- **Typography**: `JetBrains Mono`, `text-sm md:text-base font-bold uppercase tracking-widest`.
- **Items**: Delimited by double slashes: `FULL-STACK // ARCHITECTURE // REACT // NODE.JS // HIGH PERFORMANCE //`.
- **Behavior**: Seamless infinite scroll at `25s` per loop. Automatically pauses on hover or keyboard focus.

---

## 7. Pop-Art Portrait Art Direction

The hero portrait is the signature emotional anchor of the portfolio.

```
+-----------------------------------------------------------+
|               POPART PORTRAIT FRAME ANATOMY               |
+-----------------------------------------------------------+
|  +-----------------------------------------------------+  |
|  | [ STATUS: ONLINE ]                  // DEV_ID: KY01 |  | <-- Top Brutalist Bar
|  +-----------------------------------------------------+  |
|  |  +-----------------------+                          |  |
|  |  | CYAN OFFSET BACKING   |                          |  | <-- Cyber Cyan #00E5FF
|  |  |  +-----------------+  |                          |  |
|  |  |  | RED & BLUE      |  |                          |  | <-- Pop-Art Portrait
|  |  |  | DUOTONE IMAGE   |  |                          |  |     (Halftone Texture)
|  |  |  |                 |  |                          |  |
|  |  |  +-----------------+  |                          |  |
|  |  +-----------------------+                          |  |
|  +-----------------------------------------------------+  |
|  |  4px solid black border // 6px solid black shadow   |  |
+-----------------------------------------------------------+
```

### 7.1 Image Treatment Pipeline
1. **Pose & Expression**: Confident, forward-facing or upward-angled three-quarters portrait (reminiscent of Reference 2 and Reference 5).
2. **Duotone Color Separation**:
   - Deep Shadows: Ink Black (`#0A0A0A`).
   - Midtones: Cobalt Blue (`#0047FF`).
   - Highlights: Pop Red (`#FF3333`).
3. **Halftone Screenprint Effect**: Subtle circular dot matrix overlaid on midtone-to-highlight gradients to evoke classic graphic printmaking.
4. **Frame Composition**: Placed inside a solid white or cyan backing container with a `4px solid black` outline and `6px solid black` offset drop shadow.

---

## 8. Interaction & Animation Guidelines

All animations must satisfy the **"Tactile Physics"** rule:
- **Duration**: Fast and snappy (`100ms`–`200ms` for micro-interactions; `300ms` for section reveals).
- **Easing**: Crisp deceleration curve (`ease-out` or `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Accessibility**: Strict respect for `prefers-reduced-motion: reduce`. When active:
  - Positional translations are set to `none`.
  - Infinite marquee stops and displays as a clean static wrap list.
  - Content fades in immediately (`opacity: 1`) without vertical translation.

---

## 9. Design Do’s and Don’ts

```
DO:
[✓] Use 3px or 4px solid black borders to frame every interactive element.
[✓] Use hard offset drop shadows (4px 4px 0px #0A0A0A) with zero blur.
[✓] Pair cyber yellow (#FFE600) with stark black (#0A0A0A) for maximum punch.
[✓] Use Inter for long-form reading so engineering explanations remain effortless to absorb.
[✓] Make buttons visually snap down into the page when clicked.
[✓] Hide unverified project links gracefully rather than showing disabled buttons.

DON'T:
[✗] Do NOT use soft, blurry box shadows (e.g., box-shadow: 0 10px 30px rgba(0,0,0,0.1)).
[✗] Do NOT use generic purple-gradient glassmorphic cards.
[✗] Do NOT set multi-sentence paragraphs in all-caps display fonts.
[✗] Do NOT use floating decorative circles that obscure text or navigation.
[✗] Do NOT use more than 3 distinct font families.
[✗] Do NOT introduce slow, floaty 2-second scroll animations that delay content access.
```
