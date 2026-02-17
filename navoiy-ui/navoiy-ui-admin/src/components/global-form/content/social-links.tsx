import { Fieldset, Stack } from '@chakra-ui/react';
import { RegularGlobalInput } from '../fields/regular-input';

export const SocialLinksSection = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Legend>Social Links</Fieldset.Legend>

      <Stack gap={4}>
        <RegularGlobalInput
          path={['socialLinks', 'facebook']}
          label="Facebook"
        />
        <RegularGlobalInput
          path={['socialLinks', 'telegram']}
          label="Telegram"
        />
        <RegularGlobalInput
          path={['socialLinks', 'instagram']}
          label="Instagram"
        />
      </Stack>
    </Fieldset.Root>
  );
};
