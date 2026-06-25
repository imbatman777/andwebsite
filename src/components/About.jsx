import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'

const carouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80',
    caption: 'Corporate Gala',
  },
  {
    src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80',
    caption: 'Conference Stage',
  },
  {
    src: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80',
    caption: 'Exhibition Setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
    caption: 'Outdoor Festival',
  },
  {
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80',
    caption: 'Networking Event',
  },
  {
    src: '/hero-bg.jpg',
    caption: 'Live Event Production',
  },
]

function AnimatedSection({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function CompactCarousel() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)

  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % carouselImages.length)
  }, [])

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(goToNext, 7000)
    }
    return () => clearInterval(timerRef.current)
  }, [isHovered, goToNext])

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.1)] group/carousel"
      style={{ aspectRatio: '4 / 3' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      {carouselImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? 'scale(1)' : 'scale(1.05)',
          }}
        >
          <img
            src={img.src}
            alt={img.caption}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Caption badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wide rounded">
          {carouselImages[current].caption}
        </span>
      </div>

      {/* Arrow buttons — always visible */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-all duration-300 cursor-pointer z-10"
        aria-label="Previous image"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % carouselImages.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-all duration-300 cursor-pointer z-10"
        aria-label="Next image"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? 'w-5 bg-white'
                : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] font-bold text-dark tracking-tight mb-4">
            <span className="text-primary">ABOUT</span> US
          </h2>
          <div className="w-14 h-[3px] bg-primary rounded-full mx-auto" />
        </AnimatedSection>

        {/* Two-column: Carousel left + Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Compact carousel */}
          <AnimatedSection delay={0.1}>
            <CompactCarousel />
          </AnimatedSection>

          {/* Right — About text */}
          <AnimatedSection delay={0.2}>
            <p className="text-[1.05rem] text-muted leading-[1.9] font-light mb-6">
              <span className="font-semibold text-dark">AND Events Management LLC</span> transforms
              celebrations into stories and moments into memories. We are a leading{' '}
              <span className="font-semibold text-dark">event management company in Dubai</span>,
              and we focus on creating events that inspire, engage, and connect.
            </p>
            <p className="text-[1.05rem] text-muted leading-[1.9] font-light mb-6">
              It is our business to make your vision come true and make it look beautiful
              and accurate, be it a gala dinner, a conference, an award ceremony, a product
              launch event, or a team-building event.
            </p>
            <p className="text-[1.05rem] text-muted leading-[1.9] font-light">
              Having years of experience and a creative touch, we established our name based
              on creativity, quality, and emotion. We deal with each detail, from concept to
              completion, venue choice, decoration, entertainment, and coordination — making
              every moment light and fantastic.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
