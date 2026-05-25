import { experience } from '../data/experience'
import { publications } from '../data/publications'
import { certifications } from '../data/certifications'
import { skills } from '../data/skills'

const socialLinks = [
  { href: 'mailto:saumyagupta2025@gmail.com', label: 'Email' },
  { href: 'https://github.com/saumyagupta2025', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/saumya2029/', label: 'LinkedIn' },
  { href: 'https://twitter.com/saumya_812', label: 'Twitter' },
  { href: 'https://medium.com/', label: 'Medium' },
  { href: 'https://leetcode.com/u/Saumya2029/', label: 'LeetCode' },
  { href: 'https://drive.google.com/file/d/1jJToGehjuY-_k25PzDQHH9KDiEj8EFL_/view', label: 'Resume' },
]

export default function Home() {
  return (
    <div className="space-y-12">

      {/* Hero */}
      <section className="pt-6 fade-up" style={{ animationDelay: '0ms' }}>
        <div className="flex items-center gap-5 mb-4">
          <div className="w-28 h-28 rounded-full border border-[#e7e5e4] shrink-0 overflow-hidden">
            <img
              src={import.meta.env.BASE_URL + 'profile.png'}
              alt="Saumya Gupta"
              className="w-full h-full object-cover scale-150"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          <div>
            <h1 className="font-serif text-[2.25rem] font-medium text-[#1c1917] leading-tight tracking-tight">
              Saumya Gupta
            </h1>
            <p className="mt-1 text-[#78716c] text-base">AI & Data Engineer</p>
          </div>
        </div>

        <p className="mt-5 text-[#44403c] leading-relaxed text-[0.9375rem]">
          I'm a data and AI engineer based in India, building GenAI evaluation frameworks,
          agentic workflows, and data pipelines at scale. My work sits at the intersection of
          large language models, data engineering, and MLOps — I care about making AI systems
          reliable, measurable, and efficient in production.
        </p>
        <p className="mt-3 text-[#44403c] leading-relaxed text-[0.9375rem]">
          I hold a B.Tech in Computer Science from Amity University and have
          published three papers in IEEE and international bioinformatics journals.
          Currently at Georgia Tech's Master's in Computer Science (ML & AI).
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="text-xs text-[#78716c] hover:text-[#1c1917] transition-colors border border-[#e7e5e4] hover:border-[#d6d3d1] px-2.5 py-1 rounded-md"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <hr className="border-[#e7e5e4] fade-in" style={{ animationDelay: '150ms' }} />

      {/* Experience */}
      <section className="fade-up" style={{ animationDelay: '200ms' }}>
        <h2 className="font-serif text-xl font-medium text-[#1c1917] mb-6">Experience</h2>
        <div className="space-y-8">
          {experience.map((job, i) => (
            <div key={i} className="fade-up" style={{ animationDelay: `${220 + i * 80}ms` }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <span className="text-[#1c1917] font-medium text-sm">{job.company}</span>
                  <span className="text-[#78716c] text-sm"> · {job.role}</span>
                </div>
                <span className="text-xs text-[#a8a29e] font-mono shrink-0">{job.period}</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-[#57534e]">
                    <span className="text-[#a8a29e] shrink-0 mt-px">·</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[#e7e5e4] fade-in" style={{ animationDelay: '420ms' }} />

      {/* Education */}
      <section className="fade-up" style={{ animationDelay: '460ms' }}>
        <h2 className="font-serif text-xl font-medium text-[#1c1917] mb-4">Education</h2>
        <div className="space-y-5">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <p className="text-[#1c1917] text-sm font-medium">Master of Science, Computer Science</p>
                <p className="text-[#78716c] text-sm">Georgia Institute of Technology · ML & AI</p>
              </div>
              <span className="text-xs text-[#a8a29e] font-mono shrink-0">2026 – present</span>
            </div>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <p className="text-[#1c1917] text-sm font-medium">B.Tech, Computer Science & Engineering</p>
                <p className="text-[#78716c] text-sm">Amity University, Noida · GPA 8.88/10</p>
              </div>
              <span className="text-xs text-[#a8a29e] font-mono shrink-0">Jul 2019 – Jul 2023</span>
            </div>
            <p className="mt-1 text-sm text-[#78716c]">Merit scholarship: 100% (2019–20), 50% (2022–23)</p>
          </div>
        </div>
      </section>

      <hr className="border-[#e7e5e4] fade-in" style={{ animationDelay: '580ms' }} />

      {/* Publications */}
      <section className="fade-up" style={{ animationDelay: '620ms' }}>
        <h2 className="font-serif text-xl font-medium text-[#1c1917] mb-4">Publications</h2>
        <ol className="space-y-5">
          {publications.map((pub, i) => (
            <li key={i} className="flex gap-3 fade-up" style={{ animationDelay: `${640 + i * 80}ms` }}>
              <span className="text-[#a8a29e] text-sm font-mono shrink-0 mt-0.5">{i + 1}.</span>
              <div>
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#1c1917] hover:text-[#1d4ed8] transition-colors underline underline-offset-3"
                >
                  {pub.title}
                </a>
                <p className="mt-0.5 text-xs text-[#78716c]">
                  {pub.venue} · {pub.pages} · {pub.date}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <hr className="border-[#e7e5e4] fade-in" style={{ animationDelay: '820ms' }} />

      {/* Skills */}
      <section className="fade-up" style={{ animationDelay: '860ms' }}>
        <h2 className="font-serif text-xl font-medium text-[#1c1917] mb-4">Skills</h2>
        <div className="space-y-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col sm:flex-row gap-1 sm:gap-0">
              <span className="text-xs text-[#a8a29e] font-mono w-36 shrink-0 pt-0.5">{category}</span>
              <p className="text-sm text-[#44403c]">{items.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[#e7e5e4] fade-in" style={{ animationDelay: '980ms' }} />

      {/* Certifications */}
      <section className="fade-up" style={{ animationDelay: '1020ms' }}>
        <h2 className="font-serif text-xl font-medium text-[#1c1917] mb-4">Certifications</h2>
        <ul className="space-y-1.5">
          {certifications.map((cert, i) => (
            <li key={i} className="flex items-baseline gap-3 text-sm">
              <span className="text-[#44403c]">{cert.name}</span>
              <span className="text-[#a8a29e] font-mono text-xs">{cert.year}</span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  )
}
