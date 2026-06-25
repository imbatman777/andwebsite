import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Our Works', to: 'services' },
  { label: 'Clients', to: 'clients' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-2xl shadow-[0_1px_30px_rgba(0,0,0,0.3)] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">

        {/* Desktop Menu — centered, larger, elegant */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              activeClass="!text-white after:!scale-x-100"
              className={`relative px-5 py-2.5 text-[0.85rem] tracking-[0.12em] uppercase font-medium cursor-pointer transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-[1.5px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                scrolled
                  ? 'text-white/60 hover:text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}

        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[6px] p-1.5 z-[1001] ml-auto"
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-[1.5px] rounded-full transition-all duration-300 ${
            mobileOpen
              ? 'rotate-45 translate-y-[7.5px] bg-dark'
              : 'bg-white'
          }`} />
          <span className={`w-7 h-[1.5px] rounded-full transition-all duration-300 ${
            mobileOpen
              ? 'opacity-0'
              : 'bg-white'
          }`} />
          <span className={`w-7 h-[1.5px] rounded-full transition-all duration-300 ${
            mobileOpen
              ? '-rotate-45 -translate-y-[7.5px] bg-dark'
              : 'bg-white'
          }`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 h-screen bg-[#111] z-[1000] shadow-[-10px_0_50px_rgba(0,0,0,0.5)] flex flex-col pt-24 px-8 gap-1"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={600}
                    activeClass="!text-primary"
                    className="block px-4 py-4 text-[0.95rem] tracking-[0.1em] uppercase font-medium text-white/50 hover:text-white hover:pl-6 cursor-pointer transition-all duration-300 border-b border-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
