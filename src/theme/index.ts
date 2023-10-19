import { extendTheme } from '@chakra-ui/react';

import * as components from './components';

const theme = {
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts: {
    heading: `'Berkshire Swash', serif`,
    body: `'Montserrat', serif`,
  },
  semanticTokens: {
    colors: {
      general: {
        white: 'primary.50',
        black: '#333842',
        link: 'primary.600',
        tooltip: 'primary.300',
      },
      bloc0: {
        navigation: 'primary.50',
        activeNavigation: 'primary.500',
        text: 'general.white',
        menu: 'general.white',
      },
      bloc1: {
        default: 'primary.600',
        title: 'primary.800',
        smallTitle: 'primary.800',
        icons: 'primary.900',
        navigation: 'primary.800',
        activeNavigation: 'primary.500',
        text: 'general.black',
        menu: 'primary.900',
      },
      portrait: {
        ellipse: 'primary.900',
      },
    },
    components: { ...components },
  },
};
export default extendTheme(theme);
