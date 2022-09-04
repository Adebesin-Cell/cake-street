import { Box, Heading, Text, GridItem, Flex, Img } from '@chakra-ui/react';
import AddToCartIcon from '../cart/AddToCartIcon';
import Rating from '../rating/Rating';
import Serving from '../serving/Serving';

const Card = function (props) {
  const cardShadow = {
    filter: 'drop-shadow(10px 10px 32px rgba(0, 0, 0, 0.25))',
  };

  const cardShadowSm = {
    filter: 'drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.16))',
  };

  const innerCardStyles = {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)',
    backdropFilter: 'blur(4px)',
    borderRadius: '12px',
  };

  return (
    <GridItem
      sx={props.isPopular ? cardShadow : cardShadowSm}
      minH={{ md: 96, xsm: '0' }}
    >
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
            <Rating rating={props.rating} />
          </Box>
          <Box p='2.5' pt='5'>
            <Flex alignItems='center' justifyContent='space-between'>
              <Heading color='brand.900' fontSize={{ xl: '2xl', xsm: 18 }}>
                {props.title}
              </Heading>
              <Heading color='brand.900' fontSize={{ xl: '2xl', xsm: 18 }}>
                {props.price}
              </Heading>
            </Flex>
            {props.servingTypes ? (
              <Flex justifyContent={'space-between'} mt='4'>
                <Flex gap='4'>
                  {props.servingTypes.map((servingType, i) => (
                    <Serving key={i} servingType={servingType} />
                  ))}
                </Flex>
                <AddToCartIcon />
              </Flex>
            ) : (
              ''
            )}
            {props.description ? (
              <Flex justifyContent={'space-between'} mt='2' alignItems='center'>
                <Text
                  color='brand.500'
                  fontSize={{ xsm: 14 }}
                  fontWeight={600}
                  maxW='40'
                >
                  {props.description}
                </Text>
                <AddToCartIcon />
              </Flex>
            ) : (
              ''
            )}
          </Box>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default Card;
