import { extendTheme, theme as base } from '@chakra-ui/react';

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
      500: '#7E7D7A',
      900: '#2F2105',
    },
  },
});

export default theme;
