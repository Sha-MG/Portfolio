import { Box, Center } from '@chakra-ui/react';

import BullesEcume1 from './bulles-ecume-1';
import BullesEcume2 from './bulles-ecume-2';
import BullesEcume3 from './bulles-ecume-3';
import BullesEcume4 from './bulles-ecume-4';
import Ecume1 from './ecume-1';
import Ecume2 from './ecume-2';
import Ecume3 from './ecume-3';

export default function Écume() {
  return (
    <Center w='full' position='absolute' bottom={125}>
      <Box position='relative' w={375} h='100'>
        <BullesEcume1 />
        <BullesEcume2 />
        <BullesEcume3 />
        <BullesEcume4 />
        <Ecume1 />
        <Ecume2 />
        <Ecume3 />
      </Box>
    </Center>
  );
}
