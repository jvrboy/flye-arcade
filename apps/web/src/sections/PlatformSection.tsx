const platforms = [
  ['Web', 'React + Vite + R3F, ready for Vercel deployment'],
  ['Android / iOS', 'Expo app with native-feeling discovery and category browsing'],
  ['Windows / macOS', 'Tauri desktop shell powered by Rust for lightweight installs']
]

export function PlatformSection() {
  return (
    <section id="platforms" className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Cross Platform</p>
        <h3>One brand system, multiple launch surfaces.</h3>
      </div>
      <div className="platform-grid">
        {platforms.map(([title, description]) => (
          <article key={title} className="glass platform-card">
            <span className="platform-title">{title}</span>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
