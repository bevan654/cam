'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to update user state after successful login
  const updateUserState = (userData: User) => {
    setUser(userData);
  };

  // Expose the function globally so login page can call it
  useEffect(() => {
    (window as any).updateNavbarUser = updateUserState;
    return () => {
      delete (window as any).updateNavbarUser;
    };
  }, []);

  // Check if user is logged in on component mount and handle token refresh
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      
      if (!token) {
        setLoading(false);
        setUser(null);
        return;
      }

      try {
        const response = await fetch('/api/auth/me', {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else if (response.status === 401 && refreshToken) {
          // Token expired, try to refresh
          try {
            const refreshResponse = await fetch('/api/auth/refresh', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ refreshToken })
            });
            
            if (refreshResponse.ok) {
              const refreshData = await refreshResponse.json();
              localStorage.setItem('accessToken', refreshData.session.accessToken);
              localStorage.setItem('refreshToken', refreshData.session.refreshToken);
              
              // Retry getting user data with new token
              const retryResponse = await fetch('/api/auth/me', {
                headers: { 
                  'Authorization': `Bearer ${refreshData.session.accessToken}`,
                  'Content-Type': 'application/json'
                }
              });
              
              if (retryResponse.ok) {
                const retryData = await retryResponse.json();
                setUser(retryData.user);
              } else {
                // Refresh failed, clear tokens
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                setUser(null);
              }
            } else {
              // Refresh failed, clear tokens
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');
              setUser(null);
            }
          } catch (refreshError) {
            console.error('Token refresh error:', refreshError);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            setUser(null);
          }
        } else {
          // Token is invalid, clear it
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          setUser(null);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        // Network error, clear tokens to be safe
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, [pathname]); // Re-check when pathname changes

  const handleLogout = async () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ accessToken: token })
        });
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
    
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/');
  };

  // Don't show auth buttons on auth pages to prevent confusion
  const isAuthPage = pathname === '/login' || pathname === '/register';

  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar">
          <div className="navbar-brand">
            <Link href="/" className="logo">
              <span className="logo-icon">👼</span>
              <span className="logo-text">Campus Angel</span>
            </Link>
          </div>

          <nav className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/restaurants" className="nav-link">Restaurants</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="navbar-actions">
            {loading ? (
              // Show loading state
              <div className="auth-loading">
                <span className="loading-spinner">⏳</span>
              </div>
            ) : !isAuthPage ? (
              <>
                {user ? (
                  // User is logged in - show user menu
                  <div className="user-menu">
                    <div className="user-info">
                      <div className="user-details">
                        <span className="user-greeting">Hello, {user.firstName}!</span>
                        <span className="user-email">{user.email}</span>
                      </div>
                      <div className="user-actions">
                        <Link href="/account" className="btn btn-secondary account-btn">
                          My Account
                        </Link>
                        <button 
                          className="btn btn-secondary logout-btn"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // User is not logged in - show auth buttons
                  <div className="auth-buttons">
                    <Link href="/login" className="btn btn-secondary">
                      Login
                    </Link>
                    <Link href="/register" className="btn btn-primary">
                      Register
                    </Link>
                  </div>
                )}
              </>
            ) : null}

            <Link href="/cart" className="btn btn-secondary cart-btn">
              <span className="cart-icon">🛒</span>
              <span className="cart-text">Cart</span>
            </Link>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


