import styles from './filter-dropdown.module.scss';
import { LuChevronDown } from 'react-icons/lu';
import dividerVertical from '../../assets/icons/divider-vertical.svg';
import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Image,
  Menu,
  Portal,
} from '@chakra-ui/react';
import {
  FilterProps,
  InitialFilterOptions,
  ALL,
  TagKey,
  FilterOptionKey,
} from '@navoiy-workspace/types';

const FilterDropdown: React.FC<FilterProps> = ({
  localizedOptions,
  onChange,
  activeCategory,
  defaultFilterLabels,
}) => {
  const optionLabels = localizedOptions as Record<string, string>;
  const isTagSelected =
    typeof activeCategory === 'string' && activeCategory in optionLabels;
  const selectedLabel = isTagSelected
    ? optionLabels[activeCategory as string]
    : defaultFilterLabels.defaultLabel;

  const initialFilterOptions: InitialFilterOptions = activeCategory
    ? [[ALL, defaultFilterLabels.ALL]]
    : [];

  const filterKeys = Object.keys(optionLabels) as Array<TagKey>;

  const filterOptions = filterKeys.reduce<InitialFilterOptions>(
    (acc, option) => {
      if (option !== activeCategory) {
        acc.push([option, optionLabels[option]]);
      }
      return acc;
    },
    initialFilterOptions
  );
  return (
    <Center className={styles.filterDropdown}>
      <Menu.Root>
        <Menu.Trigger asChild>
          <ButtonGroup variant="outline" attached>
            <Button className={styles.filterDropdown__button}>
              <Box className={styles.filterDropdown__label}>
                {selectedLabel}
              </Box>
              <Image src={dividerVertical} alt="decorative vertical divider" />
              <LuChevronDown />
            </Button>
          </ButtonGroup>
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content className={styles.filterDropdown__menu}>
              {filterOptions.map(([key, value]) => (
                <Menu.Item
                  key={key}
                  value={key}
                  className={styles.filterDropdown__menuItem}
                  onSelect={() => onChange(key as FilterOptionKey)}
                  _highlighted={{ bg: 'none' }}
                >
                  <span className={styles.filterDropdown__menuLink}>
                    {value}
                  </span>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Center>
  );
};

export default FilterDropdown;
