'use client';

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useLangStore } from '@navoiy-workspace/store';
import { Pages } from '@navoiy-workspace/types';
import Image from 'next/image';
import styles from './hero.module.scss';

import theatre1 from '../assets/images/theathre1.png';
import theatre2 from '../assets/images/theathre2.png';
import theatre3 from '../assets/images/theathre3.png';

export const Hero = () => {
  const router = useRouter();
  const t = useLangStore((state) => state.translations[Pages.home].hero);

  return (
    <Box className={styles.hero}>
      <Heading as="h1" className="font-bona-400">
        {t.heading.toUpperCase()}
      </Heading>

      <Text className="font-jost-400">{t.description}</Text>

      <Box className={styles.backgroundWrapper}>
        <Flex direction="column" align="center" className={styles.content}>
          <Button
            className={`${styles.cta} font-jost-400`}
            onClick={() => router.push('/events')}
          >
            {t.buyTicketsButtonLabel.toUpperCase()}
          </Button>

          <Box className={styles.imagesWrapper}>
            <Box className={styles.imageItem}>
              <Image src={theatre1} alt="Theatre 1" />
            </Box>

            <Box className={styles.imageItem}>
              <Image src={theatre2} alt="Theatre 2" />
            </Box>

            <Box className={styles.imageItem}>
              <Image src={theatre3} alt="Theatre 3" />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
