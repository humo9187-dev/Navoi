import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useLangStore } from '@navoiy-workspace/store';
import { TranslationAreas } from '@navoiy-workspace/types';
import { useRouter } from 'next/navigation';
import styles from './page-500.module.scss';

export const ErrorPage = () => {
  const translations = useLangStore((state) => state.translations);
  const t = translations[TranslationAreas.page500];
  const router = useRouter();

  const handleBackToHomepage = () => {
    router.push('/');
  };

  const handleContactSupport = () => {
    window.location.href = 'mailto:info@gabt.uz';
  };

  if (!t) {
    return null;
  }

  return (
    <Box className={styles.container}>
      <Heading as="h1" className={styles.title}>
        {t.title}
      </Heading>
      <Text className={styles.message}>{t.message}</Text>
      <Box className={styles.wrapper}>
        <Button onClick={handleBackToHomepage} className={styles.primaryButton}>
          {t.backToHomepage}
        </Button>
        <Button
          onClick={handleContactSupport}
          className={styles.secondaryButton}
        >
          {t.contactSupport}
        </Button>
      </Box>
    </Box>
  );
};
