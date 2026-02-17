import { BREADCRUMB_CONFIG, Pages } from '@navoiy-workspace/types';

export interface BreadcrumbBuilderParams {
  pathname: string;
  breadcrumbsTranslations: Record<string, string>;
  title?: string;
}
export const buildBreadcrumbs = ({
  pathname,
  breadcrumbsTranslations,
  title,
}: BreadcrumbBuilderParams) => {
  const parts = pathname.split('/').filter(Boolean);
  const root = parts[0] as Pages;

  const configs = BREADCRUMB_CONFIG[root as keyof typeof BREADCRUMB_CONFIG];

  if (!configs) {
    return [{ href: pathname, label: title || 'Error', isError: true }];
  }

  for (const entry of configs) {
    const match = pathname.match(entry.match);

    if (match) {
      const id = match[1];
      return entry.build(breadcrumbsTranslations, id);
    }
  }

  return [{ href: pathname, label: title || 'Error', isError: true }];
};
