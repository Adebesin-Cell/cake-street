import { extendTheme, theme as base } from '@chakra-ui/react';

const breakpoints = {
  xsm: '320px',
  sm: '600px',
  md: '768px',
  lg: '990px',
  xmd: '1024px',
  xl: '1140px',
  '2xl': '1200px',
  xlg: '1280px',
  //   xxlg: '1440px',
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
      400: '#FFCB7C',
      450: '#F8E9D2',
      500: '#7E7D7A',
      900: '#2F2105',
    },
  },
  breakpoints,
});

export default theme;
