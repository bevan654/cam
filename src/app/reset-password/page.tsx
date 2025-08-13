'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check for hash parameters in the URL
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);

    // Check for error first
    const error = params.get('error');
    if (error) {
      setHasError(true);
      setErrorMessage(params.get('error_description') || 'An error occurred during password reset');
      return;
    }

    // Check for access token
    const token = params.get('access_token');
    if (token) {
      setAccessToken(token);
    } else {
      setHasError(true);
      setErrorMessage('Invalid or missing reset token');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Validate password length
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          password,
          accessToken 
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to reset password');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Show error state
  if (hasError) {
    return (
      <>
        <Navbar />
        <main style={{ marginTop: '80px', padding: '2rem' }}>
          <div className="auth-container">
            <div className="auth-card">
              <div className="auth-header">
                <div className="error-icon">❌</div>
                <h1>Password Reset Error</h1>
                <p>{errorMessage}</p>
              </div>

              <div className="error-message">
                <p>The password reset link is invalid or has expired. Please request a new password reset.</p>
              </div>

              <div className="auth-footer">
                <Link href="/forgot-password" className="btn btn-primary">
                  Request New Reset
                </Link>
                <p className="auth-switch">
                  Remember your password?{' '}
                  <Link href="/login" className="auth-link">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Show success state
  if (success) {
    return (
      <>
        <Navbar />
        <main style={{ marginTop: '80px', padding: '2rem' }}>
          <div className="auth-container">
            <div className="auth-card">
              <div className="auth-header">
                <div className="success-icon">✅</div>
                <h1>Password Reset Successfully</h1>
                <p>Your password has been updated. You can now sign in with your new password.</p>
              </div>

              <div className="success-message">
                <p>Your password has been successfully reset. Please use your new password to sign in to your account.</p>
              </div>

              <div className="auth-footer">
                <Link href="/login" className="btn btn-primary">
                  Sign In
                </Link>
                <p className="auth-switch">
                  Need help?{' '}
                  <Link href="/forgot-password" className="auth-link">
                    Contact support
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Show loading state while checking token
  if (!accessToken) {
    return (
      <>
        <Navbar />
        <main style={{ marginTop: '80px', padding: '2rem' }}>
          <div className="auth-container">
            <div className="auth-card">
              <div className="loading">Checking reset token...</div>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Show password reset form
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '80px', padding: '2rem' }}>
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1>Reset Your Password</h1>
              <p>Enter your new password below</p>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your new password"
                  className="form-input"
                  minLength={8}
                />
                <small className="form-help">Password must be at least 8 characters long</small>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Confirm your new password"
                  className="form-input"
                  minLength={8}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary auth-submit"
              >
                {loading ? 'Resetting Password...' : 'Reset Password'}
              </button>
            </form>

            <div className="auth-footer">
              <Link href="/login" className="back-to-login">
                ← Back to Login
              </Link>
              <p className="auth-switch">
                Remember your password?{' '}
                <Link href="/login" className="auth-link">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
