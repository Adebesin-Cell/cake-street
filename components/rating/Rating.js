import { Box, Flex, Text } from '@chakra-ui/react';
import { StarIcon } from '../../utils/icons/Icons';

const Rating = function (props) {
  const cardOuterStyles = {
    background:
      ' linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
    backdropFilter: 'blur(4px)',
    borderRadius: '27px',
  };

  const cardInnerStyles = {
    background: '#FFFFFF',
    borderRadius: '50px',
  };

  return (
    <Box sx={cardOuterStyles} pos='absolute' top='2.5' left='2.5' p='1'>
      <Flex sx={cardInnerStyles} py='2' px='2.5' alignItems='center'>
        <Text mr='1.5' fontSize='md' fontWeight={700} color='brand.900'>
          {props.rating}
        </Text>
        <StarIcon fill='brand.200' color='brand.200' width='3' height='3' />
      </Flex>
    </Box>
  );
};

export default Rating;
