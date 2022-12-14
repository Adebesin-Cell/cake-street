import { Icon } from '@chakra-ui/react';

export const ShoppingCartIcon = function (props) {
  return (
    <Icon
      color={props.color}
      width={props.width}
      height={props.height}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='9' cy='21' r='1'></circle>
      <circle cx='20' cy='21' r='1'></circle>
      <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
    </Icon>
  );
};

export const StarIcon = function (props) {
  return (
    <Icon
      color={props.color}
      width={props.width}
      height={props.height}
      viewBox='0 0 24 24'
      fill={props?.fill || 'none'}
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
    </Icon>
  );
};
