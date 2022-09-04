import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import TestimonialList from '../testimonial/TestimonialList';
import SectionTitle from '../ui/title/SectionTitle';

const Testimonial = function () {
  return (
    <Box
      as='section'
      mt='32'
      pt='28'
      bgSize='contain'
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
            xlg: '24',
          }}
        >
          <GridItem pt='20' pb='20'>
            <SectionTitle text='What they say about us'></SectionTitle>
            <Text mt='4' maxW='75%' fontSize='l' color='brand.500'>
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
