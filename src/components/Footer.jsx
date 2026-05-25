export default function Footer() {
  return (
    <footer className="border-t border-[#e7e5e4]">
      <div className="max-w-3xl mx-auto px-8 py-8 flex items-center justify-between">
        <span className="font-serif text-[#78716c] text-sm">Saumya Gupta</span>
        <span className="text-[#a8a29e] text-sm">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
