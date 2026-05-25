import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../lib/content'
import { books } from '../data/library'
import { now } from '../data/now'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

const socialLinks = [
  { href: 'mailto:saumyagupta2025@gmail.com', label: 'Email' },
  { href: 'https://github.com/saumyagupta2025', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/saumya2029/', label: 'LinkedIn' },
  { href: 'https://twitter.com/saumya_812', label: 'Twitter' },
  { href: 'https://www.instagram.com/', label: 'Instagram' },   // UPDATE: add your handle
  { href: 'https://medium.com/', label: 'Medium' },             // UPDATE: add your profile
  { href: 'https://drive.google.com/file/d/1jJToGehjuY-_k25PzDQHH9KDiEj8EFL_/view', label: 'Resume' },
]

export default function Home() {
  const recentPosts = blogPosts.slice(0, 3)
  const currentlyReading = books.filter(b => b.status === 'reading').slice(0, 3)

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="pt-6">
        <div className="flex items-start gap-5 mb-4">
          <div className="w-20 h-20 rounded-full border border-[#e7e5e4] shrink-0 overflow-hidden">
            <img
              src="/profile.png"
              alt="Saumya Gupta"
              className="w-full h-full object-cover object-top scale-150"
            />
          </div>
          <div>
            <h1 className="font-serif text-[2.25rem] font-medium text-[#1c1917] leading-tight tracking-tight">
              Saumya Gupta
            </h1>
            <p className="mt-1 text-[#78716c] text-base">
              Data Engineer · Shell India
            </p>
          </div>
        </div>
        <p className="mt-5 text-[#44403c] leading-relaxed text-[0.9375rem] max-w-lg">
          I build GenAI evaluation frameworks, agentic systems, and data pipelines.
          Currently at Shell benchmarking LLMs and automating evaluation workflows —
          reduced manual effort by 90% through multi-agent automation.
          Starting at{' '}
          <span className="text-[#1c1917] font-medium">Georgia Tech Master's in CS</span>.
        </p>

        {/* Social links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="text-sm text-[#78716c] hover:text-[#1c1917] transition-colors border border-[#e7e5e4] hover:border-[#d6d3d1] px-3 py-1.5 rounded-md"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <hr className="border-[#e7e5e4]" />

      {/* Recent Writing */}
      <section>
        <h2 className="font-serif text-lg font-medium text-[#1c1917] mb-4">Blog</h2>
        {recentPosts.length === 0 ? (
          <p className="text-[#a8a29e] text-sm">No posts yet.</p>
        ) : (
          <ul className="space-y-3">
            {recentPosts.map(post => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex items-start justify-between gap-4"
                >
                  <div>
                    <span className="text-[#1c1917] text-sm group-hover:text-[#1d4ed8] transition-colors">
                      {post.title}
                    </span>
                    <div className="mt-0.5 flex gap-3 text-xs text-[#a8a29e] font-mono">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="shrink-0 mt-0.5 text-[#a8a29e] group-hover:text-[#1d4ed8] transition-colors"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link
          to="/blog"
          className="mt-4 inline-flex items-center gap-1 text-sm text-[#78716c] hover:text-[#1d4ed8] transition-colors"
        >
          All posts <ArrowRight size={13} />
        </Link>
      </section>

      <hr className="border-[#e7e5e4]" />

      {/* Currently Reading */}
      <section>
        <h2 className="font-serif text-lg font-medium text-[#1c1917] mb-4">Currently Reading</h2>
        {currentlyReading.length === 0 ? (
          <p className="text-[#a8a29e] text-sm">Nothing added yet.</p>
        ) : (
          <ul className="space-y-2">
            {currentlyReading.map(book => (
              <li key={book.title} className="text-sm">
                <span className="text-[#1c1917]">{book.title}</span>
                <span className="text-[#a8a29e]"> — {book.author}</span>
              </li>
            ))}
          </ul>
        )}
        <Link
          to="/library"
          className="mt-4 inline-flex items-center gap-1 text-sm text-[#78716c] hover:text-[#1d4ed8] transition-colors"
        >
          Full library <ArrowRight size={13} />
        </Link>
      </section>

      <hr className="border-[#e7e5e4]" />

      {/* Now */}
      <section>
        <div className="flex items-baseline gap-3 mb-4">
          <h2 className="font-serif text-lg font-medium text-[#1c1917]">Now</h2>
          <span className="text-xs text-[#a8a29e] font-mono">{now.updatedAt}</span>
        </div>
        <ul className="space-y-2">
          {now.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-[#44403c]">
              <span className="text-[#a8a29e] shrink-0 mt-px">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
