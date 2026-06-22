import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.08)] py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={600}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white font-black text-sm">
            A
          </div>
          <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-dark' : 'text-white'
          }`}>
            AND<span className="text-primary">Events</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              activeClass="!text-primary !bg-primary/6"
              className={`px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all duration-300 ${
                scrolled
                  ? 'text-muted hover:text-primary hover:bg-primary/6'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={600}
            className="ml-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(160,0,0,0.3)]"
          >
            Get In Touch
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-1 z-[1001]"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-[2px] rounded-full transition-all duration-300 ${
            mobileOpen
              ? 'rotate-45 translate-y-[7px] bg-dark'
              : scrolled ? 'bg-dark' : 'bg-white'
          }`} />
          <span className={`w-6 h-[2px] rounded-full transition-all duration-300 ${
            mobileOpen
              ? 'opacity-0'
              : scrolled ? 'bg-dark' : 'bg-white'
          }`} />
          <span className={`w-6 h-[2px] rounded-full transition-all duration-300 ${
            mobileOpen
              ? '-rotate-45 -translate-y-[7px] bg-dark'
              : scrolled ? 'bg-dark' : 'bg-white'
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
              className="fixed inset-0 bg-black/50 z-[999]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-72 h-screen bg-white z-[1000] shadow-[-10px_0_40px_rgba(0,0,0,0.1)] flex flex-col pt-24 px-8 gap-1"
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
                    activeClass="!text-primary !bg-primary/6"
                    className="block px-4 py-3.5 text-base font-medium text-muted hover:text-primary hover:bg-primary/6 rounded-lg cursor-pointer transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-2"
              >
                <Link
                  to="contact"
                  smooth={true}
                  offset={-80}
                  duration={600}
                  className="block px-6 py-3.5 bg-primary text-white text-center text-sm font-semibold rounded-lg cursor-pointer hover:bg-primary-dark transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
