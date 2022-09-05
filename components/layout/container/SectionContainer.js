import { Container } from '@chakra-ui/react';

// Section Container component
const SectionContainer = function (props) {
  return (
    <Container
      maxW='container.xl'
      p='0'
      px={{
        xxl: '0',
        xlg: '5',
        xl: '5',
        xsm: '5',
      }}
      {...props}
    >
      {props.children}
    </Container>
  );
};

export default SectionContainer;
