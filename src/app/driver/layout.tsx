'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function DriverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Skip authentication check for login page
    if (pathname === '/driver/login') {
      setLoading(false);
      return;
    }

    // Check if driver is authenticated
    const driverAuth = localStorage.getItem('driverAuth');
    
    if (driverAuth === 'true') {
      setIsAuthenticated(true);
      setLoading(false);
    } else {
      // Redirect to login if not authenticated
      router.push('/driver/login');
    }
  }, [router, pathname]);

  // Show loading while checking authentication
  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }

  // Allow login page to render without authentication
  if (pathname === '/driver/login') {
    return <>{children}</>;
  }

  // Only render children if authenticated
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // This should not render, but just in case
  return null;
}
