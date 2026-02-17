import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';
import styles from './category-button.module.scss';

export type CategoryButtonProps = ButtonProps & {
  active?: boolean;
  label: string;
  onSelect?: () => void;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  active,
  label,
  onSelect,
  ...rest
}) => {
  return (
    <Button
      onClick={onSelect}
      className={`${styles.button} ${active ? styles.buttonActive : ''}`}
      {...rest}
    >
      {label}
    </Button>
  );
};
