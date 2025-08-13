import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

interface AuthOptions {
  requireAuth?: boolean;
  redirectToLogin?: boolean;
}

export function useAuth(options: AuthOptions = {}) {
  const { requireAuth = false, redirectToLogin = false } = options;
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  const checkAuthStatus = useCallback(async (): Promise<void> => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setAuthState({ user: null, loading: false, error: null });
        if (requireAuth && redirectToLogin) {
          router.push('/login');
        }
        return;
      }

      const response = await fetch('/api/auth/me', {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setAuthState({ user: data.user, loading: false, error: null });
      } else if (response.status === 401) {
        // Token expired, try to refresh
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          try {
            const refreshResponse = await fetch('/api/auth/refresh', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
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
                setAuthState({ user: retryData.user, loading: false, error: null });
              } else {
                // Still failed, clear tokens and handle accordingly
                clearTokensAndRedirect();
              }
            } else {
              // Refresh failed, clear tokens and handle accordingly
              clearTokensAndRedirect();
            }
          } catch (refreshError) {
            console.error('Token refresh error:', refreshError);
            clearTokensAndRedirect();
          }
        } else {
          // No refresh token, clear access token and handle accordingly
          clearTokensAndRedirect();
        }
      } else {
        // Other error, clear tokens and handle accordingly
        clearTokensAndRedirect();
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setAuthState({ user: null, loading: false, error: 'Failed to check authentication' });
      if (requireAuth && redirectToLogin) {
        router.push('/login');
      }
    }
  }, [requireAuth, redirectToLogin, router]);

  const clearTokensAndRedirect = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuthState({ user: null, loading: false, error: null });
    if (requireAuth && redirectToLogin) {
      router.push('/login');
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuthState({ user: null, loading: false, error: null });
    router.push('/');
  };

  const refreshAuth = () => {
    setAuthState(prev => ({ ...prev, loading: true }));
    checkAuthStatus();
  };

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  return {
    user: authState.user,
    loading: authState.loading,
    error: authState.error,
    isAuthenticated: !!authState.user,
    logout,
    refreshAuth,
  };
}
