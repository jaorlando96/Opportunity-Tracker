# Opportunity Radar

A responsive, single-user MVP that helps professionals find and prioritize speaking, media, awards, and advisory opportunities. The current build uses realistic seeded data and browser persistence so the complete discovery-to-decision workflow can be tested without external credentials.

## Stack

- React 19 and Vite
- Plain CSS design system (responsive desktop and mobile layouts)
- Lucide icons
- Browser `localStorage` for profile and opportunity-status persistence

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`). Create a production bundle with `npm run build`.

## Deploy to GitHub Pages

The Vite build uses `/Opportunity-Tracker/` as its production base path. The
`Deploy to GitHub Pages` workflow builds and deploys the app whenever a commit is
pushed to `main`; it can also be started manually from the repository's Actions
tab. In the repository settings, set **Pages → Source** to **GitHub Actions**.

The deployed app will be available at:

```text
https://<github-username>.github.io/Opportunity-Tracker/
```

## MVP behavior

- Six opportunity categories with realistic seeded examples
- Personalized 0–100 scoring, verdicts, fit dimensions, gaps, and research briefs
- Search and category filtering
- Save, Pursuing, and Pass states that persist across refreshes
- Detailed opportunity pages with pitch recommendations and source links
- Editable local profile and matching preferences

## Discovery architecture

`src/services/research.js` defines the small provider contract for future automated discovery and enrichment. The next integration should be a search/research service (for example Tavily, Exa, or a search engine API), followed by a scheduled server job and a hosted relational database such as Postgres. Provider results should be normalized, deduplicated by canonical URL and organization/title, checked for expired deadlines, enriched, and scored before storage.

The current application intentionally does not include outreach, application writing, email automation, or CRM features.
