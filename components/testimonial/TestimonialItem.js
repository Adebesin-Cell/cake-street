import { ListItem } from '@chakra-ui/react';
import TestimonialCard from './TestimonialCard';

const TestimonialItem = function (props) {
  return (
    <ListItem
      flex={{
        xmd: '1 0 calc(35% - 40px)',
        md: '1 0 calc(50% - 40px)',
        xsm: '1 0 calc(100% - 40px)',
      }}
      minH='100%'
      maxH='380px'
    >
      <TestimonialCard {...props.testimonial} />
    </ListItem>
  );
};

export default TestimonialItem;
