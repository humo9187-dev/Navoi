import React from 'react';
import style from './page-heading.module.scss';
import { Container, Grid, Heading } from '@chakra-ui/react';
import FilterDropdown from '../filter-dropdown/filter-dropdown';
import { usePathname, useRouter } from 'next/navigation';
import { QUERY_KEYS } from '@navoiy-workspace/utils';
import { FilterOptionKey, HeadingProps } from '@navoiy-workspace/types';

export const PageHeading: React.FC<HeadingProps> = ({
  pageConfig,
  localizedOptions,
  activeCategory,
  setPage,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (selectedTag: FilterOptionKey) => {
    setPage(1);
    const params = new URLSearchParams();
    if (selectedTag in localizedOptions) {
      params.set(QUERY_KEYS.TYPE, selectedTag);
    } else {
      params.delete(QUERY_KEYS.TYPE);
    }
    const queryString = params.toString();
    const href = `${pathname}${queryString ? `?${queryString}` : ''}`;
    router.push(href);
  };

  return (
    <Container>
      <Grid as="section" className={style.headerContainer}>
        <Heading className={style.sectionTitle}>{pageConfig.title}</Heading>
        <FilterDropdown
          localizedOptions={localizedOptions}
          onChange={onChange}
          defaultFilterLabels={pageConfig.filterDefaults}
          activeCategory={activeCategory}
        />
      </Grid>
    </Container>
  );
};
