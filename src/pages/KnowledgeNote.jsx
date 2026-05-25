import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getKnowledgeNote } from '../lib/content'
import { tagClass } from '../lib/tagColors'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function KnowledgeNote() {
  const { slug } = useParams()
  const note = getKnowledgeNote(slug)

  if (!note) {
    return (
      <div className="space-y-4">
        <Link to="/knowledge" className="inline-flex items-center gap-1.5 text-sm text-[#78716c] hover:text-[#1c1917] transition-colors">
          <ArrowLeft size={14} /> Knowledge Base
        </Link>
        <p className="text-[#a8a29e] text-sm">Note not found.</p>
      </div>
    )
  }

  return (
    <div>
      <Link
        to="/knowledge"
        className="inline-flex items-center gap-1.5 text-sm text-[#78716c] hover:text-[#1c1917] transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Knowledge Base
      </Link>

      <article>
        {/* Category + tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {note.category && (
            <span className="text-xs text-[#1c1917] bg-[#f5f5f4] border border-[#e7e5e4] px-2 py-0.5 rounded font-medium">
              {note.category}
            </span>
          )}
          {note.tags?.map(tag => (
            <span key={tag} className={tagClass(tag)}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-serif text-[1.875rem] font-medium text-[#1c1917] leading-tight tracking-tight">
          {note.title}
        </h1>

        {/* Summary */}
        {note.summary && (
          <p className="mt-3 text-[#78716c] text-sm leading-relaxed">{note.summary}</p>
        )}

        {/* Meta */}
        <p className="mt-2 text-xs text-[#a8a29e] font-mono">
          Last updated {formatDate(note.updated)}
        </p>

        <hr className="border-[#e7e5e4] my-8" />

        {/* Body */}
        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.content}</ReactMarkdown>
        </div>
      </article>

      <hr className="border-[#e7e5e4] mt-12 mb-6" />

      <Link
        to="/knowledge"
        className="inline-flex items-center gap-1.5 text-sm text-[#78716c] hover:text-[#1c1917] transition-colors"
      >
        <ArrowLeft size={14} /> All notes
      </Link>
    </div>
  )
}
