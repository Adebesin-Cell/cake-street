import { Box, List, Flex } from '@chakra-ui/react';
import { Testimonials } from '../../data/TestimonialData';
import TestimonialItem from './TestimonialItem';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Btn from '../ui/button/Button';
import { useMediaQuery } from '../../hooks/use-media-query';

// Testimonial Wrapper / List
const TestimonialList = function () {
  const [activeIndex, setActiveIndex] = useState(0);

  // Get viewport states
  const mobileMatch = useMediaQuery(600);
  const tabletMatch = useMediaQuery(1024);

  // initialize slider start value for desktop
  let translateValue = 33.333;

  if (mobileMatch) {
    // initialize slider start value for mobile screens
    translateValue = 96.5;
  } else if (tabletMatch) {
    // initialize slider start value for tablets
    translateValue = 45.8;
  }

  const activeBtnStyle = {
    backgroundColor: '#FF912B',
  };

  // swipe config for touch screens
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      updateIndex(activeIndex + 1);
    },
    onSwipedRight: () => {
      updateIndex(activeIndex - 1);
    },
  });

  // Slider pagination function
  const switchIndexHandler = function (e) {
    const { index } = e.target.dataset;
    setActiveIndex(+index);
  };

  // Slider update function
  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= Testimonials.length) {
      newIndex = Testimonials.length - 1;
    }

    setActiveIndex(newIndex);
  }

  return (
    <Box pos='relative' overflowX='hidden' {...handlers}>
      <List
        display='flex'
        whiteSpace='nowrap'
        transition='transform 300ms'
        gap='8'
        style={{ transform: `translateX(-${activeIndex * translateValue}%)` }}
      >
        {Testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} testimonial={testimonial} />
        ))}
      </List>
      <Flex mt='8' justifyContent='center' gap='2'>
        {Testimonials.map((testimonial, i) => (
          <Btn
            data-index={i}
            key={testimonial.id}
            width='2'
            height='2'
            borderRadius='full'
            bgColor='brand.450'
            variant='unstyled'
            minW='0'
            border='1px solid #FF912B'
            sx={activeIndex === i ? activeBtnStyle : ''}
            onClick={switchIndexHandler}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default TestimonialList;
