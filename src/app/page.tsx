'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { StandardHeader } from '../components/AuthStates';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="App">
      {/* Hero Background */}
      <div className="hero-bg">
        {/* Header */}
        <header className="modern-header">
          <nav className="modern-nav">
            <Link href="/" className="modern-logo">Campus Angel</Link>
            <ul className="modern-nav-links">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="/restaurants">Restaurants</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
            <div className="modern-auth-buttons">
              {loading ? (
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
        <section className="modern-hero">
          <div className="modern-hero-container">
            <div className="modern-hero-content">
              <h1>Your Campus Food Angel is Here!</h1>
              <p>Craving your favorite meal between classes? Campus Angel delivers delicious food from your campus restaurants straight to your dorm, library, or anywhere on campus in minutes.</p>
              
              <div className="modern-hero-actions">
                <Link href="/restaurants" className="btn btn-cta-modern">Order Now</Link>
                <Link href="/restaurants" className="btn btn-outline-modern">View Menu</Link>
              </div>

              <div className="modern-hero-stats">
                <div className="modern-stat">
                  <span className="modern-stat-number">15+</span>
                  <span className="modern-stat-label">Campus Restaurants</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">5K+</span>
                  <span className="modern-stat-label">Happy Students</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">10min</span>
                  <span className="modern-stat-label">Avg Delivery</span>
                </div>
              </div>
            </div>

            <div className="modern-hero-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="app-header">
                    <div className="app-title">Campus Angel</div>
                    <div className="app-subtitle">What&apos;s for lunch today?</div>
                  </div>
                  <div className="food-cards">
                    <div className="food-card">
                      <div className="food-emoji">🍕</div>
                      <div className="food-info">
                        <h4>Tony&apos;s Pizza</h4>
                        <div className="food-price">$12.99 • 8 min</div>
                      </div>
                    </div>
                    <div className="food-card">
                      <div className="food-emoji">🍔</div>
                      <div className="food-info">
                        <h4>Campus Burger</h4>
                        <div className="food-price">$9.49 • 12 min</div>
                      </div>
                    </div>
                    <div className="food-card">
                      <div className="food-emoji">🥗</div>
                      <div className="food-info">
                        <h4>Fresh Salad Bar</h4>
                        <div className="food-price">$8.99 • 6 min</div>
                      </div>
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
      
      <main>

        {/* Features Section */}
        <section className="modern-features" id="features">
          <div className="modern-features-container">
            <div className="modern-section-header">
              <h2 className="modern-section-title">Why Students Love Campus Angel</h2>
              <p className="modern-section-subtitle">We&apos;re not just another food delivery app. We&apos;re built specifically for university life, understanding your unique needs as a student.</p>
            </div>

            <div className="modern-features-grid">
              <div className="modern-feature-card">
                <div className="modern-feature-icon">⚡</div>
                <h3 className="modern-feature-title">Lightning Fast</h3>
                <p className="modern-feature-description">Average delivery time of just 10 minutes. Perfect for those short breaks between classes or late-night study sessions.</p>
              </div>

              <div className="modern-feature-card">
                <div className="modern-feature-icon">💰</div>
                <h3 className="modern-feature-title">Student Discounts</h3>
                <p className="modern-feature-description">Exclusive student pricing and daily deals. Plus, earn points with every order that you can redeem for free meals!</p>
              </div>

              <div className="modern-feature-card">
                <div className="modern-feature-icon">📍</div>
                <h3 className="modern-feature-title">Campus Locations</h3>
                <p className="modern-feature-description">Deliver to any location on campus - your dorm, library, study hall, or even that perfect spot on the quad.</p>
              </div>

              <div className="modern-feature-card">
                <div className="modern-feature-icon">🕒</div>
                <h3 className="modern-feature-title">Schedule Orders</h3>
                <p className="modern-feature-description">Order ahead for your lunch break or schedule dinner during your evening study session. We&apos;ve got your timing covered.</p>
              </div>

              <div className="modern-feature-card">
                <div className="modern-feature-icon">👥</div>
                <h3 className="modern-feature-title">Group Orders</h3>
                <p className="modern-feature-description">Studying with friends? Place group orders and split the bill easily. Perfect for dorm parties and study groups.</p>
              </div>

              <div className="modern-feature-card">
                <div className="modern-feature-icon">🎯</div>
                <h3 className="modern-feature-title">Campus Only</h3>
                <p className="modern-feature-description">Exclusively serving your university community. All restaurants are vetted campus partners you know and trust.</p>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="modern-cta-section">
          <div className="modern-cta-container">
            <h2 className="modern-cta-title">Ready to Order?</h2>
            <p className="modern-cta-description">Download Campus Angel now and get your first delivery free! Available on iOS and Android.</p>
            
            <div className="modern-download-buttons">
              <Link href="/restaurants" className="modern-download-btn">
                <span>📱</span>
                Order on Web
              </Link>
              <Link href="/restaurants" className="modern-download-btn">
                <span>🍔</span>
                Browse Menu
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Campus Angel</h3>
              <p>Your trusted food delivery partner on campus.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/restaurants">Restaurants</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="/help">Help Center</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/support">Customer Support</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Campus Angel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
