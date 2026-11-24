# Habeebu Rahman K C — Portfolio

A lightweight, personality-led portfolio built with Next.js App Router, TypeScript and Tailwind CSS v4, with a small custom CSS layer for design tokens, artwork and bespoke motion. The design combines a dark editorial layout, colorful hand-drawn-style CSS details, restrained motion, optional sound effects and playful interactions without shipping large animation libraries.

## Pages

- `/` — homepage with introduction, featured projects, skills, experience preview, education and contact.
- `/about` — conversational personal story, working style and lightweight code-themed illustrations.
- `/experience` — expanded professional timeline and education.
- `/journal` — technical notes landing page. It intentionally shows an honest empty state until original articles are published.
- `/rss.xml` — RSS 2.0 feed, ready for reviewed articles added to `lib/site.ts`.
- `/robots.txt` and `/sitemap.xml` — generated SEO endpoints.
- Custom not-found page.

Project summaries remain on the homepage. There are no individual project detail pages or thin project URLs.

## Styling system

This project uses Tailwind CSS v4 for layout, spacing, responsive behavior, typography and component composition.

- Tailwind theme tokens are defined in `app/globals.css` under `@theme` (for example `bg-portfolio-bg`, `text-portfolio-text`, `border-portfolio-line`).
- Shared CSS variables live in the `:root` design-token block and keep the bespoke visual layer consistent.
- `app/globals.css` retains only the custom styling that benefits from authored CSS: detailed illustrations, pseudo-elements, specialized animation, and component-specific art direction.
- `postcss.config.mjs` enables the Tailwind v4 PostCSS plugin.
- The project card layout uses Tailwind utilities and equal-height grid cards.

When adding new UI, prefer Tailwind utility classes. Add custom CSS only for visual effects or repeated patterns that are awkward to express with utilities.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before launch

1. Add a professional photograph at `public/images/profile.jpg` and replace the portrait placeholder in `app/page.tsx` with `next/image` and descriptive alt text.
2. Replace GitHub and LinkedIn placeholder URLs in `lib/site.ts`.
3. Add genuine, publishable project screenshots where available. Do not expose confidential admin screens or customer data.
4. Review project contribution descriptions to ensure they accurately reflect your role.
5. Publish only original, reviewed journal posts; the RSS feed is intentionally empty until then.
6. Confirm the domain `habeeburahman.com` is registered and DNS points to the production host before launch.

## SEO

- Page-specific metadata and canonical URLs.
- Person structured data.
- `/robots.txt`, `/sitemap.xml` and `/rss.xml`.
- Semantic page structure, descriptive link labels and responsive layout.

## Performance and accessibility

- No Three.js, GSAP, Lottie or large animation dependencies.
- CSS transitions and a small IntersectionObserver reveal component.
- Sound is opt-in and off by default; no autoplay audio or video.
- `prefers-reduced-motion` support and responsive layouts.
- Native server-rendered page content for search engines.

This package is source code only. It has not been deployed to the domain.


## Personal image assets

The portfolio now includes optimized WebP assets based on the profile photo and illustrated avatar supplied by Habeebu, plus a matching developer-workspace illustration.

- `public/images/profile/habeebu-photo.webp` — real portrait; used on the About page.
- `public/images/profile/habeebu-avatar.webp` — illustrated portrait; used as the homepage sticker and 404 character.
- `public/images/hero/developer-workspace.webp` — hero artwork on the homepage.

All three assets are local, optimized WebP files. The homepage hero image is prioritized; other images are lazy-loaded by Next.js.


## ZIP structure
This archive contains one project directory. Open this `habeebu-portfolio` folder directly in VS Code; do not open a nested duplicate project folder.
"# portfolio.v3" 
