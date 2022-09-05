import { Box, Grid, GridItem, Flex, Img, Text } from '@chakra-ui/react';
import AboutImage from '../../assets/images/about-image.png';
import IntroBtn from '../intro/IntroBtn';
import SectionContainer from '../layout/container/SectionContainer';
import SectionTitle from '../ui/title/SectionTitle';

// About Us Section
const AboutUs = function () {
  // About Us Image blur background
  const innerCardStyles = {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)',
    backdropFilter: 'blur(4px)',
    borderRadius: '12px',
    filter: 'drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.16))',
  };

  return (
    <Box as='section' bgColor={'brand.350'} mt={{ xl: '64', xsm: '52' }}>
      <Box
        bgImage='url(../../assets/images/about-background.png)'
        bgSize='cover'
        bgRepeat='no-repeat'
        w='full'
        ml={{ xmd: '-3', xsm: '0' }}
      >
        <SectionContainer>
          <Grid
            templateColumns={{
              xmd: 'repeat(2, 1fr)',
              xsm: 'repeat(1, 1fr)',
            }}
            pt='20'
            pb='16'
          >
            <GridItem>
              <Flex direction={'column'}>
                <Flex mt='-48' justifyContent='center'>
                  <Box
                    w={{ md: 'max-content', xsm: '100%' }}
                    p='5px'
                    sx={innerCardStyles}
                  >
                    <Img
                      src={AboutImage.src}
                      display='block'
                      maxW={{ md: '400px', xsm: '100%' }}
                      w='full'
                      objectFit='cover'
                      alt='About Us'
                    ></Img>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem
              mt={{
                xmd: 0,
                xsm: '10',
              }}
            >
              <SectionTitle text='About' subText='Us'></SectionTitle>
              <Text
                mt='5'
                color='black'
                fontSize={'xl'}
                fontWeight={600}
                textAlign={{
                  xmd: 'left',
                  xsm: 'center',
                }}
                maxW={{
                  xmd: '50%',
                  xsm: '100%',
                }}
                pr='4'
              >
                We provide quality coffee, and ready to deliver.
              </Text>
              <Text
                mt='3.5'
                textAlign={{
                  xmd: 'left',
                  xsm: 'center',
                }}
                maxW={{
                  xmd: '65%',
                  xsm: '100%',
                }}
                fontSize='l'
                color='brand.500'
              >
                We are a company that makes and distributes delicious drinks.
                our main product is made with a secret recipe and available in
                stores worldwide.
              </Text>
              <Box
                mt='8'
                display='flex'
                justifyContent={{
                  xmd: 'left',
                  xsm: 'center',
                }}
              >
                <IntroBtn hasBg={true}>
                  <Text
                    textAlign='center'
                    fontWeight='700'
                    color='brand.150'
                    fontSize='sm'
                  >
                    Get your coffee
                  </Text>
                </IntroBtn>
              </Box>
            </GridItem>
          </Grid>
        </SectionContainer>
      </Box>
    </Box>
  );
};

export default AboutUs;
