import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../lib/content'
import { tagClass } from '../lib/tagColors'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

function groupByYear(posts) {
  return posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear()
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {})
}

export default function Blog() {
  const grouped = groupByYear(blogPosts)
  const years = Object.keys(grouped).sort((a, b) => b - a)

  return (
    <div className="space-y-10">
      <section>
        <h1 className="font-serif text-[2rem] font-medium text-[#1c1917] tracking-tight">Blog</h1>
        <p className="mt-3 text-[#78716c] text-sm leading-relaxed">
          Thoughts on GenAI, data engineering, and things I'm figuring out.
          <br />
          <span className="text-[#a8a29e] text-xs font-mono">
            To add a post: create <code className="bg-[#f5f5f4] px-1.5 py-0.5 rounded text-[0.75rem] border border-[#e7e5e4]">src/content/blog/my-post.md</code>
          </span>
        </p>
      </section>

      <hr className="border-[#e7e5e4]" />

      {blogPosts.length === 0 ? (
        <p className="text-[#a8a29e] text-sm">No posts yet.</p>
      ) : (
        <div className="space-y-10">
          {years.map(year => (
            <section key={year}>
              <span className="text-xs text-[#a8a29e] font-mono mb-4 block">{year}</span>
              <ul className="space-y-4">
                {grouped[year].map(post => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group flex items-start justify-between gap-4"
                    >
                      <div>
                        <p className="text-sm text-[#1c1917] group-hover:text-[#1d4ed8] transition-colors">
                          {post.title}
                        </p>
                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#a8a29e]">
                          <span className="font-mono">{formatDate(post.date)}</span>
                          <span>{post.readingTime}</span>
                          {post.tags?.slice(0, 3).map(tag => (
                            <span key={tag} className={tagClass(tag)}>{tag}</span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight
                        size={14}
                        className="shrink-0 mt-0.5 text-[#d6d3d1] group-hover:text-[#1d4ed8] transition-colors"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
