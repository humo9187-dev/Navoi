import React, { useEffect } from 'react';

import { useGlobalStore, useLangStore } from '@navoiy-workspace/store';
import { TranslationAreas, UI_TRANSLATIONS } from '@navoiy-workspace/types';
import { Box } from '@chakra-ui/react';

import { NestedMenu } from '../nested-menu/nested-menu';
import { Logo } from '../logo/logo';
import { LanguageSelector } from '../language-selector/language-selector';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  const lang = useLangStore((state) => state.language);
  const { loadGlobal } = useGlobalStore();
  const menuItems =
    UI_TRANSLATIONS?.[lang]?.[TranslationAreas.header]?.navigation ?? [];

  useEffect(() => {
    loadGlobal();
  }, []);

  const topText = useGlobalStore((s) => s.global?.header?.topText);

  const localizedText = topText?.text?.[lang] || topText?.text?.en || '';

  return (
    <header className={styles.header}>
      {topText?.enabled && localizedText && (
        <Box className={styles.ad}>{localizedText}</Box>
      )}
      <Box>
        <Box className={styles.content}>
          <nav className={styles.navigation}>
            <NestedMenu items={menuItems} isRoot />
          </nav>

          <Logo className={styles.logo} />

          <LanguageSelector />
        </Box>
      </Box>
    </header>
  );
};
