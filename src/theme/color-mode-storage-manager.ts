import { ChakraProviderProps } from '@chakra-ui/react';

export function createSystemColorModeStorageManager(): ChakraProviderProps['colorModeManager'] {
  return {
    ssr: false,
    type: 'localStorage',
    get(init?) {
      return 'light';
      // return 'system' as unknown as 'light';
    },
    set(value) {},
  };
}
