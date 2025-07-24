import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const publicPaths = ['/', '/register'];

    if (!token && !publicPaths.includes(router.pathname)) {
      if (router.pathname !== '/') {
        router.replace('/');  
      }
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthGuard;
