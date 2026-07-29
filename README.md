# Hackverge Website

The public marketing site for Hackverge, built from `HACKVERGE_WEBSITE_BLUEPRINT.docx`.
35 pages: Home, About, 3 Learning Paths, 13 Courses, Enterprise Labs, Career
Services, Success Stories, Instructors, 5 Blog posts, Contact, Apply, Login
(preview), Privacy, Terms.

## Why this isn't Next.js/React

The blueprint recommends Next.js + TypeScript + Tailwind. This site is instead
a **dependency-free static site**: hand-written HTML/CSS/vanilla JS, generated
by a small Node script (`build/build.mjs`) so components like the nav and
footer stay reusable instead of copy-pasted 35 times.

Two reasons:

1. The environment this was built in has no internet access to install
   packages, so `create-next-app` wasn't an option.
2. It's arguably better for your stated goal — **zero build step**, nothing to
   ever break with a dependency update, and it deploys to GitHub Pages exactly
   as-is. If you later want it rebuilt in Next.js/React (e.g. to add the
   Student Dashboard as a real logged-in app), the content in `build/data.mjs`
   is already structured as clean data you can port directly into React
   components.

## Project structure

```
hackverge/
├── build/
│   ├── data.mjs          ← ALL site content lives here (courses, paths, copy, etc.)
│   ├── components.mjs    ← shared HTML: nav, footer, cards, buttons, FAQ, CTA
│   ├── icons.mjs         ← hand-drawn outline icon set
│   ├── pages/*.mjs        ← one file per page/section of the site
│   ├── build.mjs         ← generates everything into /dist
│   └── serve.mjs         ← zero-dependency local preview server
├── dist/                  ← generated output (gitignored — built fresh each time)
├── .github/workflows/deploy.yml   ← auto-deploys to GitHub Pages on push
├── checklinks.mjs         ← crawls /dist and verifies every internal link resolves
└── package.json
```

## Editing content

Almost everything on the site — course descriptions, learning path details,
testimonials, blog posts, FAQs, instructor bios, contact info, social links —
lives in **`build/data.mjs`**. Edit that file, rebuild, and it propagates
everywhere the data is used (e.g. change a course's duration once, and it
updates on the course page, the courses index, and the learning path page).

Page *structure* (section order, headings, layout) lives in `build/pages/*.mjs`.
Visual design (colors, fonts, spacing) lives in `dist/css/styles.css` — see the
`:root` block at the top for every design token.

## Local preview

No `npm install` needed — this project has zero dependencies.

```bash
npm run serve
```

This builds the site and serves it at `http://localhost:8080`. Re-run after
any edit (there's no hot-reload).

## Deploying to GitHub Pages

### Option A — GitHub Actions (already set up, recommended)

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages → Source**, and select **"GitHub
   Actions."**
3. Push to `main` (or run the workflow manually from the **Actions** tab).

That's it — `.github/workflows/deploy.yml` builds the site and deploys it
automatically on every push. It also **auto-detects the right base path**:
- Repo named `yourname.github.io` → served at the root, no prefix.
- Any other repo name (e.g. `hackverge`) → served at
  `yourname.github.io/hackverge/`, and the workflow automatically prefixes
  every internal link so nothing breaks.
- If you add a custom domain (see below), it automatically switches back to
  root paths.

### Option B — Custom domain

1. Add a `CNAME` file (no extension) to `build/` containing just your domain,
   e.g. `www.hackverge.io` — copy it into `dist/` on build, or simplest: add
   it directly as `dist/CNAME` and also commit a copy at the repo root so the
   workflow's auto-detection sees it (`CNAME` at repo root **or** `dist/CNAME`
   both work).
2. Point your domain's DNS at GitHub Pages (see GitHub's own docs — search
   "GitHub Pages custom domain" — for current A/CNAME record values).
3. Update `site.url` in `build/data.mjs` to your real domain, then rebuild.

### Option C — Manual (no Actions)

```bash
npm run build
```

Commit the contents of `dist/` to a `gh-pages` branch (or `/docs` folder on
`main`) and point **Settings → Pages** at that branch/folder. With this
option you're responsible for setting `BASE_PATH` yourself if it's a project
page — see the comment block near the bottom of `build/build.mjs`.

## Before you consider this "launched"

A few things are intentionally marked as placeholders and should be replaced:

- **`site.url`, `site.email`, `site.phone`, `site.social.*`** in
  `build/data.mjs` — currently placeholder values.
- **Instructor profiles** (`instructors` in `data.mjs`) — generic placeholder
  bios/names. Replace with your real team, photos, and bios.
- **Testimonials** (`testimonials` in `data.mjs`) — explicitly labeled as
  placeholders in the copy itself, per the blueprint's own guidance not to
  fabricate alumni outcomes before you have real ones. Replace once you have
  genuine, permission-based testimonials.
- **`/privacy/` and `/terms/`** — placeholder legal text. Have these reviewed
  and written by someone qualified before launch.
- **Instructor/team photos** — currently there are no photo placeholders in
  the layout (cards use initials/icons instead); add real photos when ready.

## What's NOT built (and why)

Your blueprint's Sections 16–18 (**Student Dashboard/LMS, Authentication, Admin
Portal/CMS**) describe a full logged-in application with real accounts,
progress tracking, and content management — that requires a real backend and
database. A static site on GitHub Pages fundamentally can't do that (there's
no server to check a password against).

What's here instead:
- `/login/` is a **visual preview only** — the form doesn't authenticate
  anyone, and says so on the page.
- Nav links to it are unaffected, so the site doesn't feel broken.

**When you're ready to build the real thing**, the practical path is:
1. Pick a backend approach — e.g. a small Node/Express or NestJS API (as your
   blueprint suggests) with a hosted database (Postgres via a provider, etc.),
   or a backend-as-a-service (Supabase/Firebase) for a faster first version.
2. That backend gets deployed separately (GitHub Pages can't run it) — e.g. on
   Render, Railway, Fly.io, or similar.
3. The Student Dashboard frontend would most naturally be rebuilt in
   Next.js/React at that point anyway, since it needs real interactivity
   (auth state, live data) that a static site architecturally can't provide.

Happy to help design and build that phase whenever you're ready — it's a
separate, substantial project from the marketing site.

## Design system reference

Defined in `dist/css/styles.css` under `:root`:

- **Purple** (primary) `--purple-500: #6C4CF5`
- **Deep Navy** (background) `--navy-950: #05070F`
- **Electric Blue** (accent) `--cyan-400: #29E0FF`
- **Headings:** Space Grotesk · **Body:** Inter · **Data/labels:** JetBrains Mono
- **Spacing:** 8px grid · **Radius:** 8/12/16px (sm/md/lg)

Dark mode is the default (matches the brand); a light mode is fully
implemented and toggleable (top-right sun/moon icon), per your blueprint's
Rule 5.
