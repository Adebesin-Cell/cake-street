import { Box, Container, Flex } from '@chakra-ui/react';
import NewsletterBg from '../../assets/images/newletter-background.png';
import SectionTitle from '../ui/title/SectionTitle';

const NewsLetter = function () {
  return (
    <Box as='section' mt='24' mb='32'>
      <Container maxW='container.xl' p='0'>
        <Flex
          bgImg={`url(${NewsletterBg.src})`}
          bgRepeat='no-repeat'
          bgSize='contain'
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
        </Flex>
      </Container>
    </Box>
  );
};

export default NewsLetter;
