import { Flex, Text } from '@chakra-ui/react';

const Serving = function (props) {
  return (
    <Flex
      alignItems='center'
      px='5'
      py='2'
      transition='all 300ms'
      color='brand.250'
      _hover={{
        color: 'brand.50',
        border: '2px solid #FF912B',
        transition: 'all 300ms',
      }}
      borderWidth='2px'
      borderStyle='solid'
      borderColor='brand.250'
      borderRadius='xl'
      cursor='pointer'
      {...props}
    >
      <Text
        color='inherit'
        transition='all 300ms'
        fontSize={'l'}
        fontWeight={600}
        textAlign='center'
      >
        {props.servingType}
      </Text>
    </Flex>
  );
};

export default Serving;
