# Akshat Kacodia — personal website

Built with [Astro](https://astro.build). Static HTML, a few KB of hand-written JS, self-hosted fonts (Geist, Geist Mono, Caveat).

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the build
```

Deploy on Vercel or Netlify: build command `npm run build`, output `dist`. Set `SITE_URL=https://your-domain` to emit canonical / Open Graph URLs.

## Add your real assets (nothing is faked)

Every missing asset shows a dashed placeholder on the page naming the exact file to add. Drop the file in and rebuild; no code changes needed.

| What | Where |
|---|---|
| Hero photo (4:5 portrait) | `public/images/akshat.jpg` (or .png / .webp) |
| Project screenshots | `public/work/<slug>/1.png`, `2.png`, … (phones: 9:19.5; ML projects: 16:10) |
| Résumé | `public/resume.pdf` |
| GitHub / LinkedIn / LeetCode URLs | `src/data/site.ts` |
| Project GitHub / Play Store links | `links` in `src/data/projects.ts` |

Slugs: `campus-sphere`, `ieee-nsut-app`, `farmassist`, `breakhis`, `waste-segregation`, `rag-research-ide`.

## Structure

```
src/
  data/site.ts          name, links, journey, toolkit
  data/projects.ts      projects + case-study writing
  lib/assets.ts         finds real photos/screenshots in /public at build time
  layouts/Base.astro    SEO, nav, footer, shared JS; `profile` prop = sticky profile card (home)
  pages/index.astro     Hero · Selected work · Experience & journey · Toolkit · Contact
  pages/work/[slug].astro  case study per project
  components/           Navbar ProfileCard Hero Work Journey Toolkit Contact Footer
  components/ui/        Button Icon Shot AssetSlot
  styles/global.css     tokens: colour, type scale, spacing, motion
```
