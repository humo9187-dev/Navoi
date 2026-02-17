import React from 'react';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { LanguageCode } from '@navoiy-workspace/types';
import { useLangStore } from '@navoiy-workspace/store';
import { Pages } from '@navoiy-workspace/types';
import styles from './see-all-events-button.module.scss';

type SeeAllEventsButtonProps = {
  lang: LanguageCode;
};

export const SeeAllEventsButton: React.FC<SeeAllEventsButtonProps> = (lang) => {
  const router = useRouter();
  const seeAllEventsButtonLabel = useLangStore(
    (state) => state.translations[Pages.home].nextEvents.seeAllEventsButton
  );

  return (
    <Button onClick={() => router.push(`/events`)} className={styles.button}>
      {seeAllEventsButtonLabel}
    </Button>
  );
};
