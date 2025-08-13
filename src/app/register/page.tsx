'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone || undefined
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful, redirect to login
        router.push('/login?message=Registration successful! Please log in.');
      } else {
        setError(data.error || 'Registration failed');
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
              <div className="auth-icon">🎉</div>
              <h2>Join Campus Angel!</h2>
              <p>Start your delicious food journey today</p>
            </div>

            <div className="auth-card-modern">
              <div className="auth-header-modern">
                <h1>Create Account</h1>
                <p>Fill in your details to get started</p>
              </div>

              {error && (
                <div className="error-message-modern">
                  ❌ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="auth-form-modern">
                <div className="form-row-modern">
                  <div className="form-group-modern">
                    <label htmlFor="firstName">First Name</label>
                    <div className="input-wrapper">
                      <span className="input-icon">👤</span>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="First name"
                        className="form-input-modern"
                      />
                    </div>
                  </div>

                  <div className="form-group-modern">
                    <label htmlFor="lastName">Last Name</label>
                    <div className="input-wrapper">
                      <span className="input-icon">👤</span>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Last name"
                        className="form-input-modern"
                      />
                    </div>
                  </div>
                </div>

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
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <div className="input-wrapper">
                    <span className="input-icon">📱</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
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
                      placeholder="Create a password (min 8 characters)"
                      className="form-input-modern"
                    />
                  </div>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔐</span>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      placeholder="Confirm your password"
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
                      Creating Account...
                    </>
                  ) : (
                    '🚀 Create Account'
                  )}
                </button>
              </form>

              <div className="auth-footer-modern">
                <div className="auth-divider">
                  <span>Already have an account?</span>
                </div>
                <Link href="/login" className="btn-auth-secondary">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
