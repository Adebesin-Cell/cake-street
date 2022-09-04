import { Box, List, ListItem, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navigation = function () {
  return (
    // navigation container starts here
    <Box
      as='nav'
      display={{
        xsm: 'none',
        xl: 'flex',
      }}
    >
      {/* Navigation list starts here */}
      <List display='flex' alignItems='center' listStyleType='none' gap={8}>
        <ListItem>
          <NextLink href='/about' name='About us'>
            <Link
              transition='all 300ms'
              _hover={{ textDecoration: 'none', color: 'brand.50' }}
              fontSize={16}
            >
              About us
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href='/product' name='Our Product'>
            <Link
              transition='all 300ms'
              _hover={{ textDecoration: 'none', color: 'brand.50' }}
              fontSize={16}
            >
              Our Product
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href='/delivery' name='Delivery'>
            <Link
              transition='all 300ms'
              _hover={{ textDecoration: 'none', color: 'brand.50' }}
              fontSize={16}
            >
              Delivery
            </Link>
          </NextLink>
        </ListItem>
      </List>
      {/* Navigation list ends here */}
    </Box>
    // navigation container ends here
  );
};

export default Navigation;
