import { Box, Heading, Text, GridItem, Flex, Img } from '@chakra-ui/react';

const Card = function (props) {
  const cardShadow = {
    filter: 'drop-shadow(10px 10px 32px rgba(0, 0, 0, 0.25))',
  };

  const innerCardStyles = {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)',
    backdropFilter: 'blur(4px)',
    borderRadius: '12px',
  };

  return (
    <GridItem sx={cardShadow} minH={96}>
      <Flex
        direction='column'
        sx={props.isPopular ? innerCardStyles : ''}
        minH='100%'
        p={props.isPopular ? '6px' : ''}
      >
        <Box bg='white' minH='100%' flexGrow='1' borderRadius={12} p={5}>
          <Box pos='relative'>
            <Img
              src={props.image.src}
              borderRadius={12}
              w='full'
              alt={props.title}
            ></Img>
          </Box>
          <Box p='2.5' pt='5'>
            <Flex alignItems='center' justifyContent='space-between'>
              <Heading>{props.title}</Heading>
              <Heading>{props.price}</Heading>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default Card;
