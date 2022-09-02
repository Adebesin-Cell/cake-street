import {
  Box,
  Container,
  Grid,
  GridItem,
  Flex,
  Img,
  Text,
} from '@chakra-ui/react';
import AboutImage from '../../assets/images/about-image.png';
import IntroBtn from '../intro/IntroBtn';
import SectionTitle from '../ui/title/SectionTitle';

const AboutUs = function () {
  const innerCardStyles = {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)',
    backdropFilter: 'blur(4px)',
    borderRadius: '12px',
    filter: 'drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.16))',
  };

  return (
    <Box as='section' bgColor={'brand.350'} mt='64'>
      <Box
        bgImage='url(../../assets/images/about-background.png)'
        bgSize='cover'
        bgRepeat='no-repeat'
        w='full'
        ml='-3'
      >
        <Container maxW='container.xl' p='0'>
          <Grid templateColumns='repeat(2, 1fr)' pt='20' pb='16'>
            <GridItem>
              <Flex direction={'column'}>
                <Flex mt='-48' justifyContent='center'>
                  <Box w='max-content' p='5px' sx={innerCardStyles}>
                    <Img
                      src={AboutImage.src}
                      display='block'
                      maxW='400px'
                      w='full'
                      objectFit='cover'
                      alt='About Us'
                    ></Img>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem>
              <SectionTitle text='About' subText='Us'></SectionTitle>
              <Text
                mt='5'
                color='black'
                fontSize={'xl'}
                fontWeight={600}
                maxW='50%'
                pr='4'
              >
                We provide quality coffee, and ready to deliver.
              </Text>
              <Text mt='3.5' maxW='65%' fontSize='l' color='brand.500'>
                We are a company that makes and distributes delicious drinks.
                our main product is made with a secret recipe and available in
                stores worldwide.
              </Text>
              <IntroBtn mt='8' hasBg={true}>
                <Text
                  textAlign='center'
                  fontWeight='700'
                  color='brand.150'
                  fontSize='sm'
                >
                  Get your coffee
                </Text>
              </IntroBtn>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
