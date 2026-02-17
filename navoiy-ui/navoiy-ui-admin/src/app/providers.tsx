'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

const AuthGuard = dynamic(
  () => import('./auth-guard').then((m) => m.AuthGuard),
  {
    ssr: false,
  }
);

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <AuthGuard>{children}</AuthGuard>
    </ChakraProvider>
  );
}
