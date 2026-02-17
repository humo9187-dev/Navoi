import { Heading, Box } from '@chakra-ui/react';
import { useLangStore } from '@navoiy-workspace/store';
import { Pages } from '@navoiy-workspace/types';
import styles from './next-events-title.module.scss';

export const NextEventsTitle = () => {
  const t = useLangStore((state) => state.translations[Pages.home].nextEvents);

  if (!t) return null;
  const [firstWord, secondWord] = t.title.split(' ');

  return (
    <>
      <Box className={styles.headingWrapper}>
        {/* ---desktop--- */}
        <Heading as="h2" className={styles.desktopHeading}>
          {t.title}
        </Heading>
      </Box>

      {/* ---mobile--- */}
      <Heading as="h2" className={styles.mobileHeading}>
        {firstWord}
        <br />
        {secondWord}
      </Heading>
    </>
  );
};
