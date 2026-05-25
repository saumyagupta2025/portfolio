# Content Guide

How to update every section of this site. No code knowledge required beyond editing these files.

---

## Blog Posts

**File location:** `src/content/blog/`

Create a new `.md` file for each post. The filename becomes the URL slug.

```
src/content/blog/my-post-title.md  →  /blog/my-post-title
```

**Template:**
```markdown
---
title: "Your Post Title"
date: "2025-06-01"
tags: ["LLM", "GenAI"]
excerpt: "One sentence shown in the blog list."
---

Your post content here in markdown.

## Subheading

Paragraphs, **bold**, *italic*, `inline code`, [links](https://example.com).

\`\`\`python
# Code blocks work too
print("hello")
\`\`\`
```

**Available tag colours** (use these exact strings for auto-colouring):
- Blue: `LLM`, `GenAI`, `AI`, `AI/ML`, `Machine Learning`
- Indigo: `Evaluation`, `DeepEval`, `LangSmith`, `Research`, `Enterprise`
- Rose: `Agents`, `LangGraph`, `Automation`, `Multi-Agent`
- Violet: `LangChain`, `RAG`, `Vector DB`, `ChromaDB`, `Streamlit`
- Emerald: `Data Engineering`, `DBT`, `Databricks`, `PySpark`, `ETL`
- Sky: `Azure`, `AWS`, `Terraform`, `Docker`, `CI/CD`
- Amber: `Resources`, `Learning`
- Any other tag → neutral stone colour

---

## Notes (Knowledge Base)

**File location:** `src/content/knowledge/`

```
src/content/knowledge/my-note.md  →  /knowledge/my-note
```

**Template:**
```markdown
---
title: "RAG Architectures"
category: "AI/ML"
updated: "2025-06-01"
summary: "One sentence shown in the notes list."
tags: ["RAG", "LLM", "Vector DB"]
---

Note content here...
```

**Categories** (shown as filter buttons on the Notes page):  
Add any category string — it appears automatically in the filter bar.

---

## Projects

**File:** `src/data/projects.js`

```js
{
  name: 'My Project Name',
  date: 'Jun 2025',
  description: 'What it does and what makes it interesting.',
  tech: ['Python', 'LangChain', 'Streamlit'],
  github: 'https://github.com/saumyagupta2025/repo',  // or null
  demo: null,
  app: 'https://myapp.streamlit.app',  // shows a "Live app" badge — set null if none
},
```

Add new projects at the **top** of the array (most recent first).

---

## Library

**File:** `src/data/library.js`

### Books
```js
{
  title: 'Book Title',
  author: 'Author Name',
  status: 'reading',     // 'reading' | 'read' | 'want-to-read'
  tag: 'AI',
  notes: 'Optional one-line note.',
  link: null,            // or a URL
},
```

### YouTube Channels / Videos
```js
{
  title: 'Channel Name',
  description: 'What it covers.',
  url: 'https://youtube.com/@handle',
  type: 'channel',       // 'channel' | 'video'
  tag: 'AI/ML',
},
```

### Articles / Blogs
```js
{
  title: 'Blog or Article Title',
  source: 'domain.com',
  url: 'https://example.com',
  tag: 'AI/ML',
  notes: 'Optional note.',
},
```

---

## Now Section (Home page)

**File:** `src/data/now.js`

Update `updatedAt` and the `items` array whenever your focus changes.

```js
export const now = {
  updatedAt: 'June 2025',
  items: [
    'What you are working on.',
    'What you are learning or building.',
    'What you are reading.',
  ],
}
```

---

## About / Experience / Skills / Certifications

| What | File |
|------|------|
| Work experience bullets | `src/data/experience.js` |
| Skills list | `src/data/skills.js` |
| Publications | `src/data/publications.js` |
| Certifications | `src/data/certifications.js` |

All follow the same pattern — edit the array entries directly.

---

## Profile Photo

Replace `public/profile.png` with any image of the same name. Recommended: square crop, at least 200×200px.

---

## Social Links

Update the `href` values in two places:
- **Home page:** `src/pages/Home.jsx` → `socialLinks` array at the top
- **About page:** `src/pages/About.jsx` → the links array inside the header section

---

## Deploying Changes

```bash
cd ~/Desktop/portfolio-v2
npm run deploy
```

This builds and pushes to GitHub Pages automatically.
