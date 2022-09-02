import { Box, Container, Heading, Text, Grid } from '@chakra-ui/react';
import CardImage from '../../assets/images/image--1.png';
import CardImageOne from '../../assets/images/image--2.png';
import CardImageTwo from '../../assets/images/image--3.png';
import Card from '../card/Card';

const Popular = function () {
  return (
    <Box as='section' mt='-96' pt={20}>
      <Container maxW='container.xl' p='0' pb='40'>
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
          ></Card>
          <Card
            title='Espresso'
            price='12 K'
            image={CardImageOne}
            isPopular={true}
            rating='4.8'
          ></Card>
          <Card
            title='Hazelnut Latte'
            price='23 K'
            image={CardImageTwo}
            isPopular={true}
            rating='4.8'
          ></Card>
        </Grid>
      </Container>
    </Box>
  );
};

export default Popular;
