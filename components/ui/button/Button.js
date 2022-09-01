import { Button } from '@chakra-ui/react';

const Btn = function (props) {
  return <Button {...props}>{props.children}</Button>;
};

export default Btn;
