'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Text } from '@chakra-ui/react';
import { Breadcrumb } from '@chakra-ui/react';
import styles from './breadcrumbs.module.scss';
import {
  UI_TRANSLATIONS,
  TranslationAreas,
  Pages,
} from '@navoiy-workspace/types';
import { useLangStore } from '@navoiy-workspace/store';
import { buildBreadcrumbs } from '@navoiy-workspace/utils';

export const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const language = useLangStore((state) => state.language);
  const breadcrumbsTranslations =
    UI_TRANSLATIONS[language]?.[TranslationAreas.breadcrumbs] ?? {};
  const page404Title =
    UI_TRANSLATIONS[language]?.[TranslationAreas.page404]?.title;
  const page500Title =
    UI_TRANSLATIONS[language]?.[TranslationAreas.page500]?.title;

  if (!pathname || pathname === '/') return null;

  const is500Page = pathname === '/500' || pathname.startsWith('/500/');

  const crumbs = buildBreadcrumbs({
    pathname,
    breadcrumbsTranslations: breadcrumbsTranslations,
    title: is500Page ? page500Title : page404Title,
  });

  const is404 =
    crumbs.length === 1 && 'isError' in crumbs[0] && crumbs[0].isError;

  return (
    <Box className={styles.wrapper}>
      <Breadcrumb.Root className={styles.container}>
        <Breadcrumb.List className={styles.crumb}>
          {!is404 && !is500Page && (
            <Breadcrumb.Item>
              <Breadcrumb.Link asChild>
                <Link href="/">
                  <Text className={styles.text}>
                    {breadcrumbsTranslations[Pages.home]}
                  </Text>
                </Link>
              </Breadcrumb.Link>
            </Breadcrumb.Item>
          )}

          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;

            return (
              <React.Fragment key={crumb.href}>
                {!is404 && <Breadcrumb.Separator color="#000" />}
                <Breadcrumb.Item>
                  {isLast ? (
                    <Breadcrumb.CurrentLink aria-current="page">
                      <Text className={styles.text}>{crumb.label}</Text>
                    </Breadcrumb.CurrentLink>
                  ) : (
                    <Breadcrumb.Link asChild>
                      <Link href={crumb.href}>
                        <Text className={styles.text}>{crumb.label}</Text>
                      </Link>
                    </Breadcrumb.Link>
                  )}
                </Breadcrumb.Item>
              </React.Fragment>
            );
          })}
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </Box>
  );
};

export default Breadcrumbs;
