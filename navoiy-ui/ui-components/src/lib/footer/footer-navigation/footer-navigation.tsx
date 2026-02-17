import styles from '../footer.module.scss';
import { Accordion, useBreakpointValue } from '@chakra-ui/react';
import { Box, Link } from '@chakra-ui/react';
import { FooterNavigationMenu } from '@navoiy-workspace/types';

interface FooterNavigationProps {
  navigation: FooterNavigationMenu[];
}

export const FooterNavigation: React.FC<FooterNavigationProps> = ({
  navigation,
}: FooterNavigationProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return (
      <Accordion.Root collapsible>
        {navigation.map((item) => (
          <Accordion.Item
            key={item.heading}
            value={item.heading}
            className={styles.accordionItem}
          >
            <Accordion.ItemTrigger className={styles.accordionItemHeading}>
              <Link className={styles.navigationHeading} href={item.href}>
                {item.heading}
              </Link>
              <Accordion.ItemIndicator
                className={styles.accordionItemIndicator}
              />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody className={styles.accordionSubmenu}>
                {item.categories.map((category) => (
                  <Link
                    key={category.name}
                    className={styles.footerLink}
                    href={category.href}
                  >
                    {category.name}
                  </Link>
                ))}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    );
  }

  return (
    <Box as="nav" className={styles.navigation}>
      {navigation.map((item) => (
        <Box key={item.heading} className={styles.navigationMenu}>
          <Link className={styles.navigationHeading} href={item.href}>
            {item.heading}
          </Link>
          {item.categories.map((category) => (
            <Link
              key={category.name}
              className={styles.footerLink}
              href={category.href}
            >
              {category.name}
            </Link>
          ))}
        </Box>
      ))}
    </Box>
  );
};
