'use client';

import Header from '@/components/header/header';
import { Box, Container, Heading } from '@chakra-ui/react';

export default function AboutUsPage() {
  return (
    <Container>
      <Header />
      <Box p={8}>
        <Heading fontSize="4xl" size="4xl">
          About Us Page
        </Heading>
      </Box>
    </Container>
  );
}
