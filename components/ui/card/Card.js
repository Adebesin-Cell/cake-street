import { Box } from '@chakra-ui/react';

const Card = function (props) {
  return <Box {...props}>{props.children}</Box>;
};

export default Card;
