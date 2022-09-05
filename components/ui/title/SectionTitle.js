import { Heading, Text } from '@chakra-ui/react';
import Underline from '../../underline/Underline';

//Section titles
const SectionTitle = function (props) {
  return (
    <Heading
      fontSize={{ md: 32, xsm: 24 }}
      color={props.color || 'black'}
      textAlign={{ xl: props.textAlign || 'left', xsm: 'center' }}
    >
      {props.text}
      <Text as='span' pos='relative'>
        {' '}
        {props.subText}
        <Underline />
      </Text>
    </Heading>
  );
};

export default SectionTitle;
