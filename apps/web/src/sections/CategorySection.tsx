import { motion } from 'framer-motion'
import { categories } from '../data/catalog'

export function CategorySection() {
  return (
    <section id="categories" className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Launch Categories</p>
        <h3>Three immersive zones built for discovery.</h3>
      </div>
      <div className="card-grid">
        {categories.map((category, index) => (
          <motion.article
            key={category.name}
            className="glass category-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="category-accent" style={{ background: category.accent }} />
            <h4>{category.name}</h4>
            <p>{category.description}</p>
            <span className="pill">Portal Ready</span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
