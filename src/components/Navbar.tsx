import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isRestaurants = location.pathname.startsWith('/restaurants')
  const headerClass = isRestaurants ? 'header-colored' : scrolled ? 'header-scrolled' : 'header-blur'

  return (
    <header className={`site-header ${headerClass}`}>
      <div className="header-inner">
        <Link to="/" className="logo">Campus Angel</Link>
        <ul className="nav-links">
          <li><Link to="/#features">Features</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-outline">Log In</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </header>
  )
}


