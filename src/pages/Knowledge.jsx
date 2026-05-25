import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { knowledgeNotes } from '../lib/content'

const ALL = 'All'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

export default function Knowledge() {
  const categories = [ALL, ...Array.from(new Set(knowledgeNotes.map(n => n.category))).sort()]
  const [active, setActive] = useState(ALL)

  const filtered = active === ALL
    ? knowledgeNotes
    : knowledgeNotes.filter(n => n.category === active)

  return (
    <div className="space-y-10">
      <section>
        <h1 className="font-serif text-[2rem] font-medium text-[#1c1917] tracking-tight">Notes</h1>
        <p className="mt-3 text-[#78716c] text-sm leading-relaxed">
          Summaries and deep-dives on topics I'm exploring —
          a public version of my Obsidian vault.
          <br />
          <span className="text-[#a8a29e] text-xs font-mono">
            To add a note: create <code className="bg-[#f5f5f4] px-1.5 py-0.5 rounded text-[0.75rem] border border-[#e7e5e4]">src/content/knowledge/my-note.md</code>
          </span>
        </p>
      </section>

      <hr className="border-[#e7e5e4]" />

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
              active === cat
                ? 'bg-[#1c1917] text-[#faf9f6] border-[#1c1917]'
                : 'text-[#78716c] border-[#e7e5e4] hover:border-[#d6d3d1] hover:text-[#44403c]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notes list */}
      {filtered.length === 0 ? (
        <p className="text-[#a8a29e] text-sm">No notes in this category yet.</p>
      ) : (
        <ul className="space-y-5">
          {filtered.map(note => (
            <li key={note.slug}>
              <Link
                to={`/knowledge/${note.slug}`}
                className="group flex items-start justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-sm text-[#1c1917] group-hover:text-[#1d4ed8] transition-colors font-medium">
                      {note.title}
                    </span>
                    <span className="text-xs text-[#78716c] bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0 rounded shrink-0">
                      {note.category}
                    </span>
                  </div>
                  {note.summary && (
                    <p className="text-xs text-[#78716c] leading-relaxed line-clamp-2">{note.summary}</p>
                  )}
                  <span className="text-xs text-[#a8a29e] font-mono mt-1 block">
                    Updated {formatDate(note.updated)}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="shrink-0 mt-1 text-[#d6d3d1] group-hover:text-[#1d4ed8] transition-colors"
                />
              </Link>
              <hr className="border-[#f5f5f4] mt-5" />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
