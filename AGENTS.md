# Belouran Webshop — AI Agent Guidelines & Architecture Map

This document serves as an immediate context reference for AI coding agents (Antigravity, Gemini, Claude, Cursor, etc.) working on the **Belouran Webshop** codebase. It provides a complete map of project conventions, component hierarchy, state management, design tokens, and build commands to minimize context lookups and reduce token usage.

---

## 1. Project Overview & Tech Stack

- **Framework**: React 19 (`react`, `react-dom`)
- **Bundler & Dev Server**: Vite 8 (`vite`)
- **Language**: TypeScript 6 (`typescript`, `@types/react`, `@types/node`)
- **Routing**: React Router v7 (`react-router-dom`)
- **Styling**: Vanilla CSS with CSS custom properties (`index.css` + scoped component CSS files)
- **Linter**: Oxlint (`oxlint`)

---

## 2. Directory & Architecture Structure

```
Belouran-Webshop/
├── public/                 # Static assets (images, logos, favicon)
├── src/
│   ├── assets/             # Raw product images & visual media
│   ├── components/         # Reusable UI components
│   │   ├── BelouranLogo/   # SVG & branding logos
│   │   ├── Cart/           # Drawer cart modal & item rows
│   │   ├── Header/         # Navigation header & cart trigger
│   │   ├── ProductCard/    # Grid item presentation & hover states
│   │   └── ProductGrid/    # Layout grid for catalog display
│   ├── context/            # Global React Context
│   │   └── CartContext.tsx # Shopping cart state & drawer toggle
│   ├── data/
│   │   └── products.ts     # Mock product data source
│   ├── pages/              # Route views
│   │   ├── Home.tsx / .css           # Main catalog / hero page
│   │   └── ProductDetail.tsx / .css  # Product detail view
│   ├── types/
│   │   └── index.ts        # Core TypeScript interfaces (Product, CartItem, CartState)
│   ├── App.tsx             # Main router configuration & layout frame
│   ├── index.css           # Design tokens, variables & base resets
│   └── main.tsx            # React application entry point
├── AGENTS.md               # [THIS FILE] AI Agent project guide
├── index.html              # HTML entry point
├── package.json            # Scripts & dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build & plugin configuration
```

---

## 3. Core Data Schemas (`src/types/index.ts`)

```typescript
export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  images: string[];
  category: string;
  collection: string;
  sizes: string[];
  description: string;
  soldOut?: boolean;
  emitterColor?: string;
  accentColor?: string;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}
```

---

## 4. Key Design System & CSS Variables (`src/index.css`)

```css
:root {
  --bg-color: #0e0e0e;
  --bg-color-mid: #111111;
  --surface: #1a1a1a;
  --surface-2: #222222;
  --accent-color: #ffffff;
  --accent-dim: rgba(255, 255, 255, 0.6);
  --accent-dimmer: rgba(255, 255, 255, 0.15);
  --brand-blue: #2b3990;
  --checkout-red: #e60000;
  --border-color: rgba(255, 255, 255, 0.12);
  --header-height: 50px;
  --cart-width: 420px;
  --font-mono: 'Space Mono', monospace;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --ease-out: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 5. Frequently Used Commands

- **Development Server**: `npm run dev`
- **TypeScript & Production Build**: `npm run build`
- **Lint Check**: `npm run lint`
- **Preview Build**: `npm run preview`

---

## 6. Coding Conventions & Best Practices for Agents

1. **Vanilla CSS Discipline**: Avoid adding Tailwind or external CSS frameworks unless requested. Always consume CSS variables from `src/index.css` for background colors, surface elevation, borders, and typography.
2. **Type Safety**: Strictly type all props, state, and API parameters using definitions in `src/types/index.ts`.
3. **Cart Context**: Consume cart functionality via `useCart()` hook from `src/context/CartContext.tsx`.
4. **Token Efficiency**: Check this `AGENTS.md` file before performing wide directory reads. Refer directly to component paths without unneeded directory listing commands.
5. **Verification**: Always run `npm run build` or `npm run lint` after modifying TypeScript files or React components to ensure build compliance.
