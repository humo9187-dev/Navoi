import { Field, Input } from '@chakra-ui/react';
import { useGlobalConfigStore } from '@navoiy-workspace/store';

interface RegularGlobalInputProps {
  path: string[];
  label: string;
}

export const RegularGlobalInput = ({
  path,
  label,
}: RegularGlobalInputProps) => {
  const config = useGlobalConfigStore((s) => s.config);
  const updateField = useGlobalConfigStore((s) => s.updateField);

  const value =
    path.reduce((acc: any, key) => (acc ? acc[key] : undefined), config) ?? '';

  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Input
        value={value}
        onChange={(e) => updateField(path, e.target.value)}
      />
    </Field.Root>
  );
};
