import { Box, Button, Container } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './header.module.scss';
import { RoutePath } from './header.types';
import { MdLogout } from 'react-icons/md';
import { useAuthStore } from '@navoiy-workspace/store';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const logout = useAuthStore((state) => state.logout);
  const username = sessionStorage.getItem('username') || 'User';

  const isActive = (path: RoutePath): boolean => pathname === path;
  return (
    <Container>
      <Box className={styles.wrapper}>
        <Button
          onClick={() => router.push('/events')}
          disabled={isActive('/events')}
        >
          Go to Events
        </Button>
        <Button
          onClick={() => router.push('/news')}
          disabled={isActive('/news')}
        >
          Go to News
        </Button>
        <Button
          onClick={() => router.push('/about-us')}
          disabled={isActive('/about-us')}
        >
          Go to About Us
        </Button>
        <Button onClick={() => router.push('/')} disabled={isActive('/')}>
          Go to Globals
        </Button>

        <Button onClick={logout}>
          {username} <MdLogout />
        </Button>
      </Box>
    </Container>
  );
};
export default Header;
