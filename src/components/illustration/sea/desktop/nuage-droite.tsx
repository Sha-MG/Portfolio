import { Box } from '@chakra-ui/react';

import NuageDroite1 from './nuage-droite-1';
import NuageDroite2 from './nuage-droite-2';

export default function NuageDroite() {
  return (
    <Box
      w='fit-content'
      position='absolute'
      top={{ 'base': '230', '2xl': '300' }}
      right={{ 'base': 40, '2xl': 300 }}
      display={{ base: 'none', lg: 'block' }}
    >
      <Box position='relative'>
        <NuageDroite1 />
        <NuageDroite2 />
      </Box>
    </Box>
  );
}
