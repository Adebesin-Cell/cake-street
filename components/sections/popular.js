import { Box, Container, Heading, Text, Grid } from '@chakra-ui/react';
import CardImage from '../../assets/images/image--1.png';
import CardImageOne from '../../assets/images/image--2.png';
import CardImageTwo from '../../assets/images/image--3.png';
import Card from '../card/Card';

const Popular = function () {
  return (
    <Box as='section' mt='-96' pt={20}>
      <Container maxW='container.xl' p='0' pb='40'>
        <Heading>
          Popular
          <Text as='span'> Now</Text>
        </Heading>
        <Grid gap={10} templateColumns='repeat(3, 1fr)' mt={10}>
          <Card
            title='Vanilla Latte'
            price='21 K'
            image={CardImage}
            isPopular={true}
          ></Card>
          <Card
            title='Espresso'
            price='12 K'
            image={CardImageOne}
            isPopular={true}
          ></Card>
          <Card
            title='Hazelnut Latte'
            price='23 K'
            image={CardImageTwo}
            isPopular={true}
          ></Card>
        </Grid>
      </Container>
    </Box>
  );
};

export default Popular;
