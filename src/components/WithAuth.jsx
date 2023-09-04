"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if we are on the client side
    if (typeof window !== 'undefined') {
      // Perform client-side checks here
      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/login'); // Redirect to login page if not authenticated
      }
    }
  }, [router]);

  return <>{children}</>;
};

export default withAuth;
