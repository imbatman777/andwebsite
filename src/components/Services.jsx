import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const events = [
  {
    title: 'Gala Dinner Night',
    img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
  },
  {
    title: 'Concert Spectacular',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
  },
  {
    title: 'Corporate Summit',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
  {
    title: 'Grand Wedding',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },
  {
    title: 'Anniversary Celebration',
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
  },
  {
    title: 'Private Party',
    img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
  },
  {
    title: 'Award Ceremony',
    img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
  },
  {
    title: 'Product Launch',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    title: 'Charity Gala',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
  },
  {
    title: 'Music Festival',
    img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
  },
  {
    title: 'Fashion Show',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  },
  {
    title: 'Networking Event',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
  },
]

function EventCard({ event }) {
  return (
    <div className="event-gallery-card group">
      {/* Image */}
      <img
        src={event.img}
        alt={event.title}
        className="event-gallery-img"
        loading="lazy"
      />

      {/* Reddish Hover Overlay */}
      <div className="event-gallery-overlay">
        {/* Icons */}
        <div className="event-gallery-icons">
          <div className="event-gallery-icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div className="event-gallery-icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="event-gallery-text">
          <h4 className="event-gallery-title">{event.title}</h4>
          <p className="event-gallery-desc">
            Real Event Photos with the event description will be displayed here
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', updateScrollButtons, { passive: true })
      updateScrollButtons()
      return () => el.removeEventListener('scroll', updateScrollButtons)
    }
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.event-gallery-card')?.offsetWidth || 300
      const scrollAmount = cardWidth * 2 + 16
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="services" className="events-gallery-section">
      <div className="events-gallery-container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="events-gallery-heading">
            Events We Create
          </h2>
          <p className="events-gallery-subtitle">
            EVENTS IS OUR ONLY PASSION AND BUSINESS
          </p>
        </motion.div>

        {/* Scrollable Gallery */}
        <div className="events-gallery-wrapper">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className={`events-gallery-arrow events-gallery-arrow-left ${!canScrollLeft ? 'events-gallery-arrow-hidden' : ''}`}
            aria-label="Scroll left"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Gallery Track */}
          <div ref={scrollRef} className="events-gallery-track">
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className={`events-gallery-arrow events-gallery-arrow-right ${!canScrollRight ? 'events-gallery-arrow-hidden' : ''}`}
            aria-label="Scroll right"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Read More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a href="#contact" className="events-gallery-readmore">
            READ MORE
          </a>
        </motion.div>
      </div>
    </section>
  )
}
