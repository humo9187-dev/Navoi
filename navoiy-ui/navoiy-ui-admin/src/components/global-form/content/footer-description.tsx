import { Fieldset, Stack } from '@chakra-ui/react';
import { LocalizedGlobalInput } from '../fields/localized-input';
const languages: Array<'en' | 'ru' | 'uz'> = ['en', 'ru', 'uz'];

export const FooterDescriptionSection = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Legend>Footer</Fieldset.Legend>
      <Fieldset.Legend>Description</Fieldset.Legend>
      {languages.map((lang) => (
        <Fieldset.Content key={lang}>
          <Stack gap={4}>
            <LocalizedGlobalInput
              path={['footer', 'description']}
              lang={lang}
              label="Description"
              rows={3}
            />
          </Stack>
        </Fieldset.Content>
      ))}
    </Fieldset.Root>
  );
};
