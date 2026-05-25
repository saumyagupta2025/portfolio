import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getBlogPost } from '../lib/content'
import { tagClass } from '../lib/tagColors'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <div className="space-y-4">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-[#78716c] hover:text-[#1c1917] transition-colors">
          <ArrowLeft size={14} /> Writing
        </Link>
        <p className="text-[#a8a29e] text-sm">Post not found.</p>
      </div>
    )
  }

  return (
    <div>
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-[#78716c] hover:text-[#1c1917] transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Writing
      </Link>

      <article>
        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className={tagClass(tag)}>{tag}</span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-serif text-[1.875rem] font-medium text-[#1c1917] leading-tight tracking-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mt-3 flex items-center gap-3 text-xs text-[#a8a29e] font-mono">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <hr className="border-[#e7e5e4] my-8" />

        {/* Body */}
        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>

      <hr className="border-[#e7e5e4] mt-12 mb-6" />

      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-[#78716c] hover:text-[#1c1917] transition-colors"
      >
        <ArrowLeft size={14} /> All posts
      </Link>
    </div>
  )
}
