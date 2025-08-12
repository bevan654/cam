import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function useScrollOpacity() {
  const [opacity, setOpacity] = useState(0.0)
  useEffect(() => {
    const onScroll = () => setOpacity(Math.min(1, window.scrollY / 120))
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return opacity
}

function App() {
  const opacity = useScrollOpacity()
  const featuresRef = useRef<HTMLDivElement | null>(null)

  // Reveal feature cards on scroll
  useEffect(() => {
    const rootEl = featuresRef.current ?? document
    const cards = (rootEl instanceof Document
      ? rootEl.querySelectorAll('.feature-reveal')
      : rootEl.querySelectorAll('.feature-reveal')) as NodeListOf<HTMLElement>

    if (!cards || cards.length === 0) return

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('feature-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
      )
      cards.forEach((card) => observer.observe(card))
      return () => observer.disconnect()
    }

    // Fallback if IntersectionObserver is not supported
    cards.forEach((card) => card.classList.add('feature-visible'))
  }, [])

  return (
      <div>
      <div className="hero-bg">
        <Navbar />
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <h1>Your Campus Food Angel is Here!</h1>
              <p>Craving your favorite meal between classes? Campus Angel delivers delicious food from your campus restaurants straight to your dorm, library, or anywhere on campus in minutes.</p>
              <div className="hero-actions">
                <a href="/restaurants" className="btn btn-cta">Order Now</a>
              </div>
              <div className="hero-stats">
                <div className="stat"><span className="stat-number">15+</span><span className="stat-label">Campus Restaurants</span></div>
                <div className="stat"><span className="stat-number">5K+</span><span className="stat-label">Happy Students</span></div>
                <div className="stat"><span className="stat-number">10min</span><span className="stat-label">Avg Delivery</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="app-header">
                    <div className="app-title">Campus Angel</div>
                    <div className="app-subtitle">What's for lunch today?</div>
                  </div>
                  <div className="food-cards">
                    <div className="food-card">
                      <div className="food-emoji">🍕</div>
                      <div className="food-info"><h4>Tony's Pizza</h4><div className="food-price">$12.99 • 8 min</div></div>
                    </div>
                    <div className="food-card">
                      <div className="food-emoji">🍔</div>
                      <div className="food-info"><h4>Campus Burger</h4><div className="food-price">$9.49 • 12 min</div></div>
                    </div>
                    <div className="food-card">
                      <div className="food-emoji">🥗</div>
                      <div className="food-info"><h4>Fresh Salad Bar</h4><div className="food-price">$8.99 • 6 min</div></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="floating-element floating-1">🍕</div>
              <div className="floating-element floating-2">🍔</div>
              <div className="floating-element floating-3">🌮</div>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="features" id="features" ref={featuresRef}>
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Why Students Love Campus Angel</h2>
            <p className="section-subtitle">We're not just another food delivery app. We're built specifically for university life, understanding your unique needs as a student.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card feature-reveal"><div className="feature-icon">⚡</div><h3 className="feature-title">Lightning Fast</h3><p className="feature-description">Average delivery time of just 10 minutes. Perfect for those short breaks between classes or late-night study sessions.</p></div>
            <div className="feature-card feature-reveal"><div className="feature-icon">💰</div><h3 className="feature-title">Student Discounts</h3><p className="feature-description">Exclusive student pricing and daily deals. Plus, earn points with every order that you can redeem for free meals!</p></div>
            <div className="feature-card feature-reveal"><div className="feature-icon">📍</div><h3 className="feature-title">Campus Locations</h3><p className="feature-description">Deliver to any location on campus - your dorm, library, study hall, or even that perfect spot on the quad.</p></div>
            <div className="feature-card feature-reveal"><div className="feature-icon">🕒</div><h3 className="feature-title">Schedule Orders</h3><p className="feature-description">Order ahead for your lunch break or schedule dinner during your evening study session. We've got your timing covered.</p></div>
            <div className="feature-card feature-reveal"><div className="feature-icon">👥</div><h3 className="feature-title">Group Orders</h3><p className="feature-description">Studying with friends? Place group orders and split the bill easily. Perfect for dorm parties and study groups.</p></div>
            <div className="feature-card feature-reveal"><div className="feature-icon">🎯</div><h3 className="feature-title">Campus Only</h3><p className="feature-description">Exclusively serving your university community. All restaurants are vetted campus partners you know and trust.</p></div>
          </div>
        </div>
      </section>

      {/* Restaurants Section moved to its own page */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Order?</h2>
          <p className="cta-description">Download Campus Angel now and get your first delivery free! Available on iOS and Android.</p>
          <div className="download-buttons">
            <a href="#" className="download-btn"><span>📱</span>Download for iOS</a>
            <a href="#" className="download-btn"><span>🤖</span>Download for Android</a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Removed older helper components as the new design uses static structure

// Restaurants section moved to its own page

export default App

