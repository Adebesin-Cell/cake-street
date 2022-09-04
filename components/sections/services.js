import { Box, Container, Grid } from '@chakra-ui/react';
import ServicesCard from '../services/ServicesCard';
import SectionTitle from '../ui/title/SectionTitle';
import ServicesImage from '../../assets/images/choice.png';
import ServicesImageOne from '../../assets/images/food-truck.png';
import ServicesImageTwo from '../../assets/images/coffee-cup.png';

const Services = function () {
  return (
    <Box as='section' pt='5'>
      <Container
        maxW='container.xl'
        p='0'
        px={{
          xxl: '0',
          xlg: '5',
          xl: '5',
          xsm: '5',
        }}
      >
        <SectionTitle text='How to use delivery' subText='service' />
        <Grid
          templateColumns={{
            xl: 'repeat(3, 1fr)',
            md: 'repeat(2, 1fr)',
            xsm: 'repeat(1, 1fr)',
          }}
          gap={{
            xl: '0',
            md: '10',
            xsm: '10',
          }}
          mt='12'
        >
          <ServicesCard
            image={ServicesImage}
            title='choose your coffee'
            paragraph='There are 20+ coffees for you'
          />
          <ServicesCard
            image={ServicesImageOne}
            title='we deliver it to you'
            paragraph='Choose delivery service'
          />
          <ServicesCard
            image={ServicesImageTwo}
            title='Enjoy your coffee'
            paragraph='Choose delivery service'
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
