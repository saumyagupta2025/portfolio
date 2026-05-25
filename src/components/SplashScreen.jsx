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
      {/* Center content */}
      <div className="text-center px-8">
        <h1
          className="font-serif text-[3rem] font-medium text-[#1c1917] tracking-tight leading-tight fade-up"
          style={{ animationDelay: '100ms' }}
        >
          Saumya Gupta
        </h1>

        <div
          className="mx-auto mt-5 mb-5 h-px w-16 bg-[#d6d3d1] fade-in"
          style={{ animationDelay: '500ms' }}
        />

        <p
          className="text-[#78716c] text-[0.9375rem] leading-relaxed fade-up"
          style={{ animationDelay: '600ms' }}
        >
          Welcome to my corner of the internet.
        </p>

        {/* Loading dots */}
        <div
          className="mt-10 flex items-center justify-center gap-2 fade-in"
          style={{ animationDelay: '800ms' }}
        >
          <span className="loading-dot w-1.5 h-1.5 rounded-full bg-[#a8a29e] inline-block" />
          <span className="loading-dot w-1.5 h-1.5 rounded-full bg-[#a8a29e] inline-block" />
          <span className="loading-dot w-1.5 h-1.5 rounded-full bg-[#a8a29e] inline-block" />
        </div>
      </div>

      {/* Progress bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f0efed]">
        <div className="loading-bar h-full bg-[#1c1917]" />
      </div>
    </div>
  )
}
