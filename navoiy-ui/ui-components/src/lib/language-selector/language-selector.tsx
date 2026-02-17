import { Menu, Portal, Button } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';
import { useLangStore } from '@navoiy-workspace/store';
import { LanguageCode, languageCodes } from '@navoiy-workspace/types';
import styles from './language-selector.module.scss';

export const LanguageSelector: React.FC = () => {
  const language = useLangStore((state) => state.language);
  const setLanguage = useLangStore((state) => state.setLanguage);
  const handleLanguageChange = (lang: LanguageCode) => {
    setLanguage(lang);
  };

  return (
    <Menu.Root>
      <Menu.Trigger className={styles['lang-selector']} asChild>
        <Button className={styles['lang-button']} variant="plain" size="sm">
          {language} <LuChevronDown width={4} height={8} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content className={styles['lang-menu']}>
            {languageCodes.map((lang) => (
              <Menu.Item
                className={`${styles['lang-option']} ${lang === language ? styles.selected : ''}`}
                key={lang}
                value={lang}
                onClick={() => handleLanguageChange(lang)}
              >
                {lang}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
