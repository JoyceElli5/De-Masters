import type { Config } from 'tailwindcss';

/**
 * Tailwind v4 — custom tokens live in globals.css @theme block.
 * This file provides content paths and documents the design tokens.
 *
 * Design tokens (defined in app/globals.css):
 *   --color-navy:       #002366  (primary — 60 %)
 *   --color-soft-white: #F8F9FA  (secondary — 30 %)
 *   --color-accent:     #D6001C  (accent — 10 %, CTAs only)
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
};

export default config;
