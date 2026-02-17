import { Fieldset, Input, Stack, Textarea } from '@chakra-ui/react';
import { useGlobalConfigStore } from '@navoiy-workspace/store';
import { LocalizedGlobalInput } from '../fields/localized-input';

const languages: Array<'en' | 'ru' | 'uz'> = ['en', 'ru', 'uz'];
export const FooterContactsSection = () => {
  const config = useGlobalConfigStore((s) => s.config);
  const updateField = useGlobalConfigStore((s) => s.updateField);

  const contacts = config.footer.contacts;

  return (
    <Fieldset.Root>
      <Fieldset.Legend>Contacts</Fieldset.Legend>
      {contacts.map((contact, index) => (
        <Stack key={index} gap={4} mb={6}>
          {languages.map((lang) => (
            <LocalizedGlobalInput
              key={lang}
              path={['footer', 'contacts', String(index), 'name']}
              lang={lang}
              label="Contact or address description"
            />
          ))}
          {typeof contact.value === 'string' && (
            <Input
              value={contact.value}
              onChange={(e) =>
                updateField(
                  ['footer', 'contacts', String(index), 'value'],
                  e.target.value
                )
              }
            />
          )}
          {Array.isArray(contact.value) && (
            <Textarea
              rows={3}
              value={contact.value.join('\n')}
              onChange={(e) =>
                updateField(
                  ['footer', 'contacts', String(index), 'value'],
                  e.target.value.split('\n').map((v) => v.trim())
                )
              }
            />
          )}
          {typeof contact.value === 'object' &&
            !Array.isArray(contact.value) &&
            languages.map((lang) => (
              <LocalizedGlobalInput
                key={lang}
                path={['footer', 'contacts', String(index), 'value']}
                lang={lang}
                label="Contact or address"
                rows={2}
              />
            ))}
        </Stack>
      ))}
    </Fieldset.Root>
  );
};
