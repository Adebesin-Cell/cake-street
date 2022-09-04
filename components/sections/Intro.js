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
import Hero from '../../assets/images/hero-img.png';
import { ShoppingCartIcon } from '../../utils/icons/Icons';
import IntroBtn from '../intro/IntroBtn';

// Intro section
const Intro = function () {
  return (
    <Box
      as='section'
      bgImage='url(../../assets/images/intro-background.png)'
      bgSize='cover'
      bgRepeat='no-repeat'
    >
      {/* Header starts here */}
      <Header />
      {/* Header ends here */}
      <Container
        maxW='container.xl'
        p='0'
        px={{
          xxl: '0',
          xlg: '5',
          xl: '5',
          xsm: '5',
        }}
        pb={{
          xl: 96,
          lg: '20',
        }}
      >
        <Grid
          templateColumns={{
            xsm: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
          pt={20}
          gap={10}
        >
          <GridItem>
            <Heading
              color='brand.900'
              textAlign={{
                xsm: 'center',
                lg: 'left',
              }}
              fontSize={{ xl: 48, xsm: 32 }}
              fontWeight={600}
            >
              <Text as='span' display='block'>
                Enjoy your
                <Text as='span' color='brand.50'>
                  {' '}
                  coffee
                </Text>
              </Text>
              <Text as='span' display='block'>
                before your activity
              </Text>
            </Heading>
            <Text
              mt={6}
              maxW={{
                xsm: '65%',
                lg: '65%',
              }}
              mr={{
                xsm: 'auto',
                lg: 'left',
              }}
              ml={{
                xsm: 'auto',
                lg: 'initial',
              }}
              textAlign={{
                xsm: 'center',
                lg: 'left',
              }}
              color='brand.500'
            >
              Boost your productivity and build your mood with a glass of coffee
              in the morning
            </Text>
            <Flex
              mt={8}
              columnGap={6}
              justifyContent={{
                lg: 'left',
                xsm: 'center',
              }}
              direction={{ lg: 'row', xsm: 'column' }}
              maxW={{ lg: '100%', xsm: '220px' }}
              mx={{ lg: '0', xsm: 'auto' }}
              rowGap={{ lg: '0', xsm: '2.5' }}
            >
              <IntroBtn hasBg={true}>
                <Text color='white' mr={2.5}>
                  Order now
                </Text>
                <Flex
                  as='span'
                  alignItems='center'
                  justifyContent='center'
                  w={6}
                  h={6}
                  borderRadius='full'
                  bg='brand.50'
                >
                  <ShoppingCartIcon width={3} height={3} color='#fff' />
                </Flex>
              </IntroBtn>
              <IntroBtn>
                <Text color='brand.150'>More menu</Text>
              </IntroBtn>
            </Flex>
          </GridItem>
          <GridItem pb={{ lg: '0', xsm: '20' }}>
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
