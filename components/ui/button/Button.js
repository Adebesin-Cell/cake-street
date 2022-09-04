import { Button } from '@chakra-ui/react';

// Button component
const Btn = function (props) {
  return <Button {...props}>{props.children}</Button>;
};

export default Btn;
