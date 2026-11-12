# Belouran Webshop — Design System & Visual Specification

This document provides a comprehensive, structured design specification for **Belouran Webshop**. It contains all color tokens, typography scales, layout grids, visual aesthetics, component specs, micro-interactions, and animation keyframes formatted so that AI generators (such as Google Stitch, Figma AI, or code generators) can accurately recreate the complete visual design and frontend interface.

---

## 1. Brand Identity & Visual Aesthetic

- **Design Philosophy**: High-contrast, dark luxury, industrial streetwear aesthetic inspired by technical clothing labels (e.g., Cav Empt, Acronym, Cyberpunk minimalism).
- **Core Visual Markers**:
  - Deep obsidian dark surfaces with hairline borders (`rgba(255, 255, 255, 0.12)`).
  - High-density monospace typography mixed with bold uppercase sans-serif headers.
  - Interactive SVG ring emitters with continuous rotation around product media.
  - Backdrop blur glassmorphism for sticky navigation header and slide-out cart drawer.
  - Vivid accent callouts (Vibrant Brand Blue `#2b3990`, Checkout Red `#e60000`, Ambient Neon Emitters).

---

## 2. Design Tokens & Color Palette

### CSS Custom Properties (`src/index.css`)

```css
:root {
  /* Color Palette */
  --bg-color: #0e0e0e;          /* Main dark background */
  --bg-color-mid: #111111;      /* Secondary dark surface */
  --surface: #1a1a1a;           /* Product card media container background */
  --surface-2: #222222;         /* Disabled / sold out / elevated surfaces */
  --accent-color: #ffffff;      /* Primary text & high-contrast elements */
  --accent-dim: rgba(255, 255, 255, 0.6);   /* Secondary labels & subtext */
  --accent-dimmer: rgba(255, 255, 255, 0.15); /* Hairline borders & subtle elements */
  --brand-blue: #2b3990;        /* Brand accent blue */
  --checkout-red: #e60000;      /* High-priority checkout & alert color */
  --border-color: rgba(255, 255, 255, 0.12); /* Standard container border */

  /* Layout Dimensions */
  --header-height: 50px;
  --cart-width: 420px;

  /* Typography */
  --font-mono: 'Space Mono', monospace;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Motion Curves */
  --ease-out: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 3. Typography Scale & Guidelines

| Role | Font Family | Size / Weight | Letter Spacing | Case | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Brand Title** | `Inter` | 32px – 64px (clamp) / 900 | `0.35em` | Uppercase | Main hero brand statement |
| **Hero Manifesto** | `Space Mono` | 11px / 600 | `0.25em` | Uppercase | Hero subtitle / brand philosophy |
| **Section Titles** | `Space Mono` | 13px – 16px / 700 | `0.1em` | Uppercase | Page titles & drawer headers |
| **Product Titles** | `Space Mono` | 10px – 12px / 700 | `0.06em` | Uppercase | Catalog grid & cart item titles |
| **Product Detail Title**| `Space Mono` | 1.6rem (22px-26px) / 700 | `0.04em` | Uppercase | Main detail view title |
| **Body Descriptions**| `Inter` | 13px / 400 | Normal (`line-height: 1.7`) | Sentence | Extended product descriptions |
| **Ticker / Marquee** | `Space Mono` | 11px / 700 | `0.5px` | Uppercase | Header audio/status newsfeed |
| **Buttons & CTAs** | `Space Mono` | 11px – 14px / 700 | `0.1em` | Uppercase | Add to Cart, Checkout, Filters |

---

## 4. Branding & Vector Graphics

### 4.1 Belouran SVG Logo (`BelouranLogo.tsx`)
- **ViewBox**: `0 0 200 240`
- **Stroke Width**: `12px` (round linecaps and joins)
- **Geometry**:
  - Base Bar: `M 28 215 L 172 215`
  - Hood Contour: `M 32 215 L 75 130 L 18 122 L 132 22`
  - Inner Hanging Stem: `M 132 22 L 132 88` + Filled dot (`r=13` at `132,90`)
  - Right Bar & Ring: `M 172 215 L 172 70` + Hollow Circle Ring (`r=16` at `172,50`)
- **Variants**: `clean` (solid strokes) and `spray` (SVG `feTurbulence` + `feDisplacementMap` + `feGaussianBlur` glitch filter).

### 4.2 Rotating Emitter Ring (`ProductCard.tsx`)
- **ViewBox**: `0 0 200 200`
- **SVG Text Path**: Circular path (`d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"`)
- **Content**: Repeated uppercase metadata string (e.g. `SOLD OUT · PRODUCT NAME · S30 · COLLECTION · ` repeated 6 times).
- **Animation**: Continuous 40s 360-degree linear rotation (`@keyframes ring-spin`).
- **Color Accent**: Per-product custom `emitterColor` (e.g., `#00ff88`, `#ff0055`, `#00e1ff`, `#ffaa00`).

---

## 5. UI Component Specifications

### 5.1 Site Header (`Header.tsx` / `Header.css`)
- **Position**: `fixed`, `top: 0`, `left: 0`, `width: 100%`, `height: 50px`, `z-index: 300`.
- **Default State**: Background transparent.
- **Scrolled State**: `background: rgba(14, 14, 14, 0.85)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid var(--border-color)`.
- **Layout**:
  - **Left**: Belouran Logo (32px) + "BELOURAN" wordmark (900 weight, 16px).
  - **Center**: Masked infinite linear ticker (`now-playing`) with edge gradient mask (`linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)`).
  - **Right**: Link items (`LOOKS`, `STORES`, `ARCHIVE`) + Live Status Dot (10px green/white dot with expanding radar pulse ring) + Cart Trigger (`CART (Count)`).

### 5.2 Hero Section (`Home.tsx` / `Home.css`)
- **Background**: Ambient radial glow `radial-gradient(circle at center 30%, rgba(0, 255, 136, 0.04) 0%, transparent 70%)`.
- **Padding**: `60px 40px 40px`, centered flex layout with bottom border.
- **Elements**:
  - Logo emblem with drop shadow glow (`filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))`).
  - Hero Brand Title: Clamp 32px-64px bold text with wide letter-spacing (`0.35em`).
  - Subtitle Manifesto: Monospace 11px uppercase block text.
  - Animated Scroll Hint: Bouncing indicator arrow (`@keyframes bob`).

### 5.3 Catalog Product Grid & Cards (`ProductGrid.css` / `ProductCard.css`)
- **Grid Layout**: `grid-template-columns: repeat(4, 1fr)`, gap `90px 60px`, padding `60px 40px 120px`.
- **Card Structure**:
  - Aspect ratio: `1:1` square.
  - Inner media box: Dark background (`var(--surface)`), object-contain image padding `10px`.
  - Hover state:
    - Media image scales smoothly to `1.18x` (`transform: scale(1.18)`).
    - Circular SVG text ring fades in (`opacity: 1`) around media box.
    - Product title & price bar slides up from bottom (`translateY(0)`, `opacity: 1`).

### 5.4 Slide-out Cart Drawer (`Cart.css` / `Cart.tsx`)
- **Drawer Panel**: `fixed`, `top: 50px`, `right: 0`, `width: 420px`, `height: calc(100vh - 50px)`, `z-index: 700`.
- **Visual Style**: `background: rgba(14, 14, 14, 0.92)`, `backdrop-filter: blur(20px)`, `border-left: 1px solid var(--border-color)`.
- **Transition**: `transform: translateX(100%)` -> `translateX(0)` with `0.4s var(--ease-in-out)`.
- **Backdrop Scrim**: `fixed inset 0`, `background: rgba(0, 0, 0, 0.55)`, `z-index: 250`.
- **Checkout CTA**: Full-width button with background `--checkout-red` (`#e60000`), white uppercase text (`font-size: 14px`).

### 5.5 Product Detail Page (`ProductDetail.css`)
- **Layout**: 2-column grid (`1fr 420px`), gap `60px`, maximum width `1200px`.
- **Left Gallery**: Sticky product media container with square main image and thumbnail row below (`72px x 72px` active border indicators).
- **Right Details Panel**:
  - Collection tag in brand blue (`var(--brand-blue)`).
  - High-impact uppercase title & price block.
  - Size selection grid: `48px x 48px` monochrome buttons. Inverted theme on selection (`background: #ffffff`, `color: #0e0e0e`).
  - Error state trigger: Shake animation (`@keyframes shake`) + red outline (`var(--checkout-red)`).
  - Add to Cart button: High contrast white button, active feedback state (`background: var(--brand-blue)`).

---

## 6. Motion & Keyframe Animations

```css
/* Infinite Marquee Ticker */
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

/* Product Ring Emitter Spin */
@keyframes ring-spin {
  to { transform: rotate(360deg); }
}

/* Radar Live Dot Pulse */
@keyframes pulse-ring {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
}

/* Product Card Entrance Stagger */
@keyframes card-enter {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Cart Item Drawer Slide In */
@keyframes item-enter {
  to { opacity: 1; transform: translateX(0); }
}

/* Size Error Feedback Shake */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

/* Hero Scroll Hint Bounce */
@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}
```

---

## 7. Responsive Breakpoints & Adaptations

- **Desktop (>1200px)**: 4-column catalog grid, side-by-side product detail, header navigation links & marquee ticker visible.
- **Laptop / Small Desktop (900px – 1200px)**: 3-column catalog grid.
- **Tablet (500px – 900px)**: 2-column catalog grid, single-column product detail page, header navigation links hidden.
- **Mobile (<500px)**: 2-column compact catalog grid (gap `50px 20px`), cart drawer expands to `100vw`, header marquee ticker hidden to save space.
