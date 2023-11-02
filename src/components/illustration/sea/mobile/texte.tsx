import { Box, Center } from '@chakra-ui/react';

import AuGré from './au-gre';
import Créativité from './creativite';
import Curiosité from './curiosité';
import Danse from './danse';
import DeMa from './de-ma';
import Des from './des';
import Ma from './ma';
import Vagues from './vagues';

export default function Texte() {
  return (
    <Center w='full' position='absolute' top='44'>
      <Box position='relative' w='200px'>
        <Ma />
        <Créativité />
        <Danse />
        <AuGré />
        <Des />
        <Vagues />
        <DeMa />
        <Curiosité />
      </Box>
    </Center>
  );
}
