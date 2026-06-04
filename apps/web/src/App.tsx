import { useEffect } from 'react'
import gsap from 'gsap'
import { NavBar } from './components/NavBar'
import { HeroSection } from './sections/HeroSection'
import { CategorySection } from './sections/CategorySection'
import { HighlightsSection } from './sections/HighlightsSection'
import { PlatformSection } from './sections/PlatformSection'

export default function App() {
  useEffect(() => {
    const tween = gsap.to('.ambient-glow', {
      opacity: 0.9,
      scale: 1.15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    return () => {
      tween.kill()
    }
  }, [])

  return (
    <div className="app-shell">
      <div className="ambient-glow ambient-left" />
      <div className="ambient-glow ambient-right" />
      <NavBar />
      <main className="main-shell">
        <HeroSection />
        <CategorySection />
        <HighlightsSection />
        <PlatformSection />
      </main>
    </div>
  )
}
