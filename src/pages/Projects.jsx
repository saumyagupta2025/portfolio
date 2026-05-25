import { Code2, ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="font-serif text-[2rem] font-medium text-[#1c1917] tracking-tight">Projects</h1>
        <p className="mt-3 text-[#78716c] text-sm leading-relaxed">
          Selected projects in GenAI, machine learning, and data engineering.
        </p>
      </section>

      <hr className="border-[#e7e5e4]" />

      <div className="space-y-10">
        {projects.map((project, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-serif text-lg font-medium text-[#1c1917]">{project.name}</h2>
                {project.app && (
                  <a
                    href={project.app}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#1d4ed8] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded hover:bg-blue-100 transition-colors"
                  >
                    Live app <ArrowUpRight size={11} />
                  </a>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs text-[#a8a29e] font-mono">{project.date}</span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#78716c] hover:text-[#1c1917] transition-colors"
                    aria-label="GitHub"
                  >
                    <Code2 size={15} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#78716c] hover:text-[#1c1917] transition-colors"
                    aria-label="Demo"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-2 text-sm text-[#57534e] leading-relaxed">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="text-xs text-[#78716c] bg-[#f5f5f4] border border-[#e7e5e4] px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            {i < projects.length - 1 && <hr className="border-[#e7e5e4] mt-10" />}
          </div>
        ))}
      </div>
    </div>
  )
}
