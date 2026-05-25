// ── Markdown content loader ───────────────────────────────────
// Uses Vite's import.meta.glob to pick up all .md files eagerly.
// To add a blog post: create src/content/blog/my-post.md
// To add a knowledge note: create src/content/knowledge/my-note.md

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    const rawVal = line.slice(colonIdx + 1).trim()
    if (!key) continue

    if (rawVal.startsWith('[') && rawVal.endsWith(']')) {
      data[key] = rawVal
        .slice(1, -1)
        .split(',')
        .map(s => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      data[key] = rawVal.replace(/^["']|["']$/g, '')
    }
  }

  return { data, content: match[2] }
}

function readingTime(content) {
  const words = content.trim().split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}

const blogRaw = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const knowledgeRaw = import.meta.glob('../content/knowledge/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export const blogPosts = Object.entries(blogRaw)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const slug = path.split('/').pop().replace('.md', '')
    return { slug, ...data, content, readingTime: readingTime(content) }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export const knowledgeNotes = Object.entries(knowledgeRaw)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const slug = path.split('/').pop().replace('.md', '')
    return { slug, ...data, content }
  })
  .sort((a, b) => new Date(b.updated) - new Date(a.updated))

export const getBlogPost = slug => blogPosts.find(p => p.slug === slug)
export const getKnowledgeNote = slug => knowledgeNotes.find(n => n.slug === slug)
