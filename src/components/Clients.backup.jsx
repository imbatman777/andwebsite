import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const clients = [
  { name: 'Emirates', initials: 'EK' },
  { name: 'Emaar', initials: 'EM' },
  { name: 'Dubai Holding', initials: 'DH' },
  { name: 'DAMAC', initials: 'DM' },
  { name: 'Nakheel', initials: 'NK' },
  { name: 'Dubai Chambers', initials: 'DC' },
  { name: 'Dubai Municipality', initials: 'DM' },
  { name: 'ADNOC', initials: 'AD' },
]

function ClientCard({ client, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
      className="group flex flex-col items-center justify-center p-10 bg-light-bg rounded-xl hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center gap-4"
    >
      <div className="w-20 h-20 flex items-center justify-center text-2xl font-extrabold text-light-text bg-white rounded-xl transition-all duration-300 tracking-tight group-hover:text-primary group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
        {client.initials}
      </div>
      <h4 className="text-sm font-semibold text-muted group-hover:text-dark transition-colors duration-300">
        {client.name}
      </h4>
    </motion.div>
  )
}

export default function Clients() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="clients" className="py-24 bg-white">
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
            Trusted By Leading Organizations
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto font-light">
            Partnering with the UAE's most prestigious brands and organizations.
          </p>
          <div className="w-14 h-[3px] bg-primary rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <ClientCard key={client.name} client={client} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
