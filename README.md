# Portfolio — Saumya Gupta

Personal portfolio site built with Vite + React + Tailwind CSS v4. Hosted on GitHub Pages at [saumyagupta2025.github.io/portfolio](https://saumyagupta2025.github.io/portfolio).

## Stack

- **Vite** — build tool
- **React** — UI
- **Tailwind CSS v4** — styling
- **react-markdown** — markdown rendering
- **gh-pages** — deployment

## Running locally

```bash
npm install
npm run dev
```

## Deploying

```bash
npm run deploy
```

Builds and pushes to the `gh-pages` branch automatically.

---

## How to update content

### Blog posts

Create a new file in `src/content/blog/`:

```
src/content/blog/my-post-title.md
```

With this frontmatter:

```yaml
---
title: "Post Title"
date: "2026-05-25"
tags: ["Tag1", "Tag2"]
excerpt: "A short description shown in the blog listing."
---

Your content here...
```

### Knowledge notes

Create a new file in `src/content/knowledge/`:

```
src/content/knowledge/my-note.md
```

With this frontmatter:

```yaml
---
title: "Note Title"
category: "System Design"
updated: "2026-05-25"
summary: "Short summary shown in the notes listing."
tags: ["Tag1", "Tag2"]
---

Your content here...
```

The `category` field controls the filter tags on the Notes page. Any new category value automatically appears as a filter button.

### Projects

Edit `src/data/projects.js`. Set `app` to a URL to show the "Live app" badge.

### Library (books, videos, podcasts, articles)

Edit `src/data/library.js`.

- Books: `status` can be `"reading"`, `"read"`, or `"want-to-read"`
- Videos: `type` can be `"video"` or `"channel"`

### Now section

Edit `src/data/now.js` — update `updatedAt` and the `items` array.

### Interests page (obsessions, learning, beliefs, setup)

Edit `src/data/personal.js`.

### Experience, education, skills, certifications

Edit the relevant file in `src/data/`:
- `experience.js`
- `skills.js`
- `certifications.js`

### Profile photo

Replace `public/profile.png`.
