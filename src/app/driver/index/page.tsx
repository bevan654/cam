'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DriverIndexPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main driver dashboard
    router.push('/driver');
  }, [router]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Redirecting to driver dashboard...</p>
    </div>
  );
}
