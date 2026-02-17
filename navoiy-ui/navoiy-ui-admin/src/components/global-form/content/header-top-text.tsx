import { Fieldset, Stack, Checkbox } from '@chakra-ui/react';
import { LocalizedGlobalInput } from '../fields/localized-input';
import { useGlobalConfigStore } from '@navoiy-workspace/store';

const languages: Array<'en' | 'ru' | 'uz'> = ['en', 'ru', 'uz'];

export const HeaderTopTextSection = () => {
  const enabled = useGlobalConfigStore(
    (s) => s.config?.header?.topText?.enabled ?? false
  );
  const updateField = useGlobalConfigStore((s) => s.updateField);
  return (
    <Fieldset.Root>
      <Fieldset.Legend>Header</Fieldset.Legend>
      <Fieldset.Content>
        <Checkbox.Root
          checked={enabled}
          onCheckedChange={(e) =>
            updateField(['header', 'topText', 'enabled'], e.checked)
          }
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label>Enabled</Checkbox.Label>
        </Checkbox.Root>
      </Fieldset.Content>
      {languages.map((lang) => (
        <Fieldset.Content key={lang}>
          <Stack gap={4}>
            <LocalizedGlobalInput
              path={['header', 'topText', 'text']}
              lang={lang}
              label="Top text"
            />
          </Stack>
        </Fieldset.Content>
      ))}
    </Fieldset.Root>
  );
};
