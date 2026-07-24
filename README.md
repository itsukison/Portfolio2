# Itsuki Son — Portfolio

A bilingual portfolio for Tokyo-based creative engineer Itsuki Son. The site combines a Swiss-inspired editorial layout with motion, interactive project galleries, and English/Japanese content.

## Highlights

- Responsive single-page portfolio
- English and Japanese language toggle
- Animated hero, scroll reveals, and hover interactions
- Auto-rotating project galleries with manual navigation
- Dedicated philosophy, profile, and contact sections
- Project links that open in a new tab

## Tech stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/)
- [Framer Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/) via CDN

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/itsukison/Portfolio2.git
cd Portfolio2
npm install
npm run dev
```

Vite serves the site at [http://localhost:3000](http://localhost:3000).

No environment variables are required for the current portfolio.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
.
├── components/             # Page sections and reusable UI
│   ├── ui/                 # Shared interactive components
│   └── Projects.tsx        # Project metadata and gallery behavior
├── context/
│   └── LanguageContext.tsx # English/Japanese copy and language state
├── public/                 # Portfolio and project images
├── App.tsx                 # Page composition
├── index.html              # Fonts, Tailwind theme, and document shell
├── index.tsx               # React entry point
├── metadata.json           # App metadata
└── vite.config.ts          # Vite development and build configuration
```

## Updating the portfolio

Project URLs, years, tags, and ordered image arrays are defined in
`components/Projects.tsx`. Each project's English and Japanese name, title, and
description live at the matching array position in
`context/LanguageContext.tsx`.

Add project artwork to `public/` and reference it from the project image array
with an absolute public path, for example:

```ts
images: ["/project-1.png", "/project-2.png"]
```

Shared page copy is also localized in `context/LanguageContext.tsx`. When
changing text, update both the `en` and `ja` translation objects.

## Production

Create the deployable bundle with:

```bash
npm run build
```

The generated `dist/` directory can be deployed to any static host, including
Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Configure the host to run
`npm run build` and publish `dist`.

## License

This portfolio and its content are personal work. No license is granted for
reuse or redistribution.
