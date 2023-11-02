import { Box, Center } from '@chakra-ui/react';

import ArbresMiddle from './arbres';
import Sol from './sol';

export default function MiddleForest() {
  return (
    <Box
      w='full'
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom={0}
    >
      <Center overflow='hidden' w='full'>
        <Sol />
      </Center>
      <ArbresMiddle />
    </Box>
  );
}
