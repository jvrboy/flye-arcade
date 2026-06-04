import { highlights } from '../data/catalog'

export function HighlightsSection() {
  return (
    <section className="content-section split-layout">
      <div>
        <p className="eyebrow">Design System</p>
        <h3>Neon gradients, frosted layers, and motion-driven commerce.</h3>
        <p className="section-copy">
          The foundation blends a luxury arcade feel with a scalable modern stack so the same brand can live on Vercel, mobile storefront apps, and desktop shells.
        </p>
      </div>
      <div className="glass feature-stack">
        {highlights.map((item) => (
          <div key={item} className="feature-row">
            <span className="feature-dot" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
