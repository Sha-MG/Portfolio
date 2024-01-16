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
        text: 'primary.800',
      },
      portrait: {
        ellipse: 'primary.900',
      },
      bloc2: {
        bgColor: 'primary.800',
        title: 'primary.50',
        navigation: 'primary.900',
        activeNavigation: 'primary.600',
        text: 'primary.900',
      },
      bloc3: {
        title: 'primary.900',
        smallTitle: 'primary.800',
        navigation: 'primary.900',
        activeNavigation: 'primary.600',
        text: 'primary.900',
      },
      bloc4: {
        title: 'primary.50',
        smallTitle: 'primary.800',
        navigation: 'primary.50',
        activeNavigation: 'primary.500',
        bgColor: 'primary.700',
        text: 'primary.50',
      },
      bloc5: {
        title: 'primary.400',
        smallTitle: 'primary.700',
        navigation: 'primary.700',
        activeNavigation: 'primary.500',
        bgColor: 'primary.900',
        text: 'primary.700',
      },
    },
    components: { ...components },
  },
};
export default extendTheme(theme);
