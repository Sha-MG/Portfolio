import { useBreakpointValue } from '@chakra-ui/react';

export default function useMobile() {
  return useBreakpointValue({ base: true, md: false });
}
