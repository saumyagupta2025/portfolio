import { now } from '../data/now'
import { obsessions, learning, beliefs, setup } from '../data/personal'

export default function Interests() {
  return (
    <div className="space-y-12">

      <section className="fade-up" style={{ animationDelay: '0ms' }}>
        <h1 className="font-serif text-[2rem] font-medium text-[#1c1917] tracking-tight">Interests</h1>
        <p className="mt-3 text-[#78716c] text-sm leading-relaxed">
          The stuff that lives outside the CV — what I'm into, thinking about, and learning.
        </p>
      </section>

      <hr className="border-[#e7e5e4] fade-in" style={{ animationDelay: '100ms' }} />

      {/* Now */}
      <section className="fade-up" style={{ animationDelay: '150ms' }}>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-serif text-lg font-medium text-[#1c1917]">Now</h2>
          <span className="flex items-center gap-1.5 text-xs text-[#a8a29e] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
            {now.updatedAt}
          </span>
        </div>
        <ul className="space-y-2">
          {now.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-[#44403c] fade-up" style={{ animationDelay: `${170 + i * 60}ms` }}>
              <span className="text-[#a8a29e] shrink-0 mt-px">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-[#e7e5e4] fade-in" style={{ animationDelay: '350ms' }} />

      {/* Things I'm obsessed with */}
      <section className="fade-up" style={{ animationDelay: '390ms' }}>
        <h2 className="font-serif text-lg font-medium text-[#1c1917] mb-4">Things I'm obsessed with</h2>
        <ul className="space-y-2">
          {obsessions.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-[#44403c] fade-up" style={{ animationDelay: `${410 + i * 60}ms` }}>
              <span className="text-[#a8a29e] shrink-0 mt-px">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-[#e7e5e4] fade-in" style={{ animationDelay: '580ms' }} />

      {/* Things I'm learning right now */}
      <section className="fade-up" style={{ animationDelay: '620ms' }}>
        <h2 className="font-serif text-lg font-medium text-[#1c1917] mb-4">Things I'm learning right now</h2>
        <ul className="space-y-2">
          {learning.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-[#44403c] fade-up" style={{ animationDelay: `${640 + i * 60}ms` }}>
              <span className="text-[#a8a29e] shrink-0 mt-px">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-[#e7e5e4] fade-in" style={{ animationDelay: '800ms' }} />

      {/* What I believe */}
      <section className="fade-up" style={{ animationDelay: '840ms' }}>
        <h2 className="font-serif text-lg font-medium text-[#1c1917] mb-4">What I believe</h2>
        <ul className="space-y-2">
          {beliefs.map((belief, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-[#44403c] fade-up" style={{ animationDelay: `${860 + i * 60}ms` }}>
              <span className="text-[#a8a29e] shrink-0 mt-px">·</span>
              <span>{belief}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-[#e7e5e4] fade-in" style={{ animationDelay: '1050ms' }} />

      {/* Favorite tools & setup */}
      <section className="fade-up" style={{ animationDelay: '1090ms' }}>
        <h2 className="font-serif text-lg font-medium text-[#1c1917] mb-4">Favorite tools & setup</h2>
        <div className="space-y-2">
          {setup.map(({ label, value }, i) => (
            <div key={label} className="flex text-sm fade-up" style={{ animationDelay: `${1110 + i * 50}ms` }}>
              <span className="text-xs text-[#a8a29e] font-mono w-24 shrink-0 pt-0.5">{label}</span>
              <span className="text-[#44403c]">{value}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
