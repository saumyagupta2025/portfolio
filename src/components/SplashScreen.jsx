function Globe() {
  return (
    <svg viewBox="0 0 64 64" width="110" height="110" style={{ display: 'block' }}>
      <defs>
        <clipPath id="globe-clip">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
        <radialGradient id="globe-grad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f0efeb" />
          <stop offset="100%" stopColor="#e8e5e0" />
        </radialGradient>
      </defs>

      {/* Base */}
      <circle cx="32" cy="32" r="28" fill="url(#globe-grad)" />

      {/* Latitude lines */}
      <g clipPath="url(#globe-clip)" fill="none">
        <line x1="4" y1="14" x2="60" y2="14" stroke="#d6d3d1" strokeWidth="0.7" />
        <line x1="4" y1="22" x2="60" y2="22" stroke="#d6d3d1" strokeWidth="0.7" />
        <line x1="4" y1="32" x2="60" y2="32" stroke="#c8c4bf" strokeWidth="0.9" />
        <line x1="4" y1="42" x2="60" y2="42" stroke="#d6d3d1" strokeWidth="0.7" />
        <line x1="4" y1="50" x2="60" y2="50" stroke="#d6d3d1" strokeWidth="0.7" />
      </g>

      {/* Rotating meridians */}
      <g clipPath="url(#globe-clip)" fill="none">
        <ellipse cx="32" cy="32" rx="16" ry="28" stroke="#a8a29e" strokeWidth="1">
          <animateTransform attributeName="transform" type="rotate"
            from="0 32 32" to="360 32 32" dur="5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="32" cy="32" rx="16" ry="28" stroke="#c8c4bf" strokeWidth="0.8">
          <animateTransform attributeName="transform" type="rotate"
            from="60 32 32" to="420 32 32" dur="5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="32" cy="32" rx="16" ry="28" stroke="#c8c4bf" strokeWidth="0.8">
          <animateTransform attributeName="transform" type="rotate"
            from="120 32 32" to="480 32 32" dur="5s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Subtle shine */}
      <ellipse cx="24" cy="20" rx="8" ry="5" fill="white" opacity="0.18" />

      {/* Globe outline */}
      <circle cx="32" cy="32" r="28" fill="none" stroke="#78716c" strokeWidth="1.5" />
    </svg>
  )
}

export default function SplashScreen({ visible }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faf9f6]"
      style={{
        transition: 'opacity 0.7s ease',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'all' : 'none',
      }}
    >
      {/* Ambient dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { top: '18%', left: '12%', size: 3, delay: '0s' },
          { top: '72%', left: '8%',  size: 2, delay: '0.6s' },
          { top: '30%', left: '88%', size: 3, delay: '0.3s' },
          { top: '65%', left: '85%', size: 2, delay: '0.9s' },
          { top: '50%', left: '5%',  size: 2, delay: '1.2s' },
          { top: '20%', left: '78%', size: 2, delay: '0.5s' },
          { top: '80%', left: '55%', size: 3, delay: '0.8s' },
          { top: '15%', left: '45%', size: 2, delay: '1s'   },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#d6d3d1] fade-in"
            style={{
              top: dot.top, left: dot.left,
              width: dot.size, height: dot.size,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center gap-7 text-center px-8">
        <div className="fade-in" style={{ animationDelay: '100ms' }}>
          <Globe />
        </div>

        <div>
          <p
            className="font-serif text-[1.5rem] text-[#1c1917] tracking-tight leading-snug fade-up"
            style={{ animationDelay: '450ms' }}
          >
            Welcome to my corner of the internet.
          </p>
          <p
            className="mt-2 text-sm text-[#57534e] leading-relaxed fade-up"
            style={{ animationDelay: '650ms' }}
          >
            where you'll find my work, writing, what I'm learning — and a bit about me.
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#eeece8]">
        <div className="loading-bar h-full bg-[#a8a29e]" />
      </div>
    </div>
  )
}
