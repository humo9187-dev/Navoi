import { Box, Image, Link, Text } from '@chakra-ui/react';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import telegramIcon from '../assets/icons/telegram.svg';
import styles from './socials-wrapper.module.scss';
import { UI_TRANSLATIONS } from '@navoiy-workspace/types';
import { useGlobalStore, useLangStore } from '@navoiy-workspace/store';
import { useEffect } from 'react';
import { cleanUrl } from '@navoiy-workspace/utils';

const SocialsWrapper = () => {
  const { loadGlobal } = useGlobalStore();
  useEffect(() => {
    loadGlobal();
  }, []);

  const lang = useLangStore((s) => s.language);
  const isError = useGlobalStore((s) => s.error);
  const hasError = Boolean(isError);
  const share = UI_TRANSLATIONS[lang]['event-details'].share;
  const socials = useGlobalStore((s) => s.global?.socialLinks);

  return (
    !hasError && (
      <Box>
        <Text className={styles.text}>{share}: </Text>
        <Box className={styles.icons}>
          <Link
            href={cleanUrl(socials?.facebook)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <Image src={facebookIcon} alt="Facebook icon" />
          </Link>
          <Link
            href={cleanUrl(socials?.telegram)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Telegram page"
          >
            <Image src={telegramIcon} alt="Telegram icon" />
          </Link>
          <Link
            href={cleanUrl(socials?.instagram)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <Image src={instagramIcon} alt="Instagram icon" />
          </Link>
        </Box>
      </Box>
    )
  );
};

export default SocialsWrapper;
