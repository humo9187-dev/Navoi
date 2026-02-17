'use client';

import { Switch } from '@chakra-ui/react';
import { useFormStore } from '@navoiy-workspace/store';
import { getByPath } from '@navoiy-workspace/utils';
import React from 'react';

type PublishToggleProps = {
  scope: string;
  saveStateAction: () => Promise<void>;
};

export const PublishToggle: React.FC<PublishToggleProps> = ({
  scope,
  saveStateAction,
}) => {
  const fieldValue = useFormStore((s) =>
    getByPath(s, [scope, 'isVisibleToVisitors'])
  );
  const updateByPath = useFormStore((s) => s.updateByPath);
  const isLoading = useFormStore((s) => s.isLoading);

  return (
    <Switch.Root
      checked={fieldValue}
      onCheckedChange={async (e) => {
        updateByPath([scope, 'isVisibleToVisitors'], e.checked);
        await saveStateAction();
      }}
      disabled={isLoading}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label />
    </Switch.Root>
  );
};
