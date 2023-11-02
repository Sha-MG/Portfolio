import { Box } from '@chakra-ui/react';

import NuageGaucheMobile1 from './nuage-gauche-1';
import NuageGaucheMobile2 from './nuage-gauche-2';
import NuageGaucheMobile3 from './nuage-gauche-3';

export default function NuageGaucheMobile() {
  return (
    <Box
      w='fit-content'
      position='absolute'
      top='20'
      left={{ 'base': 20, '2xl': 400 }}
    >
      <Box position='relative'>
        <NuageGaucheMobile1 />
        <NuageGaucheMobile2 />
        <NuageGaucheMobile3 />
      </Box>
    </Box>
  );
}
