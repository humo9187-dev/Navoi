import React, { useEffect } from 'react';
import styles from './footer.module.scss';
import { Box, Container, Link, Text } from '@chakra-ui/react';
import { Logo } from '../logo/logo';
import { useGlobalStore, useLangStore } from '@navoiy-workspace/store';
import { TranslationAreas, UI_TRANSLATIONS } from '@navoiy-workspace/types';
import { FooterNavigation } from './footer-navigation/footer-navigation';
import { cleanUrl } from '@navoiy-workspace/utils';
import { FacebookIcon, InstagramIcon, TelegramIcon } from './socials/socials';

export const Footer: React.FC = () => {
  const lang = useLangStore((state) => state.language);
  const footerItems = UI_TRANSLATIONS[lang][TranslationAreas.footer];
  const { loadGlobal } = useGlobalStore();
  const isError = useGlobalStore((s) => s.error);
  const hasError = Boolean(isError);
  useEffect(() => {
    loadGlobal();
  }, []);
  const global = useGlobalStore((s) => s.global);
  const socialsLinks = global?.socialLinks;
  const contacts = global?.footer?.contacts ?? [];
  const rightsText =
    global?.footer?.description?.[lang] ||
    global?.footer?.description?.en ||
    '';

  const isPhone = (value: string) =>
    /^\s*(\(\+?\d+\)|\+?\d+)[\d\s()-]{5,}\s*$/.test(value);

  const normalizePhone = (value: string) =>
    `tel:${value.replace(/[^\d+]/g, '')}`;

  const renderContactValue = (value: any) => {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.join(', ');
    } else if (typeof value === 'object') {
      return value[lang] || value.en || '';
    }
    return '';
  };

  return (
    <Box as="footer" className={styles.footer}>
      <Container className={styles.content}>
        <Box className={styles.contactInfo}>
          <Logo variant="white" />
          <Box as="address" className={styles.contacts}>
            {contacts.map((contact) => {
              const name = contact.name?.[lang] || contact.name?.en || '';
              const value = renderContactValue(contact.value);

              return isPhone(value) ? (
                <Link
                  key={name}
                  className={styles.footerLink}
                  href={normalizePhone(value)}
                >
                  {name}: {value}
                </Link>
              ) : (
                <Text key={name} className={styles.footerLink} tabIndex={0}>
                  {name}: {value}
                </Text>
              );
            })}
          </Box>

          {!hasError && (
            <Box className={styles.socials}>
              <Link
                href={cleanUrl(socialsLinks?.facebook)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon />
              </Link>
              <Link
                href={cleanUrl(socialsLinks?.telegram)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Telegram page"
              >
                <TelegramIcon />
              </Link>
              <Link
                href={cleanUrl(socialsLinks?.instagram)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <InstagramIcon />
              </Link>
            </Box>
          )}
        </Box>

        <FooterNavigation navigation={footerItems.navigation} />
      </Container>

      <Box className={styles.rights}>{rightsText}</Box>
    </Box>
  );
};
