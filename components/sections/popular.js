import { Box, Container, Grid } from '@chakra-ui/react';
import CardImage from '../../assets/images/image--1.png';
import CardImageOne from '../../assets/images/image--2.png';
import CardImageTwo from '../../assets/images/image--3.png';
import Card from '../card/Card';
import SectionTitle from '../ui/title/SectionTitle';

// Popular now section
const Popular = function () {
  return (
    <Box as='section' mt={{ xl: '-96', xsm: '0' }} pt={20} pos='relative'>
      <Container
        pos='relative'
        zIndex={2}
        maxW='container.xl'
        p='0'
        pb={{ xl: '40', xsm: '20' }}
        px={{
          xxl: '0',
          xlg: '5',
          xl: '5',
          xsm: '5',
        }}
      >
        {/* Popular now heading starts here */}
        <SectionTitle text='Popular' subText='Now' />
        {/* Popular now heading ends here */}
        {/* Popular menus grid container */}
        <Grid
          gap={10}
          templateColumns={{
            xl: 'repeat(3, 1fr)',
            md: 'repeat(2, 1fr)',
            xsm: 'repeat(1, 1fr)',
          }}
          mt={10}
        >
          <Card
            title='Vanilla Latte'
            price='21 K'
            image={CardImage}
            isPopular={true}
            rating='4.8'
            servingTypes={['Hot', 'Cold']}
          ></Card>
          <Card
            title='Espresso'
            price='12 K'
            image={CardImageOne}
            isPopular={true}
            rating='4.8'
            servingTypes={['Hot', 'Cold']}
          ></Card>
          <Card
            title='Hazelnut Latte'
            price='23 K'
            image={CardImageTwo}
            isPopular={true}
            rating='4.8'
            servingTypes={['Hot', 'Cold']}
          ></Card>
        </Grid>
        {/* Popular menus grid container */}
      </Container>
      {/* Popular now overlay starts here*/}
      <Box
        pos='absolute'
        top='60%'
        left='50%'
        transform={'translate(-50%,-40%)'}
        maxW={{
          '2xxl': '1440px',
          xxl: 'full',
        }}
        w='full'
        px={{
          '2xxl': '0',
          xxl: '10',
          '2xl': '20',
        }}
        h='50%'
        zIndex={1}
        display={{
          xl: 'block',
          xsm: 'none',
        }}
      >
        <Box w='full' borderRadius='64' bg='brand.300' h='100%'>
          &nbsp;
        </Box>
      </Box>
      {/* Popular now overlay ends here*/}
    </Box>
  );
};

export default Popular;
