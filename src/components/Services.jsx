import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Gala Dinners',
    desc: 'Elegant evening events and corporate dinners.',
    img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80',
  },
  {
    title: 'Concerts',
    desc: 'Live music and entertainment events.',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
  },
  {
    title: 'Corporate Events',
    desc: 'Conferences, launches, and networking events.',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
  },
  {
    title: 'Weddings',
    desc: 'Luxury wedding planning and coordination.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
  {
    title: 'Anniversaries',
    desc: 'Memorable celebrations for special milestones.',
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
  },
  {
    title: 'Private Parties',
    desc: 'Exclusive social gatherings and celebrations.',
    img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative h-[340px] md:h-[340px] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover service-card-img"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/80 group-hover:from-primary-dark/20 group-hover:via-primary-dark/30 group-hover:to-black/85 transition-all duration-500" />

      {/* Arrow */}
      <div className="absolute top-5 right-5 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
        </svg>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-[2] translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-serif text-xl font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-sm text-white/70 font-light opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
          {service.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] font-bold text-dark mb-4 tracking-tight">
            Events We Create
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto font-light">
            Tailored experiences for every celebration and occasion.
          </p>
          <div className="w-14 h-[3px] bg-primary rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
