export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-white/8 gap-6">
          {/* Brand */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-black text-sm">
              A
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white">AND Events Management LLC</h3>
              <p className="text-xs text-[#999] font-light">Creating Extraordinary Events Across Dubai</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] flex items-center justify-center bg-white/6 rounded-lg text-[#999] hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] flex items-center justify-center bg-white/6 rounded-lg text-[#999] hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] flex items-center justify-center bg-white/6 rounded-lg text-[#999] hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-6">
          <p className="text-sm text-[#999] font-light">
            © 2026 AND Events Management LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
