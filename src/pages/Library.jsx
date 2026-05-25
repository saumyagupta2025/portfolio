import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { books, videos, articles } from '../data/library'

const TABS = ['Books', 'Videos', 'Articles']

const statusLabel = { reading: 'Reading', read: 'Read', 'want-to-read': 'Want to read' }
const statusColor = {
  reading: 'text-[#1d4ed8] bg-blue-50 border-blue-100',
  read: 'text-[#78716c] bg-[#f5f5f4] border-[#e7e5e4]',
  'want-to-read': 'text-[#a8a29e] bg-[#f5f5f4] border-[#e7e5e4]',
}

function BookSection({ status, items }) {
  if (!items.length) return null
  return (
    <div className="mb-8">
      <h3 className="text-xs font-mono text-[#a8a29e] uppercase tracking-wide mb-4">
        {statusLabel[status]}
      </h3>
      <ul className="space-y-4">
        {items.map(book => (
          <li key={book.title}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-[#1c1917] font-medium">{book.title}</span>
                  <span className="text-sm text-[#78716c]">— {book.author}</span>
                </div>
                {book.notes && (
                  <p className="mt-1 text-xs text-[#78716c] leading-relaxed">{book.notes}</p>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-xs px-2 py-0.5 rounded border ${statusColor[status]}`}>
                  {statusLabel[status]}
                </span>
                {book.tag && (
                  <span className="text-xs text-[#a8a29e] bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded hidden sm:inline">
                    {book.tag}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Library() {
  const [tab, setTab] = useState('Books')

  const reading = books.filter(b => b.status === 'reading')
  const read = books.filter(b => b.status === 'read')
  const wantToRead = books.filter(b => b.status === 'want-to-read')

  return (
    <div className="space-y-10">
      <section>
        <h1 className="font-serif text-[2rem] font-medium text-[#1c1917] tracking-tight">Library</h1>
        <p className="mt-3 text-[#78716c] text-sm leading-relaxed">
          Things I read, watch, and recommend. Updated as I go.
          <br />
          <span className="text-[#a8a29e] text-xs font-mono">
            Edit <code className="bg-[#f5f5f4] px-1.5 py-0.5 rounded text-[0.75rem] border border-[#e7e5e4]">src/data/library.js</code> to add content.
          </span>
        </p>
      </section>

      <hr className="border-[#e7e5e4]" />

      {/* Tab bar */}
      <div className="flex gap-1 border-b border-[#e7e5e4]">
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-sm px-4 py-2 -mb-px border-b-2 transition-colors ${
              tab === t
                ? 'border-[#1c1917] text-[#1c1917] font-medium'
                : 'border-transparent text-[#78716c] hover:text-[#44403c]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Books */}
      {tab === 'Books' && (
        <div>
          <BookSection status="reading" items={reading} />
          <BookSection status="read" items={read} />
          <BookSection status="want-to-read" items={wantToRead} />
        </div>
      )}

      {/* Videos */}
      {tab === 'Videos' && (
        <ul className="space-y-5">
          {videos.map(v => (
            <li key={v.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#1c1917] hover:text-[#1d4ed8] transition-colors font-medium inline-flex items-center gap-1"
                    >
                      {v.title}
                      <ExternalLink size={11} className="text-[#a8a29e]" />
                    </a>
                    <span className="text-xs text-[#a8a29e] bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0 rounded">
                      {v.type}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#78716c] leading-relaxed">{v.description}</p>
                </div>
                <span className="text-xs text-[#a8a29e] bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded shrink-0">
                  {v.tag}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Articles */}
      {tab === 'Articles' && (
        <ul className="space-y-5">
          {articles.map(a => (
            <li key={a.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#1c1917] hover:text-[#1d4ed8] transition-colors font-medium inline-flex items-center gap-1"
                    >
                      {a.title}
                      <ExternalLink size={11} className="text-[#a8a29e]" />
                    </a>
                  </div>
                  <p className="text-xs text-[#a8a29e] font-mono mt-0.5">{a.source}</p>
                  {a.notes && (
                    <p className="mt-1 text-xs text-[#78716c] leading-relaxed">{a.notes}</p>
                  )}
                </div>
                <span className="text-xs text-[#a8a29e] bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded shrink-0">
                  {a.tag}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
