import { Flex, Img, Box, Heading, Text } from '@chakra-ui/react';

// Testimonial card component
const TestimonialCard = function (props) {
  return (
    <Flex pos='relative' height='100%'>
      <Img
        src={props.image.src}
        display='block'
        w={{
          xmd: 'initial',
          md: '85%',
          xsm: '95%',
        }}
        h='full'
      />
      <Box
        bgColor='brand.400'
        pos='absolute'
        width='90%'
        py={2.5}
        px={3}
        bottom='5'
        left='8'
        borderRadius={8}
        border='6px solid rgba(255, 211, 145, 0.62)'
      >
        <Heading fontSize='l' fontWeight={500} color='brand.900'>
          {props.name}
        </Heading>
        <Text
          fontSize='sm'
          mt='1'
          fontWeight={400}
          color='brand.900'
          whiteSpace='initial'
        >
          {props.content}
        </Text>
      </Box>
    </Flex>
  );
};

export default TestimonialCard;

// background: #FFCB7C;
// border: 6px solid rgba(255, 211, 145, 0.62);
// border-radius: 8px;
