function Globe() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" style={{ display: 'block' }}>
      <defs>
        <clipPath id="globe-clip">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>

      {/* Base */}
      <circle cx="32" cy="32" r="28" fill="#f5f4f1" />

      {/* Latitude lines */}
      <g clipPath="url(#globe-clip)" fill="none">
        <line x1="4" y1="18" x2="60" y2="18" stroke="#d6d3d1" strokeWidth="0.8" />
        <line x1="4" y1="32" x2="60" y2="32" stroke="#d6d3d1" strokeWidth="0.8" />
        <line x1="4" y1="46" x2="60" y2="46" stroke="#d6d3d1" strokeWidth="0.8" />
      </g>

      {/* Rotating meridians */}
      <g clipPath="url(#globe-clip)" fill="none">
        <ellipse cx="32" cy="32" rx="16" ry="28" stroke="#a8a29e" strokeWidth="1">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 32 32"
            to="360 32 32"
            dur="5s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse cx="32" cy="32" rx="16" ry="28" stroke="#c8c4bf" strokeWidth="0.8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="60 32 32"
            to="420 32 32"
            dur="5s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse cx="32" cy="32" rx="16" ry="28" stroke="#c8c4bf" strokeWidth="0.8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="120 32 32"
            to="480 32 32"
            dur="5s"
            repeatCount="indefinite"
          />
        </ellipse>
      </g>

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
      <div className="flex flex-col items-center gap-6 text-center px-8">
        {/* Globe */}
        <div className="fade-in" style={{ animationDelay: '100ms' }}>
          <Globe />
        </div>

        {/* Text */}
        <p
          className="font-serif text-[1.375rem] text-[#1c1917] tracking-tight leading-snug fade-up"
          style={{ animationDelay: '400ms' }}
        >
          Welcome to my corner of the internet.
        </p>
        <span
          className="text-xs text-[#a8a29e] font-mono fade-up"
          style={{ animationDelay: '650ms' }}
        >
          — Saumya
        </span>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#eeece8]">
        <div className="loading-bar h-full bg-[#78716c]" />
      </div>
    </div>
  )
}
