import { Box, Container, Flex, Text } from '@chakra-ui/react';
import NewsletterBg from '../../assets/images/newletter-background.png';
import IntroBtn from '../intro/IntroBtn';
import FormInput from '../ui/input/Input';
import SectionTitle from '../ui/title/SectionTitle';

const NewsLetter = function () {
  return (
    <Box as='section' mt='24' mb='24'>
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
        <Flex
          bgImg={`url(${NewsletterBg.src})`}
          bgRepeat='no-repeat'
          bgSize='cover'
          borderRadius={42}
          bgPos='center'
          pt='52'
          pb='52'
          direction='column'
          justifyContent='center'
        >
          <SectionTitle
            text='Subscribe to get 50% discount price'
            textAlign='center'
            color='white'
            justifyContent='center'
          />
          <Flex
            bgColor='white'
            p='1.5'
            maxW='486px'
            w='full'
            borderRadius='42'
            mt='6'
            mx='auto'
          >
            <FormInput
              variant='unstyled'
              pl='4'
              placeholder='Email address'
              fontSize='16px'
              color='brand.500'
              flexGrow='1'
            />
            <IntroBtn hasBg={true} alignSelf='center'>
              <Text
                textAlign='center'
                fontWeight='700'
                fontSize='sm'
                color='white'
              >
                Order now
              </Text>
            </IntroBtn>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default NewsLetter;