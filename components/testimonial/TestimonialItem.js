import { ListItem } from '@chakra-ui/react';
import TestimonialCard from './TestimonialCard';

const TestimonialItem = function (props) {
  return (
    <ListItem flex='1 0 calc(35% - 40px)'>
      <TestimonialCard {...props.testimonial} />
    </ListItem>
  );
};

export default TestimonialItem;
