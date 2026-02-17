'use client';

import React from 'react';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useLangStore } from '@navoiy-workspace/store';
import { TranslationAreas } from '@navoiy-workspace/types';
import styles from './page-404.module.scss';

export const Page404 = () => {
  const router = useRouter();
  const translations = useLangStore((state) => state.translations);
  const t = translations[TranslationAreas.page404];

  const handleBackToHomepage = () => {
    router.push('/');
  };

  const handleContactSupport = () => {
    window.location.href = 'mailto:info@gabt.uz';
  };

  const titleParts = t.title.split(' ');
  const errorNumber = titleParts[0];
  const errorText = titleParts.slice(1).join(' ');

  return (
    <Container>
      <Box className={styles.page404Container}>
        <Heading as="h1" className={styles.title}>
          <span>{errorNumber}</span>
          <span>{errorText}</span>
        </Heading>
        <Text className={styles.message}>{t.message}</Text>
        <Box className={styles.buttonsContainer}>
          <Button
            className={styles.primaryButton}
            onClick={handleBackToHomepage}
          >
            {t.backToHomepage}
          </Button>
          <Button
            className={styles.secondaryButton}
            onClick={handleContactSupport}
          >
            {t.contactSupport}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
