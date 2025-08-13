'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Check for success message from registration
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if (message) {
      setSuccessMessage(message);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Store tokens
        localStorage.setItem('accessToken', data.session.accessToken);
        localStorage.setItem('refreshToken', data.session.refreshToken);
        
        // Update navbar user state
        if ((window as any).updateNavbarUser) {
          (window as any).updateNavbarUser(data.user);
        }
        
        // Redirect to home page
        router.push('/');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {/* Modern Auth Background */}
      <div className="auth-hero-bg">
        {/* Header */}
        <header className="modern-header">
          <nav className="modern-nav">
            <Link href="/" className="modern-logo">Campus Angel</Link>
            <ul className="modern-nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/restaurants">Restaurants</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
            <div className="modern-auth-buttons">
              <Link href="/login" className="btn btn-outline-modern">Log In</Link>
              <Link href="/register" className="btn btn-primary-modern">Sign Up</Link>
            </div>
          </nav>
        </header>

        {/* Auth Content */}
        <main className="auth-main">
          <div className="auth-container-modern">
            <div className="auth-visual">
              <div className="auth-icon">👼</div>
              <h2>Welcome Back!</h2>
              <p>Sign in to continue your food journey</p>
            </div>

            <div className="auth-card-modern">
              <div className="auth-header-modern">
                <h1>Sign In</h1>
                <p>Enter your credentials to access your account</p>
              </div>

              {successMessage && (
                <div className="success-message-modern">
                  ✅ {successMessage}
                </div>
              )}

              {error && (
                <div className="error-message-modern">
                  ❌ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="auth-form-modern">
                <div className="form-group-modern">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <span className="input-icon">📧</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="form-input-modern"
                    />
                  </div>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔒</span>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your password"
                      className="form-input-modern"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-auth-modern"
                >
                  {loading ? (
                    <>
                      <span className="loading-spinner">⏳</span>
                      Signing In...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              <div className="auth-footer-modern">
                <Link href="/forgot-password" className="forgot-password-modern">
                  🔐 Forgot your password?
                </Link>
                <div className="auth-divider">
                  <span>New to Campus Angel?</span>
                </div>
                <Link href="/register" className="btn-auth-secondary">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
