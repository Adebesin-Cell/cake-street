import { Box, Container, Heading, Text, Grid } from '@chakra-ui/react';
import CardImage from '../../assets/images/image--1.png';
import CardImageOne from '../../assets/images/image--2.png';
import CardImageTwo from '../../assets/images/image--3.png';
import Card from '../card/Card';

const Popular = function () {
  return (
    <Box as='section' mt='-96' pt={20} pos='relative'>
      <Container pos='relative' zIndex={2} maxW='container.xl' p='0' pb='40'>
        <Heading display='flex' gap='10px' fontSize={32} color='black'>
          Popular
          <Text as='span' pos='relative'>
            {' '}
            Now
            <Box
              as='span'
              pos='absolute'
              bottom={0}
              left={0}
              w='full'
              h='4px'
              borderRadius='12'
              bg='brand.50'
            ></Box>
          </Text>
        </Heading>
        <Grid gap={10} templateColumns='repeat(3, 1fr)' mt={10}>
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
      </Container>
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
      >
        <Box w='full' borderRadius='64' bg='brand.300' h='100%'>
          &nbsp;
        </Box>
      </Box>
    </Box>
  );
};

export default Popular;
