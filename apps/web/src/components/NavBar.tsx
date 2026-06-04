import { Menu, Search, ShoppingCart, User } from 'lucide-react'

export function NavBar() {
  return (
    <header className="topbar glass">
      <button className="icon-button" aria-label="Open menu">
        <Menu size={18} />
      </button>
      <div className="brand-lockup">
        <span className="brand-kicker">ONLINE STORE</span>
        <h1>FLYE ARCADE</h1>
      </div>
      <div className="nav-actions">
        <button className="icon-button" aria-label="Search"><Search size={18} /></button>
        <button className="icon-button" aria-label="Cart"><ShoppingCart size={18} /></button>
        <button className="icon-button" aria-label="Account"><User size={18} /></button>
      </div>
    </header>
  )
}
