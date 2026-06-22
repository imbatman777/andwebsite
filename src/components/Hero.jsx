import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const stats = [
  { number: '500+', label: 'Events Delivered' },
  { number: '150+', label: 'Corporate Clients' },
  { number: '12+', label: 'Years Experience' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Luxury gala event"
          className="w-full h-full object-cover blur-[2px] brightness-[0.4] scale-105"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-primary-dark/40 to-black/70 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 pt-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white/90 text-xs font-medium tracking-widest uppercase mb-7"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Dubai's Premier Event Management
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-serif text-[clamp(2.5rem,6vw,4.2rem)] font-bold text-white leading-[1.15] mb-6 tracking-tight"
          >
            Creating Extraordinary Events Across{' '}
            <span className="text-primary-light">Dubai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[clamp(1rem,2vw,1.2rem)] text-white/70 leading-relaxed mb-10 max-w-xl font-light"
          >
            From corporate gatherings to grand celebrations, AND Events Management
            delivers unforgettable experiences tailored to every occasion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={600}
              className="inline-flex items-center gap-2 px-9 py-4 bg-primary text-white text-[0.95rem] font-semibold rounded-lg cursor-pointer shadow-[0_4px_20px_rgba(160,0,0,0.35)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(160,0,0,0.45)] transition-all duration-300"
            >
              Get In Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link
              to="services"
              smooth={true}
              offset={-80}
              duration={600}
              className="inline-flex items-center gap-2 px-9 py-4 bg-transparent text-white text-[0.95rem] font-semibold rounded-lg cursor-pointer border-[1.5px] border-white/35 hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-white/12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              >
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  {stat.number.replace('+', '')}
                  <span className="text-primary-light">+</span>
                </h3>
                <p className="text-xs text-white/50 font-normal uppercase tracking-[0.08em] mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
