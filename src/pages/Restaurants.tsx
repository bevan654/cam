import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

type Restaurant = {
  id: number
  name: string
  cuisine: string
  rating: number
  deliveryTime: string
  deliveryFee: string
  emoji: string
  badge: string
  description: string
  popularItems: string
  category: string
}

export default function RestaurantsPage() {
  const [restaurants] = useState<Restaurant[]>([
    {
      id: 1,
      name: 'Subway',
      cuisine: 'American • Sandwiches',
      rating: 4.5,
      deliveryTime: '8-15 min',
      deliveryFee: 'Free',
      emoji: '🥪',
      badge: 'Fresh Daily',
      description:
        'Fresh sandwiches made to order with premium ingredients. Build your perfect sub exactly how you like it!',
      popularItems: 'Italian BMT, Turkey Breast, Veggie Delite',
      category: 'fast-food',
    },
  ])

  const [currentFilter, setCurrentFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filtered = restaurants
    .filter((r) => (currentFilter === 'all' ? true : r.category === currentFilter))
    .filter((r) => {
      if (!searchQuery) return true
      const q = searchQuery.toLowerCase()
      return (
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.popularItems.toLowerCase().includes(q)
      )
    })

  return (
    <>
      <Navbar />
      <section id="restaurants">
        {/* Page Hero */}
        <div className="page-hero">
          <div className="hero-content">
            <h1 className="hero-title">Campus Restaurants</h1>
            <p className="hero-subtitle">
              Discover amazing food from your favorite campus spots. From quick bites between classes to late-night study
              fuel - we've got you covered!
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="search-section">
          <div className="search-container">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search restaurants, cuisines, or dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-buttons">
              {[
                ['all', 'All'],
                ['fast-food', 'Fast Food'],
                ['healthy', 'Healthy'],
                ['asian', 'Asian'],
                ['pizza', 'Pizza'],
                ['coffee', 'Coffee'],
              ].map(([key, label]) => (
                <button
                  key={key}
                  className={`filter-btn ${currentFilter === key ? 'active' : ''}`}
                  onClick={() => setCurrentFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="restaurants-section">
          <div className="restaurants-container">
            <div className="restaurants-grid">
              {filtered.length === 0 ? (
                <div className="loading">No restaurants found matching your criteria.</div>
              ) : (
                filtered.map((r, index) => (
                  <Link
                    key={r.id}
                    to={r.name.toLowerCase() === 'subway' ? '/restaurants/subway' : '#'}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div
                      className="restaurant-card"
                      style={{
                        opacity: 1,
                        transform: 'translateY(0)',
                        transition: 'all 0.6s ease',
                        transitionDelay: `${index * 0.05}s`,
                      }}
                    >
                      <div className="restaurant-image">
                        {r.emoji}
                        <div className="restaurant-badge">{r.badge}</div>
                      </div>
                      <div className="restaurant-info">
                        <div className="restaurant-header">
                          <div>
                            <h3 className="restaurant-name">{r.name}</h3>
                            <p className="restaurant-cuisine">{r.cuisine}</p>
                          </div>
                          <div className="restaurant-rating">⭐ {r.rating.toFixed(1)}</div>
                        </div>
                        <div className="restaurant-details">
                          <div className="delivery-info">
                            <div className="delivery-time">🕒 {r.deliveryTime}</div>
                            <div className="delivery-fee">🚚 {r.deliveryFee}</div>
                          </div>
                        </div>
                        <p className="restaurant-description">{r.description}</p>
                        <div className="restaurant-footer">
                          <div className="popular-items">Popular: {r.popularItems}</div>
                          <button className="order-btn" onClick={(e) => e.preventDefault()}>
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


