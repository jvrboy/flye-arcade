# FLYE ARCADE

FLYE ARCADE is a cross-platform immersive commerce brand experience inspired by futuristic arcade aesthetics, glassmorphism UI, neon gradients, and cinematic 3D storytelling. The repository is structured as a monorepo so the brand can ship on the web, mobile, and desktop with a shared visual identity.

## Apps

- **apps/web** — Vite + React + TypeScript storefront prepared for Vercel deployment
- **apps/native** — Expo React Native app for Android and iOS
- **apps/desktop** — Tauri desktop shell for Windows and macOS using Rust

## Experience pillars

- 3D-first immersive shopping presentation
- Clothing, books, and beats as launch categories
- Futuristic arcade-inspired brand system
- Cross-platform foundation for later checkout, auth, and CMS integration

## Quick start

```bash
npm install
npm run dev:web
npm run dev:native
```

## Suggested next integrations

1. Stripe checkout
2. Sanity or Strapi product CMS
3. Cloudflare R2 or S3 asset hosting
4. PostgreSQL + Redis backend
5. WASM-powered audio and asset processing modules

## Deploy web to Vercel

The `apps/web` project is ready to be imported into Vercel as a standard Vite project. Use the web app directory as the root.
