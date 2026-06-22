import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const contactDetails = [
  {
    label: 'Phone',
    value: '+971 50 123 4567',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+971 50 123 4567',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@andevents.ae',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Office Address',
    value: 'Business Bay, Dubai, UAE',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-60px' })
  const [formState, setFormState] = useState('idle') // idle | sending | sent
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setFormState('sent')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setFormState('idle'), 3000)
      } else {
        setFormState('idle')
        alert('Something went wrong. Please try again.')
      }
    } catch {
      setFormState('idle')
      alert('Could not connect to server. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-light-bg">
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
            Let's Create Something Extraordinary
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto font-light">
            Ready to bring your vision to life? Reach out and let's start planning.
          </p>
          <div className="w-14 h-[3px] bg-primary rounded-full mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="mb-3">
              <p className="text-[1.05rem] text-muted font-light leading-relaxed">
                Whether you're planning a corporate conference, a luxury gala, or an
                intimate celebration, our team is ready to make it exceptional.
              </p>
            </div>

            {contactDetails.map((detail, i) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, x: -20 }}
                animate={headerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-4 p-5 bg-white rounded-xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:translate-x-1 transition-all duration-300"
              >
                <div className="w-12 h-12 min-w-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white">
                  {detail.icon}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-light-text uppercase tracking-widest mb-1">
                    {detail.label}
                  </h4>
                  <p className="text-[0.95rem] text-dark font-medium">{detail.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <h3 className="font-serif text-2xl font-semibold text-dark mb-2">
              Send an Inquiry
            </h3>
            <p className="text-sm text-muted mb-7 font-light">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3.5 text-[0.95rem] text-dark bg-light-bg border-[1.5px] border-transparent rounded-lg outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(160,0,0,0.08)] placeholder:text-light-text placeholder:font-light"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 text-[0.95rem] text-dark bg-light-bg border-[1.5px] border-transparent rounded-lg outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(160,0,0,0.08)] placeholder:text-light-text placeholder:font-light"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 50 XXX XXXX"
                  className="w-full px-4 py-3.5 text-[0.95rem] text-dark bg-light-bg border-[1.5px] border-transparent rounded-lg outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(160,0,0,0.08)] placeholder:text-light-text placeholder:font-light"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your event..."
                  className="w-full px-4 py-3.5 text-[0.95rem] text-dark bg-light-bg border-[1.5px] border-transparent rounded-lg outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(160,0,0,0.08)] placeholder:text-light-text placeholder:font-light resize-y min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-4 text-white text-base font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  formState === 'sent'
                    ? 'bg-green-600'
                    : 'bg-primary hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(160,0,0,0.3)]'
                } disabled:opacity-70`}
              >
                {formState === 'idle' && (
                  <>
                    Send Inquiry
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
                {formState === 'sending' && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Sending...
                  </>
                )}
                {formState === 'sent' && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Inquiry Sent!
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
