import Link from 'next/link';

interface StandardHeaderProps {
  user?: any;
  loading?: boolean;
  onLogout?: () => void;
}

export function StandardHeader({ user, loading, onLogout }: StandardHeaderProps) {
  return (
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
          {loading ? (
            <div className="auth-loading">⏳</div>
          ) : user ? (
            <>
              <Link href="/account" className="btn btn-outline-modern">My Account</Link>
              <Link href="/cart" className="btn btn-primary-modern">Cart</Link>
              <button onClick={onLogout} className="btn btn-secondary-modern">Logout</button>
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
  );
}

interface LoadingStateProps {
  message?: string;
  submessage?: string;
  className?: string;
}

export function LoadingState({ 
  message = "Loading...", 
  submessage,
  className = "hero-bg" 
}: LoadingStateProps) {
  return (
    <div className="App">
      <div className={className}>
        <StandardHeader />
        <main className="loading-main">
          <div className="loading-container-modern">
            <div className="loading-content">
              <div className="loading-spinner">⏳</div>
              <h2>{message}</h2>
              {submessage && <p>{submessage}</p>}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

interface AuthRequiredStateProps {
  message?: string;
  submessage?: string;
  className?: string;
}

export function AuthRequiredState({ 
  message = "Authentication Required",
  submessage = "You must be logged in to access this page.",
  className = "hero-bg"
}: AuthRequiredStateProps) {
  return (
    <div className="App">
      <div className={className}>
        <StandardHeader />
        <main className="auth-required-main">
          <div className="auth-required-container-modern">
            <div className="auth-required-content">
              <div className="auth-icon">🔒</div>
              <h2>{message}</h2>
              <p>{submessage}</p>
              <div className="auth-actions-modern">
                <Link href="/login" className="btn-auth-primary">
                  🔑 Login
                </Link>
                <Link href="/register" className="btn-auth-secondary">
                  📝 Register
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

interface ErrorStateProps {
  title?: string;
  message: string;
  primaryAction?: {
    text: string;
    href: string;
    icon?: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
    icon?: string;
  };
  className?: string;
}

export function ErrorState({ 
  title = "Something went wrong",
  message,
  primaryAction,
  secondaryAction,
  className = "hero-bg"
}: ErrorStateProps) {
  return (
    <div className="App">
      <div className={className}>
        <StandardHeader />
        <main className="error-main">
          <div className="error-container-modern">
            <div className="error-content">
              <div className="error-icon">❌</div>
              <h2>{title}</h2>
              <p>{message}</p>
              <div className="error-actions">
                {primaryAction && (
                  <Link href={primaryAction.href} className="btn-error-primary">
                    {primaryAction.icon} {primaryAction.text}
                  </Link>
                )}
                {secondaryAction && (
                  <Link href={secondaryAction.href} className="btn-error-secondary">
                    {secondaryAction.icon} {secondaryAction.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
