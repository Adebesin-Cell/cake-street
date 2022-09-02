import { ShoppingCartIcon } from '../../utils/icons/Icons';
import Btn from '../ui/button/Button';
import { Box } from '@chakra-ui/react';

const CartIcon = function () {
  return (
    <Btn pos='relative' cursor='pointer' variant='unstyled'>
      <ShoppingCartIcon width='6' height='6' />
      <Box
        pos='absolute'
        top='2'
        right='1'
        width='2.5'
        height='2.5'
        borderRadius='full'
        background='brand.50'
        border='1px solid #FFFFFF;'
      ></Box>
    </Btn>
  );
};

export default CartIcon;
