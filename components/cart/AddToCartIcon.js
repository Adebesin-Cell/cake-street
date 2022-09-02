import { Flex } from '@chakra-ui/react';
import { ShoppingCartIcon } from '../../utils/icons/Icons';

const AddToCartIcon = function () {
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      width='12'
      height='12'
      borderRadius='full'
      bg='brand.50'
      cursor='pointer'
    >
      <ShoppingCartIcon color='white' width='4' height='4' />
    </Flex>
  );
};

export default AddToCartIcon;
