'use client';

import { ReactNode, useEffect, useState } from 'react';

import { Login } from '@/components/login/login';
import { useAuthStore } from '@navoiy-workspace/store';

export function AuthGuard({ children }: { children: ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const setAuthenticated = useAuthStore((s) => s.setAuthenticated);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setHasMounted(true);

    const token = sessionStorage.getItem('basic_auth');
    setAuthenticated(!!token);
  }, [setAuthenticated]);

  if (!hasMounted) {
    return null;
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return children;
}
