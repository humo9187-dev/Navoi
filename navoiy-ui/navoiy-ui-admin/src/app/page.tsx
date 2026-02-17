'use client';

import { GlobalConfigForm } from '@/components/global-form/global-form';
import Header from '@/components/header/header';
import { Box } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box>
      <Header />
      <GlobalConfigForm />
    </Box>
  );
}
