'use client';
import { NavigationMenu } from '@navoiy-workspace/types';
import { Button, Menu, Portal, Link, Text } from '@chakra-ui/react';
import { LuChevronRight, LuChevronDown } from 'react-icons/lu';
import styles from './nested-menu.module.scss';

export const NestedMenu: React.FC<NavigationMenu> = ({
  items,
  isRoot,
}: NavigationMenu) => {
  return (
    <>
      {items.map((item) =>
        item.subItems ? (
          <Menu.Root key={item.name} closeOnSelect={false}>
            {isRoot ? (
              <Menu.Trigger asChild>
                <Button
                  className={styles['menu-item']}
                  aria-label={item.name}
                  variant="plain"
                >
                  {item.name} <LuChevronDown width={4} height={9} />
                </Button>
              </Menu.Trigger>
            ) : (
              <Menu.TriggerItem
                className={styles['menu-subitem']}
                role="menuitem"
                aria-label={item.name}
                aria-haspopup="menu"
                tabIndex={0}
              >
                <Text>{item.name}</Text>
                <LuChevronRight width={4} height={9} />
              </Menu.TriggerItem>
            )}

            <Portal>
              <Menu.Positioner>
                <Menu.Content
                  className={isRoot ? styles.dropdown : styles.submenu}
                  role="menu"
                >
                  <NestedMenu items={item.subItems} />
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        ) : (
          <Link
            className={isRoot ? styles['menu-item'] : styles['menu-subitem']}
            key={item.name}
            href={item.href}
            role="menuitem"
            aria-label={item.name}
            tabIndex={0}
          >
            {item.name}
          </Link>
        )
      )}
    </>
  );
};
