import { Box } from '@chakra-ui/react';

import NuageGauche1 from './nuage-gauche-1';
import NuageGauche2 from './nuage-gauche-2';
import NuageGauche3 from './nuage-gauche-3';

export default function NuageGauche() {
  return (
    <Box
      w='fit-content'
      position='absolute'
      top='20'
      left={{ 'base': 20, '2xl': 400 }}
    >
      <Box position='relative'>
        <NuageGauche1 />
        <NuageGauche2 />
        <NuageGauche3 />
      </Box>
    </Box>
  );
}
