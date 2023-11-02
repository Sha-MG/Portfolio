import { Center } from '@chakra-ui/react';

import Lucioles1 from './lucioles1';
import Lucioles2 from './lucioles2';
import Lucioles3 from './lucioles3';

export default function Lucioles() {
  return (
    <Center position='absolute' bottom='0' w='full'>
      <Lucioles1 />
      <Lucioles2 />
      <Lucioles3 />
    </Center>
  );
}
