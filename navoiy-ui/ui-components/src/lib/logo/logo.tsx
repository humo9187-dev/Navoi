import { Link, LinkProps } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../assets/images/logo.png';
import logoWhite from '../assets/images/logo-white.png';

interface LogoVariant {
  variant?: 'default' | 'white';
}

type LogoProps = LogoVariant & LinkProps;

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  ...rest
}: LogoVariant) => {
  return (
    <Link href="/" aria-label="Go to homepage" {...rest}>
      <Image
        src={variant === 'default' ? logo : logoWhite}
        alt="Navoiy theatre logo"
        width={134}
        height={100}
      />
    </Link>
  );
};
