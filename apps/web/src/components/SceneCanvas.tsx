export function SceneCanvas() {
  return (
    <div className="scene-shell faux-3d-scene" aria-hidden="true">
      <div className="ring ring-one" />
      <div className="ring ring-two" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
      <div className="scene-card scene-card-left">
        <span>NEON</span>
        <strong>CLOTHING</strong>
      </div>
      <div className="scene-card scene-card-right">
        <span>WAVE</span>
        <strong>BEATS</strong>
      </div>
      <div className="scene-card scene-card-bottom">
        <span>STORIES</span>
        <strong>BOOKS</strong>
      </div>
      <div className="scene-grid" />
      <div className="scene-overlay" />
    </div>
  )
}
