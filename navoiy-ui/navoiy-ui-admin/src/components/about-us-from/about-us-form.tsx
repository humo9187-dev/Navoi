'use client';

import React from 'react';
import { Container } from '@chakra-ui/react';
import Header from '../header/header';

export const AboutUsForm: React.FC<{ aboutUsId?: string | null }> = ({
  aboutUsId,
}) => {
  return (
    <Container>
      <Header />
      About Us Form
    </Container>
  );
};
