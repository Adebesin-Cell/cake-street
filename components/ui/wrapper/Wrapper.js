import { Box } from '@chakra-ui/react';

const Wrapper = function (props) {
  return <Box {...props}>{props.children}</Box>;
};

export default Wrapper;
