import useMobile from '@/hooks/useMobile';
import { Box, Center } from '@chakra-ui/react';

import Arbres from './arbres';
import Chante from './chante';
import Créativité from './creativite';
import Dans from './dans';
import Des from './des';
import Le from './le';
import Ma from './ma';
import Silence from './silence';

export default function Texte() {
  const isMobile = useMobile();
  return (
    <Center
      width='full'
      zIndex={50}
      position='absolute'
      top='0'
      h='full'
      {...(isMobile && { transform: 'scale(0.8)' })}
    >
      <Box w='300px' h='200px' position='relative'>
        <Dans />
        <Le />
        <Silence />
        <Des />
        <Arbres />
        <Ma />
        <Créativité />
        <Chante />
      </Box>
    </Center>
  );
}
