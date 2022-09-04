import { Flex, List, ListItem, Link } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import Btn from '../ui/button/Button';
import NextLink from 'next/link';

// Mobile Menu
const Menu = function (props) {
  return (
    <Flex
      w='full'
      direction='column'
      bgColor='white'
      minH='100vh'
      pos='fixed'
      top='0'
      left='0'
      zIndex='4'
      display={{ xl: 'none', xsm: 'flex' }}
      p='5'
    >
      <Flex justifyContent='flex-end'>
        <Btn variant='unstyled' onClick={props.onClose}>
          <CloseIcon w='6' h='6' />
        </Btn>
      </Flex>
      <Flex flexGrow='1' alignItems='center' justifyContent='center'>
        {/* Navigation list starts here */}
        <List
          display='flex'
          flexDirection='column'
          alignItems='center'
          listStyleType='none'
          gap='4'
        >
          <ListItem>
            <NextLink href='/' name='Home' onClick={props.onClose}>
              <Link
                transition='all 300ms'
                _hover={{ textDecoration: 'none', color: 'brand.50' }}
                fontSize={16}
                textAlign='center'
                w='full'
                display='block'
              >
                Home
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href='/about' name='About us' onClick={props.onClose}>
              <Link
                transition='all 300ms'
                _hover={{ textDecoration: 'none', color: 'brand.50' }}
                fontSize={16}
                textAlign='center'
                w='full'
                display='block'
              >
                About us
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink
              href='/product'
              name='Our Product'
              onClick={props.onClose}
            >
              <Link
                transition='all 300ms'
                _hover={{ textDecoration: 'none', color: 'brand.50' }}
                fontSize={16}
                textAlign='center'
                w='full'
                display='block'
              >
                Our Product
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href='/delivery' name='Delivery' onClick={props.onClose}>
              <Link
                transition='all 300ms'
                _hover={{ textDecoration: 'none', color: 'brand.50' }}
                fontSize={16}
                textAlign='center'
                w='full'
                display='block'
              >
                Delivery
              </Link>
            </NextLink>
          </ListItem>
        </List>
        {/* Navigation List End here */}
      </Flex>
    </Flex>
  );
};

export default Menu;
