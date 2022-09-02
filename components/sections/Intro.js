import {
  Container,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
  Img,
} from '@chakra-ui/react';
import Header from '../layout/header/Header';
import Btn from '../ui/button/Button';
import CartIconFilled from '../../assets/images/icon-cart_fill.svg';
import Hero from '../../assets/images/hero-img.png';
import Image from 'next/image';

const Intro = function () {
  const orderBtnStyles = {
    background: '#2F2105',
    boxShadow: '0px 4px 32px rgba(223, 195, 124, 0.25)',
    borderRadius: '33px',
  };

  return (
    <Box
      as='section'
      bgImage='url(../../assets/images/intro-background.png)'
      bgSize='cover'
      bgRepeat='no-repeat'
    >
      <Header />
      <Container maxW='container.xl' p='0' pb={96}>
        <Grid templateColumns='repeat(2, 1fr)' pt={20} gap={10}>
          <GridItem>
            <Heading>
              <Text as='span' display='block'>
                Enjoy your
                <Text as='span'> coffee</Text>
              </Text>
              <Text as='span' display='block'>
                before your activity
              </Text>
            </Heading>
            <Text mt={6} maxW='65%'>
              Boost your productivity and build your mood with a glass of coffee
              in the morning
            </Text>
            <Flex mt={8} columnGap={6}>
              <Btn
                display='flex'
                sx={orderBtnStyles}
                variant='unstyled'
                h={12}
                pr={8}
                pl={8}
                alignItems='center'
              >
                <Text color='white' mr={2.5}>
                  Order now
                </Text>
                <Flex as='span' alignItems='center'>
                  <Image src={CartIconFilled} alt='Cart Icon'></Image>
                </Flex>
              </Btn>
              <Btn
                display='flex'
                variant='unstyled'
                h={12}
                pr={8}
                pl={8}
                alignItems='center'
              >
                <Text>More menu</Text>
              </Btn>
            </Flex>
          </GridItem>
          <GridItem>
            <Img
              src={Hero.src}
              style={{ position: 'static', width: '100%', display: 'block' }}
              alt='hero image'
            ></Img>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
