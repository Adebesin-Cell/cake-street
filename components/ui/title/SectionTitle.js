import { Heading, Text } from '@chakra-ui/react';
import Underline from '../../underline/Underline';

//Section titles
const SectionTitle = function (props) {
  return (
    <Heading
      display='flex'
      gap={{ xl: '10px', xsm: '5px' }}
      fontSize={{ md: 32, xsm: 24 }}
      color={props.color || 'black'}
      textAlign={props.textAlign || 'left'}
      justifyContent={{
        xl: props.justifyContent || 'left',
        xsm: 'center',
      }}
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
