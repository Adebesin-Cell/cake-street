import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import TestimonialList from '../testimonial/TestimonialList';
import SectionTitle from '../ui/title/SectionTitle';

const Testimonial = function () {
  return (
    <Box
      as='section'
      mt='32'
      pt={{
        xxl: '28',
        lg: '24',
      }}
      bgSize={{
        xmd: 'contain',
        xsm: 'cover',
      }}
      bgRepeat={'no-repeat'}
      bgImage={'url(../../assets/images/testimonial-image.png)'}
    >
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
        <Grid
          templateColumns={{
            xmd: '1fr 2fr',
            xsm: '1fr',
          }}
          gap='16'
          pb={{
            xxl: '28',
            lg: '24',
          }}
        >
          <GridItem pt={{ xxl: '20', lg: '10' }} pb={{ xxl: '20', lg: '10' }}>
            <SectionTitle text='What they say about us'></SectionTitle>
            <Text
              mt='4'
              maxW='75%'
              mx={{
                xmd: 'initial',
                xsm: 'auto',
              }}
              fontSize='md'
              color='brand.500'
              textAlign={{
                xmd: 'left',
                xsm: 'center',
              }}
            >
              We always provide the best service and always maintain the quality
              of coffee
            </Text>
          </GridItem>
          <GridItem>
            <TestimonialList></TestimonialList>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
