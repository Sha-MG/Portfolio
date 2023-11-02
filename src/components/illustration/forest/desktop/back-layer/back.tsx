import { Box } from '@chakra-ui/react';

import ArbresBack from './arbres';

export default function BackForest() {
  return (
    <Box
      w='full'
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom={0}
    >
      <ArbresBack />
    </Box>
  );
}
