import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Underline from '../underline/Underline';

const Services = function () {
  return (
    <Box as='section' pt='5' mb='20'>
      <Container maxW='container.xl' p='0'>
        <Heading display='flex' gap='10px' fontSize={32} color='black'>
          How to use delivery
          <Text as='span' pos='relative'>
            {' '}
            service
            <Underline />
          </Text>
        </Heading>
      </Container>
    </Box>
  );
};

export default Services;
