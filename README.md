# ISM Digital Portfolio (React + Vite)

Sleek, tab-based portfolio (HashRouter-friendly for GitHub Pages).

## 1) Install
```bash
npm install
npm run dev
```

## 2) Drop in your assets
Put these in `public/`:

- `resume.pdf` (your web-safe resume)
- `weekly-report.pdf` (your weekly report PDF)
- `me.jpg` (optional) and update `src/pages/AboutMe.jsx` image src
- `mentor.jpg` (optional) and update `src/pages/MentorBio.jsx` image src
- Replace `topic-graphic.svg` with your own graphic/logo if you want

## 3) Deploy to GitHub Pages (username site)
Because you're deploying to `shuklapratyushk.github.io`, make sure:

- Repo name is exactly `shuklapratyushk.github.io`
- `vite.config.js` has `base: "/"` (already set)
- In GitHub → Settings → Pages, set Source to **GitHub Actions** OR **Deploy from branch** (see below)

### Option A: gh-pages (simple)
```bash
npm run deploy
```
This publishes the `dist/` folder to a `gh-pages` branch.

Then GitHub → Settings → Pages:
- Source: Deploy from a branch
- Branch: `gh-pages` / folder `/ (root)`

### Option B: GitHub Actions (recommended)
Use the official Vite+Pages workflow. If you want, I can generate it for you too.

## Notes
- Uses HashRouter so refresh never 404s.
- Edit your blog entries in `src/data/blogs.js`.
- Add more assessment/project links in `src/data/links.js`.
