'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to send password reset email');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <Navbar />
        <main style={{ marginTop: '80px', padding: '2rem' }}>
          <div className="auth-container">
            <div className="auth-card">
              <div className="auth-header">
                <div className="success-icon">✅</div>
                <h1>Check Your Email</h1>
                <p>We&apos;ve sent a password reset link to <strong>{email}</strong></p>
              </div>

              <div className="success-message">
                <p>Please check your email and click the link to reset your password. The link will expire in 1 hour.</p>
                <p>If you don&apos;t see the email, check your spam folder.</p>
              </div>

              <div className="auth-footer">
                <Link href="/login" className="btn btn-primary">
                  Back to Login
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

  return (
    <>
      <Navbar />
      <main style={{ marginTop: '80px', padding: '2rem' }}>
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1>Forgot Password</h1>
              <p>Enter your email address and we&apos;ll send you a link to reset your password</p>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary auth-submit"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>

            <div className="auth-footer">
              <Link href="/login" className="back-to-login">
                ← Back to Login
              </Link>
              <p className="auth-switch">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="auth-link">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
