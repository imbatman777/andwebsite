import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with fade-in + blur */}
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1.02 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero-bg.jpg"
          alt="Event venue background"
          className="w-full h-full object-cover blur-[2px]"
        />
      </motion.div>

      {/* Multi-layer gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.85) 100%),
            radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)
          `,
        }}
      />

      {/* Subtle ambient light glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(160,0,0,0.2) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center text-center px-6 max-w-5xl mx-auto">

        {/* Top decorative badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
          <span className="text-[0.7rem] tracking-[0.35em] uppercase text-white/50 font-medium">
            Dubai's Premier Event Experience
          </span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/40" />
        </motion.div>

        {/* Main company name — dramatic typography */}
        <div className="relative">
          {/* Large decorative ampersand behind */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.04, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 text-[18rem] font-serif text-white pointer-events-none select-none leading-none"
            aria-hidden="true"
          >
            &amp;
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            {/* "AND" — bold serif */}
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="block font-serif text-[clamp(4rem,12vw,9rem)] font-bold text-primary-light leading-[0.9] tracking-[-0.02em]"
            >
              AND
            </motion.span>

            {/* "EVENTS" — elegant, wide tracking */}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(2.5rem,7vw,5.5rem)] font-extralight tracking-[0.3em] text-white leading-[1.1] mt-1"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              EVENTS
            </motion.span>
          </motion.h1>
        </div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.6, ease: 'easeOut' }}
          className="flex items-center gap-3 mt-8 mb-8"
        >
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/50" />
          <span className="w-2 h-2 border border-white/50 rotate-45" />
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/50" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-[0.75rem] tracking-[0.4em] uppercase text-white/40 font-medium mb-8"
        >
          Management LLC
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.0 }}
          className="text-[clamp(0.95rem,1.8vw,1.2rem)] text-white/60 leading-relaxed max-w-2xl font-light"
        >
          We craft unforgettable moments — from world-class corporate events to
          intimate celebrations. Where vision meets precision, extraordinary
          experiences come alive.
        </motion.p>

      </div>
    </section>
  )
}
