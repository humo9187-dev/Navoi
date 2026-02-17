import { Field, Input, Textarea } from '@chakra-ui/react';
import { useGlobalConfigStore } from '@navoiy-workspace/store';

interface LocalizedGlobalInputProps {
  path: string[];
  lang: 'en' | 'ru' | 'uz';
  label: string;
  rows?: number;
}

export const LocalizedGlobalInput = ({
  path,
  lang,
  label,
  rows,
}: LocalizedGlobalInputProps) => {
  const config = useGlobalConfigStore((s) => s.config);
  const updateField = useGlobalConfigStore((s) => s.updateField);

  const value =
    (config &&
      path.reduce((acc: any, key) => (acc ? acc[key] : undefined), config)?.[
        lang
      ]) ??
    '';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateField([...path, lang], e.target.value);
  };

  return (
    <Field.Root>
      <Field.Label>
        {label} ({lang})
      </Field.Label>

      {rows ? (
        <Textarea rows={rows} value={value} onChange={handleChange} />
      ) : (
        <Input value={value} onChange={handleChange} />
      )}
    </Field.Root>
  );
};
