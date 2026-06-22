import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Professional Event Planning',
    desc: 'Strategic planning from concept to completion with meticulous attention to every detail.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'End-to-End Event Execution',
    desc: 'Seamless management of vendors, logistics, and on-site coordination for flawless delivery.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Customized Experiences',
    desc: 'Bespoke event solutions tailored to your brand identity and audience expectations.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
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

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left */}
          <AnimatedSection>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.6rem)] font-bold text-dark leading-tight mb-5">
              About AND Events Management
            </h2>
            <div className="w-14 h-[3px] bg-primary rounded-full" />
          </AnimatedSection>

          {/* Right */}
          <div>
            <AnimatedSection delay={0.15}>
              <p className="text-[1.05rem] text-muted leading-[1.9] font-light mb-10">
                AND Events Management LLC is a Dubai-based event planning and management
                company specializing in creating memorable experiences for corporate and
                private clients. From concept development to flawless execution, our team
                handles every detail to ensure successful events that leave lasting
                impressions.
              </p>
            </AnimatedSection>

            <div className="flex flex-col gap-4">
              {features.map((feature, i) => (
                <AnimatedSection key={feature.title} delay={0.25 + i * 0.1}>
                  <div className="flex items-start gap-4 p-5 bg-light-bg rounded-xl hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 group">
                    <div className="w-12 h-12 min-w-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-dark mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
