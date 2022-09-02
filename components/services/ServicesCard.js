import { Box, Img, Heading, Flex, Text } from '@chakra-ui/react';

const ServicesCard = function (props) {
  return (
    <Box>
      <Flex justifyContent={'center'}>
        <Img src={props.image.src} w='160' h='160' display='block'></Img>
      </Flex>
      <Heading
        fontSize={'2xl'}
        color='brand.900'
        mt='4'
        textTransform={'capitalize'}
        textAlign={'center'}
        fontWeight={600}
      >
        {props.title}
      </Heading>
      <Text
        fontSize={'l'}
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
