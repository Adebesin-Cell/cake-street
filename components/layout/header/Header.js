import { Container, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import CartIcon from '../../cart/CartIcon';
import Logo from '../../logo/Logo';
import Search from '../../searchbar/Search';
import Navigation from '../navigation/Navigation';

const Header = function () {
  return (
    <Container
      maxW={'container.xl'}
      p='0'
      px={{
        xxl: '0',
        xlg: '5',
        xl: '5',
        xsm: '5',
      }}
    >
      <Flex
        as='header'
        alignItems={'center'}
        justifyContent={'space-between'}
        pt={{
          xl: 12,
          md: '8',
          xsm: '6',
        }}
        pb='30'
      >
        {/* Logo Box */}
        <Flex alignItems='center'>
          <NextLink href='/home'>
            <Link display='flex'>
              <Logo />
            </Link>
          </NextLink>
        </Flex>
        {/* Logo Box ends */}
        {/* Navigation menu */}
        <Navigation />
        {/* Navigation menu ends */}
        <Flex
          alignItems='center'
          display={{
            xsm: 'none',
            xl: 'flex',
          }}
        >
          <Search />
          <CartIcon />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
