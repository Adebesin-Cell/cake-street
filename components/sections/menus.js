import { Grid, Box, Container } from '@chakra-ui/react';
import Card from '../card/Card';
import CardImage from '../../assets/images/image--4.png';
import CardImageOne from '../../assets/images/image--5.png';
import CardImageTwo from '../../assets/images/image--6.png';
import CardImageThree from '../../assets/images/image--7.png';
import CardImageFour from '../../assets/images/image--8.png';
import CardImageFive from '../../assets/images/image--9.png';
import SectionTitle from '../ui/title/SectionTitle';

// Special Menus section
const Menus = function () {
  return (
    <Box as='section' pt={{ xl: '32', xsm: '20' }}>
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
        <SectionTitle text='Special menu' subText='for you' />
        <Grid
          templateColumns={{
            xl: 'repeat(3, 1fr)',
            md: 'repeat(2, 1fr)',
            xsm: 'repeat(1, 1fr)',
          }}
          columnGap={10}
          rowGap={10}
          mt='9'
        >
          <Card
            image={CardImage}
            title='Sandwich'
            price='12 K'
            rating='4.8'
            description='Bread with meat and vegetables'
          ></Card>
          <Card
            image={CardImageOne}
            title='Hot Milk'
            price='12 K'
            rating='4.8'
            description='Hot Milk with less sugar'
          ></Card>
          <Card
            image={CardImageTwo}
            title='Coffe Ice Cream'
            price='12 K'
            rating='4.8'
            description='Coffe with ice cream vanilla'
          ></Card>
          <Card
            image={CardImageThree}
            title='Cappucino'
            price='12 K'
            rating='4.8'
            description='Hot Cappucino'
          ></Card>
          <Card
            image={CardImageFour}
            title='Moccacinno'
            price='12 K'
            rating='4.8'
            description='Hot Moccacino'
          ></Card>
          <Card
            image={CardImageFive}
            title='Waffle Ice Crem'
            price='12 K'
            rating='4.8'
            description='Wafle with Ice cream'
          ></Card>
        </Grid>
      </Container>
    </Box>
  );
};

export default Menus;
