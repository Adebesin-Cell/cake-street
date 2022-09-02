import { extendTheme, theme as base } from '@chakra-ui/react';

const breakpoints = {
  sm: '600',
  md: '768px',
  lg: '990',
  xl: '1140px',
  '2xl': '1200px',
  xxl: '1440px',
  '2xxl': '1800px',
};

const theme = extendTheme({
  fonts: {
    heading: `Poppins, ${base.fonts?.heading}`,
    body: `Poppins, ${base.fonts?.body}`,
  },
  colors: {
    brand: {
      50: '#FF912B',
      100: '#929292',
      150: '#F4AE26',
      200: '#FFD057',
      250: '#FFD28F',
      300: '#F9D9AA',
      350: '#F7EBDA',
      500: '#7E7D7A',
      900: '#2F2105',
    },
  },
  breakpoints,
});

export default theme;
