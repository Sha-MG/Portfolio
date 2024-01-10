import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box, Center, HStack } from '@chakra-ui/react';

import TransitionIllustrationBloc from '../../transition';
import Curiosité from './curiosite';
import Etoiles from './etoiles';
import EtoilesLayer1 from './etoiles-layer1';
import EtoilesLayer2 from './etoiles-layer2';
import EtoilesLayer3 from './etoiles-layer3';
import Fusee from './fusee';
import JusquaElles from './jusqu-a-elles';
import La from './la';
import LeCiel from './le-ciel';
import Les from './les';
import Lune from './lune';
import MeMène from './me-mene';
import MeMontre from './me-montre';
import NuageBasDroite from './nuage-bas-droite';
import NuageBasGauche from './nuage-bas-gauche';
import NuageHautDroite from './nuage-haut-droite';
import NuageHautGauche from './nuage-haut-gauche';
import TraitsVitesse1 from './traits-1';
import TraitsVitesse2 from './traits-2';
import TraitsVitesse3 from './traits-3';
import TraitsVitesse4 from './traits-4';
import TraitsFuseeDroite from './traits-fusee-droite';
import TraitsFuseeGauche from './traits-fusee-gauche';

export default function DesktopSpace() {
  const parallax = useParallax({
    speed: 5,
  });
  const nuageFondParallax = useParallax({
    speed: 8,
  });

  return (
    <Box
      w='full'
      h={{ 'base': '500', '2xl': '700' }}
      bg='#515478'
      position='relative'
    >
      <Lune />
      <Box
        position='absolute'
        bottom='0'
        w='full'
        h='300'
        backgroundImage='https://iili.io/JFZR3kN.png'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        ref={nuageFondParallax.ref as LegacyRef<HTMLDivElement>}
      />
      <Box
        position='absolute'
        bottom='2'
        w='full'
        h='257'
        backgroundImage='https://iili.io/JFZAOdl.png'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        ref={parallax.ref as LegacyRef<HTMLDivElement>}
      />
      <Box
        position='absolute'
        bottom='0'
        w='full'
        h='260'
        backgroundImage='https://iili.io/JFZx042.png'
        backgroundPosition='center'
      />
      <EtoilesLayer1 />
      <EtoilesLayer2 />
      <EtoilesLayer3 />
      <NuageHautDroite />
      <NuageBasDroite />
      <NuageBasGauche />
      <Fusee />
      <NuageHautGauche />
      <Center
        w='full'
        position='absolute'
        bottom={{ 'base': '45', '2xl': '65' }}
      >
        <HStack w='10' justifyContent='space-between' position='relative'>
          <TraitsVitesse1 />
          <TraitsVitesse2 />
          <TraitsVitesse3 />
          <TraitsVitesse4 />
        </HStack>
      </Center>
      <TraitsFuseeDroite />
      <TraitsFuseeGauche />
      <Center
        position='absolute'
        w='full'
        top={{ 'base': '70', '2xl': '190' }}
        pl={{ base: '19', md: 'none' }}
      >
        <Box position='relative'>
          <LeCiel />
          <MeMontre />
          <Les />
          <Etoiles />
          <La />
          <Curiosité />
          <MeMène />
          <JusquaElles />
        </Box>
      </Center>
    </Box>
  );
}
