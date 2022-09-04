import { Box } from '@chakra-ui/react';

// Section Title Underline
const Underline = function () {
  return (
    <Box
      as='span'
      pos='absolute'
      bottom={0}
      left={0}
      w='full'
      h='4px'
      borderRadius='12'
      bg='brand.50'
    ></Box>
  );
};

export default Underline;
