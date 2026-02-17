import { createQueryString, QUERY_KEYS } from '@navoiy-workspace/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  Button,
  IconButton,
  IconButtonProps,
  usePaginationContext,
} from '@chakra-ui/react';

export const PaginationLink = (
  props: IconButtonProps & { page?: 'prev' | 'next' | number }
) => {
  const { page, ...rest } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pagination = usePaginationContext();
  const pageValue = (): number | null => {
    if (page === 'prev') return pagination.previousPage;
    if (page === 'next') return pagination.nextPage;
    return page ?? null;
  };
  const targetPage = pageValue();
  if (targetPage === null) {
    return (
      <IconButton as={Link} asChild {...rest}>
        <Button disabled>{props.children}</Button>
      </IconButton>
    );
  }
  const name = QUERY_KEYS.PAGE;
  const paramValue = targetPage.toString();
  return (
    <IconButton as={Link} asChild {...rest} rounded={'full'}>
      {pageValue() === null ? (
        <Button disabled>{props.children}</Button>
      ) : (
        <Link
          replace
          href={`${pathname}?${createQueryString({ searchParams, name, paramValue })}`}
          onClick={() => pagination.setPage(targetPage)}
        >
          {props.children}
        </Link>
      )}
    </IconButton>
  );
};
