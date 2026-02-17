import React from 'react';
import style from './pagination-controls.module.scss';
import Link from 'next/link';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { createQueryString, QUERY_KEYS } from '@navoiy-workspace/utils';
import { usePathname, useSearchParams } from 'next/navigation';
import { PaginationLink } from './pagination-link';
import {
  ButtonGroup,
  Container,
  IconButton,
  Pagination,
  useBreakpointValue,
} from '@chakra-ui/react';

export const PaginationControls: React.FC<{
  page: number;
  count: number;
  pageSize?: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ page, count, pageSize, setPage }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const siblingCount = useBreakpointValue({ base: 0, sm: 1, md: 2 }) ?? 0;

  return (
    <Container>
      <Pagination.Root
        className={style.paginationRoot}
        count={count}
        page={page}
        siblingCount={siblingCount}
        onPageChange={(e) => setPage(e.page)}
        pageSize={pageSize}
      >
        <ButtonGroup variant="ghost" size={{ base: 'xs', sm: 'sm' }}>
          <PaginationLink page="prev">
            <LuChevronLeft />
          </PaginationLink>

          <Pagination.Items
            render={(page) => {
              const name = QUERY_KEYS.PAGE;
              const paramValue = page.value.toString();
              return (
                <IconButton
                  className={style.iconButton}
                  _selected={{ bg: style.backgroun, color: style.text }}
                  asChild
                >
                  <Link
                    href={`${pathname}?${createQueryString({ searchParams, name, paramValue })}`}
                  >
                    {page.value}
                  </Link>
                </IconButton>
              );
            }}
          />

          <PaginationLink page="next">
            <LuChevronRight />
          </PaginationLink>
        </ButtonGroup>
      </Pagination.Root>
    </Container>
  );
};
