import { useBreakpointValue } from '@chakra-ui/react';

export default function useTablet() {
  return useBreakpointValue({ base: true, lg: false });
}
