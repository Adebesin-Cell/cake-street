import { Box, List, ListItem, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navigation = function () {
  return (
    <Box as='nav'>
      <List display='flex' alignItems='center' listStyleType='none' gap={8}>
        <ListItem>
          <NextLink href='/about' name='About us'>
            <Link>About us</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href='/product' name='Our Product'>
            <Link>Our Product</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href='/delivery' name='Delivery'>
            <Link>Delivery</Link>
          </NextLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navigation;
