# Hello Agents

> Build AI agents from first principles — then ship something real.

Hello Agents is a polished, bilingual learning experience for people who want to understand AI-native agents by building them. The site turns a 16-chapter, five-part curriculum into a visual product with a strong editorial voice, practical builder notes, an evolving roadmap, and project-led learning.

## Highlights

- **Project-first curriculum** covering agent and LLM fundamentals, classic agent patterns, tools and frameworks, memory/context, multi-agent systems, and agentic reinforcement learning.
- **Bilingual content** with English and Chinese language switching.
- **Responsive visual system** with bold typography, acid-lime accents, fluid background motion, and accessible interaction states.
- **Interactive routes** for Home, About, Roadmap, Login, Terms, Privacy, and Cookies.
- **SEO-ready metadata** including Open Graph, Twitter cards, canonical URLs, web app manifest, and structured Course/Organization data.
- **Production-minded build** powered by Vite, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Lucide-style inline icon system
- Single-file production build via `vite-plugin-singlefile`

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

### Production build

```bash
npm run build
npm run preview
```

The optimized build is generated in `dist/`.

## Project structure

```text
src/
├── components/    Reusable navigation, sections, motion, and UI components
├── pages/         Route-level page compositions
├── auth.tsx       Lightweight demo authentication state
├── content.ts     Localized copy, legal text, roadmap, and curriculum data
├── data.ts        Shared typed content models and site data
├── i18n.tsx        Language provider and translation helpers
├── index.css      Global styles and design tokens
└── router.tsx     Client-side route state
public/            Favicon, app icon, manifest, robots.txt, and social preview
```

## Notes

This repository contains the front-end experience from the uploaded project archive. The login flow is currently a client-side demo and does not provide production authentication or persistence. Connect it to a real identity provider and backend before using it for real accounts.

## License

No license has been selected yet. Until a license is added, standard copyright applies to this repository.
