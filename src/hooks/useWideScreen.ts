import { useBreakpointValue } from '@chakra-ui/react';

export default function useWideScreen() {
  return useBreakpointValue({ 'base': false, '2xl': true });
}
