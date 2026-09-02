---
name: belouran-dev
description: Workflow cheat sheet for developing features, adding products, styling, and verifying the Belouran Webshop application.
---

# Belouran Webshop Development Skill

Use this skill when extending the Belouran Webshop codebase, adding products, modifying cart logic, or building new UI pages.

## Quick Workflow Checklist

### 1. Adding a New Product
1. Open [`src/data/products.ts`](file:///Users/darazsaron/Belouran-Webshop/Belouran-Webshop/src/data/products.ts).
2. Append a new product object matching the `Product` interface from [`src/types/index.ts`](file:///Users/darazsaron/Belouran-Webshop/Belouran-Webshop/src/types/index.ts).
3. Specify valid `slug`, `images`, `sizes`, `collection`, `price`, `currency`, `emitterColor`, and `accentColor`.

### 2. Creating a New UI Component
1. Create directory `src/components/<ComponentName>/`.
2. Add `<ComponentName>.tsx` and optional `<ComponentName>.css`.
3. Import CSS variables from `src/index.css` for consistent dark theme styling.

### 3. Adding a New Route
1. Create the page view in `src/pages/<PageName>.tsx` and `src/pages/<PageName>.css`.
2. Add the `<Route>` definition in [`src/App.tsx`](file:///Users/darazsaron/Belouran-Webshop/Belouran-Webshop/src/App.tsx).

### 4. Verification Commands
- `npm run dev`: Launch Vite dev server on local port.
- `npm run build`: Verify TypeScript compilation and Vite production bundle.
- `npm run lint`: Run Oxlint check.
