import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import SectionContainer from '../layout/container/SectionContainer';
import TestimonialList from '../testimonial/TestimonialList';
import SectionTitle from '../ui/title/SectionTitle';

// Testimonial Section
const Testimonial = function () {
  return (
    <Box
      as='section'
      mt={{ xl: '32', xsm: '20' }}
      pt={{
        xxl: '28',
        lg: '24',
        xsm: '16',
      }}
      bgSize={{
        xmd: 'contain',
        xsm: 'cover',
      }}
      bgRepeat={'no-repeat'}
      bgImage={'url(../../assets/images/testimonial-image.png)'}
    >
      <SectionContainer>
        <Grid
          templateColumns={{
            xmd: '1fr 2fr',
            xsm: '1fr',
          }}
          gap={{ lg: '16', xsm: '10' }}
          pb={{
            xxl: '28',
            lg: '24',
            xsm: '16',
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
      </SectionContainer>
    </Box>
  );
};

export default Testimonial;
