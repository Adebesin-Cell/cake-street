import { Box, List, ListItem, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navigation = function () {
  return (
    <Box as='nav'>
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
    </Box>
  );
};

export default Navigation;
