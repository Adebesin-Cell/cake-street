import { Container, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import CartIcon from '../../cart/CartIcon';
import Logo from '../../logo/Logo';
import Search from '../../searchbar/Search';
import Navigation from '../navigation/Navigation';

const Header = function () {
  return (
    <Container maxW={'container.xl'} p='0'>
      <Flex
        as='header'
        alignItems={'center'}
        justifyContent={'space-between'}
        pt={12}
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
        <Flex alignItems='center'>
          <Search />
          <CartIcon />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
