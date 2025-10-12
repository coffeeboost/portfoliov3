# G Tang — Portfolio (TypeScript, Vite, React, Tailwind)

- Nav: **Home • About • Projects • Blog • Contact**
- Home: Resume + Contact buttons, your headshot (IMG-20240620-WA0075.jpg)
- About: new copy, larger typography, Experience highlights, Toolkit generated from your resume
- Projects: fetches recent GitHub repos and shows them as cards
- Blog: Markdown posts rendered in neat cards (safe front‑matter parser)
- Contact: static form (Formspree placeholder) + mailto + GitHub link
- Background: large **Kaizen (改善)** calligraphy + **bigger gym icons** slowly drifting

## Run
```bash
npm i
npm run dev
```

## Build
```bash
npm run build && npm run preview
```

## Configure
- Put **IMG-20240620-WA0075.jpg** and **resume.pdf** in `/public`.
- Update `Contact.tsx` Formspree endpoint (replace `YOUR_FORMSPREE_ID`).
- If you want to change which repos show, edit `per_page` or add filters in `Projects.tsx`.

## Deploy
GitHub Pages workflow included at `.github/workflows/pages.yml`.


## Custom domain
A `CNAME` file for **gtang.ca** is included under `/public`. After DNS is set, enable the custom domain in GitHub → Settings → Pages.


## Project Overview
Personal portfolio for **G Tang** (Gordon Tang). Built with **Vite + React + Tailwind**, deployed to **GitHub Pages**, and served at **gtang.ca**.

### Scripts
```bash
npm i            # install
npm run dev      # local dev server
npm run build    # production build (outputs to dist/)
```

### Content (Blog)
Author short posts in YAML files under `content/posts/`:
```yaml
title: A tiny win
date:  2025-10-02
content: |
  Your text here. Multi-line is fine.
```

### Deployment
This repo contains a **GitHub Actions** workflow that builds and publishes to GitHub Pages on push to `main`. Custom domain is **gtang.ca**. Ensure DNS is configured and **Settings → Pages → Custom domain** is set.

### Ownership
Default owner in `/.github/CODEOWNERS` is `@coffeeboost`. 
