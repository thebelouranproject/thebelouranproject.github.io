# Belouran Webshop — Workspace Rules & Guidelines

These rules apply automatically to all AI agent instances operating within the `Belouran-Webshop` workspace.

## 1. Code Style & Architecture Rules

- **Vanilla CSS Tokens**: Maintain the dark luxury aesthetic (`#0e0e0e`). Do NOT inline static hex colors when standard variables exist (`var(--bg-color)`, `var(--surface)`, `var(--accent-color)`, `var(--font-mono)`, `var(--font-sans)`).
- **React 19 Hooks & Context**: Use functional components with hooks. Access shopping cart state through `useCart()`.
- **TypeScript Rules**:
  - Keep types clean in `src/types/index.ts`.
  - Prefer strict interfaces over `any` or loose `object` types.
- **Component File Structure**:
  - Keep components modular under `src/components/<ComponentName>/<ComponentName>.tsx` and optional `<ComponentName>.css`.

## 2. Token Saving Practices

- **Targeted Reading**: Before reading full source files, refer to `AGENTS.md` to identify exact file locations.
- **Avoid Redundant Tool Calls**: Perform edits directly when paths and line numbers are clear.
- **Verification**: Run `npm run build` after completing structural changes to verify compilation.
