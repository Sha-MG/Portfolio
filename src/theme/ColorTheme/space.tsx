import { ColorHues } from '@chakra-ui/react';

export interface AppTheme {
  name: string;
  id: string;
  colors: {
    primary: ColorHues;
  };
}

const theme: AppTheme = {
  id: 'space',
  name: 'Space',
  colors: {
    primary: {
      50: '#F7F7F7',
      100: '#F7F7F7',
      200: '#F7F7F7',
      300: '#F7F7F7',
      400: '#E39EAC',
      500: '#F1C9C1',
      600: '#E39EAC',
      700: '#C9C1D5',
      800: '#C283A8',
      900: '#666BA2',
    },
  },
};

export default theme;
