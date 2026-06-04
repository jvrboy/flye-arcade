import { motion } from 'framer-motion'
import { SceneCanvas } from '../components/SceneCanvas'

export function HeroSection() {
  return (
    <section className="hero panel-grid">
      <div className="hero-copy">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          SHOP IN ANOTHER DIMENSION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          A futuristic arcade storefront with cinematic motion and 3D energy.
        </motion.h2>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FLYE ARCADE launches as a premium cross-platform commerce universe for apparel, books, and beats — built for web, mobile, and desktop.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a className="primary-btn" href="#categories">Enter Store</a>
          <a className="secondary-btn" href="#platforms">View Platforms</a>
        </motion.div>
      </div>
      <SceneCanvas />
    </section>
  )
}
