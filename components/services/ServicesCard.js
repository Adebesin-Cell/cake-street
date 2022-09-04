import { Box, Img, Heading, Flex, Text } from '@chakra-ui/react';

// Service card component
const ServicesCard = function (props) {
  return (
    <Box>
      <Flex justifyContent={'center'}>
        <Img src={props.image.src} w='160' h='160' display='block'></Img>
      </Flex>
      <Heading
        fontSize={{ xl: '2xl', xsm: 18 }}
        color='brand.900'
        mt='4'
        textTransform={'capitalize'}
        textAlign={'center'}
        fontWeight={600}
      >
        {props.title}
      </Heading>
      <Text
        fontSize={{ xl: 'l', xsm: 14 }}
        color='brand.900'
        mt='2'
        textAlign={'center'}
        fontWeight={400}
      >
        {props.paragraph}
      </Text>
    </Box>
  );
};

export default ServicesCard;
