import { SlideFade, Flex, List, ListItem, Link } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import Btn from '../ui/button/Button';
import NextLink from 'next/link';

// Mobile Menu
const Menu = function (props) {
  return (
    <SlideFade
      style={{
        width: '100vw',
        direction: 'column',
        background: 'white',
        minHeight: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '4',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
      offsetX='20px'
      in={props.isOpen}
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
            <NextLink href='/' name='Home'>
              <Link
                transition='all 300ms'
                _hover={{ textDecoration: 'none', color: 'brand.50' }}
                fontSize={16}
                textAlign='center'
                w='full'
                display='block'
                onClick={props.onClose}
              >
                Home
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href='/about' name='About us'>
              <Link
                transition='all 300ms'
                _hover={{ textDecoration: 'none', color: 'brand.50' }}
                fontSize={16}
                textAlign='center'
                w='full'
                display='block'
                onClick={props.onClose}
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
                textAlign='center'
                w='full'
                display='block'
                onClick={props.onClose}
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
                textAlign='center'
                w='full'
                display='block'
                onClick={props.onClose}
              >
                Delivery
              </Link>
            </NextLink>
          </ListItem>
        </List>
        {/* Navigation List End here */}
      </Flex>
    </SlideFade>
  );
};

export default Menu;
