import { Heading, Text } from '@chakra-ui/react';
import Underline from '../../underline/Underline';

const SectionTitle = function (props) {
  return (
    <Heading
      display='flex'
      gap='10px'
      fontSize={32}
      color={props.color || 'black'}
      textAlign={props.textAlign || 'left'}
      justifyContent={props.justifyContent || 'left'}
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
