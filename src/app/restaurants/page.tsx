'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../../hooks/useAuth'
import { StandardHeader } from '../../components/AuthStates'

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
  image: string
}

export default function RestaurantsPage() {
  const router = useRouter()
  const { user, loading: authLoading, logout } = useAuth();
  
  const [restaurants] = useState<Restaurant[]>([
    {
      id: 1,
      name: 'Subway',
      cuisine: 'American • Sandwiches',
      rating: 4.8,
      deliveryTime: '15-20 min',
      deliveryFee: 'Free',
      emoji: '🥪',
      badge: 'Most Popular',
      description: 'Fresh subs & salads made to order with premium ingredients.',
      popularItems: 'Italian BMT, Turkey Breast, Veggie Delite',
      category: 'fast-food',
      image: '/api/placeholder/400/200'
    }
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

  const handleRestaurantClick = (restaurant: Restaurant) => {
    if (restaurant.name.toLowerCase() === 'subway') {
      router.push('/restaurants/subway')
    }
  }

  return (
    <div className="App">
      {/* Modern Header */}
      <div className="restaurants-hero-bg">
        <header className="modern-header">
          <nav className="modern-nav">
            <Link href="/" className="modern-logo">Campus Angel</Link>
            <ul className="modern-nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/restaurants">Restaurants</Link></li>
              <li><Link href="/account">Account</Link></li>
              <li><Link href="/cart">Cart</Link></li>
            </ul>
            <div className="modern-auth-buttons">
              {authLoading ? (
                <div className="auth-loading">⏳</div>
              ) : user ? (
                <>
                  <span className="welcome-text">Welcome, {user.firstName}!</span>
                  <Link href="/account" className="btn btn-outline-modern">My Account</Link>
                  <Link href="/cart" className="btn btn-primary-modern">Cart</Link>
                  <button onClick={logout} className="btn btn-secondary-modern">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="btn btn-outline-modern">Log In</Link>
                  <Link href="/register" className="btn btn-primary-modern">Sign Up</Link>
                </>
              )}
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="restaurants-hero">
          <div className="restaurants-hero-container">
            <div className="restaurants-hero-content">
              <h1>🍽️ Campus Restaurants</h1>
              <p>Discover delicious food from your favorite campus spots. Fresh, fast, and delivered right to you!</p>
              
              <div className="restaurants-hero-stats">
                <div className="modern-stat">
                  <span className="modern-stat-number">{restaurants.length}</span>
                  <span className="modern-stat-label">Restaurants</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">10+</span>
                  <span className="modern-stat-label">Cuisines</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">15min</span>
                  <span className="modern-stat-label">Avg Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="restaurants-main">
        <div className="restaurants-container">
          {/* Search and Filters */}
          <div className="modern-search-section">
            <div className="modern-search-box">
              <div className="search-icon">🔍</div>
              <input
                type="text"
                placeholder="Search restaurants, cuisines, or dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="modern-search-input"
              />
            </div>

            <div className="modern-category-filters">
              <button
                className={`modern-category-btn ${currentFilter === 'all' ? 'active' : ''}`}
                onClick={() => setCurrentFilter('all')}
              >
                All
              </button>
              <button
                className={`modern-category-btn ${currentFilter === 'fast-food' ? 'active' : ''}`}
                onClick={() => setCurrentFilter('fast-food')}
              >
                🥪 Sandwiches
              </button>
            </div>
          </div>

          {/* Results Header */}
          <div className="results-header">
            <h2>
              {currentFilter === 'all' ? 'All Restaurants' : `${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Restaurants`}
              <span className="results-count">({filtered.length} found)</span>
            </h2>
          </div>

          {/* Restaurant Grid */}
          <div className="modern-restaurants-grid">
            {filtered.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon">😕</div>
                <h3>No restaurants found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              filtered.map((restaurant, index) => (
                <div
                  key={restaurant.id}
                  className="modern-restaurant-card"
                  onClick={() => handleRestaurantClick(restaurant)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="modern-restaurant-image">
                    <div className="restaurant-emoji">{restaurant.emoji}</div>
                    <div className="restaurant-badge">{restaurant.badge}</div>
                  </div>
                  
                  <div className="modern-restaurant-content">
                    <div className="restaurant-header">
                      <h3>{restaurant.name}</h3>
                      <div className="rating-badge">
                        ⭐ {restaurant.rating}
                      </div>
                    </div>
                    
                    <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                    <p className="restaurant-description">{restaurant.description}</p>
                    
                    <div className="restaurant-meta-grid">
                      <div className="meta-item">
                        <span className="meta-icon">🕒</span>
                        <span>{restaurant.deliveryTime}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">💰</span>
                        <span>{restaurant.deliveryFee}</span>
                      </div>
                    </div>
                    
                    <div className="popular-items">
                      <span className="popular-label">Popular:</span>
                      <span className="popular-text">{restaurant.popularItems}</span>
                    </div>
                    
                    <div className="restaurant-action">
                      <button className="order-btn">Order Now</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
