import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box, Center, HStack } from '@chakra-ui/react';

import EtoilesLayer1 from '../desktop/etoiles-layer1';
import EtoilesLayer2 from '../desktop/etoiles-layer2';
import EtoilesLayer3 from '../desktop/etoiles-layer3';
import CuriositéMobile from './curiosite-mobile';
import EtoilesLayer1Mobile from './etoiles-layer1-mobile';
import EtoilesLayer2Mobile from './etoiles-layer2-mobile';
import EtoilesLayer3Mobile from './etoiles-layer3-mobile';
import EtoilesMobile from './etoiles-mobile';
import FuseeMobile from './fusee-mobile';
import JusquaEllesMobile from './jusqu-a-elles-mobile';
import LaMobile from './la-mobile';
import LeCielMobile from './le-ciel-mobile';
import LesMobile from './les-mobile';
import LogoMobile from './logo-mobile';
import LuneMobile from './lune-mobile';
import MeMèneMobile from './me-mene-mobile';
import MeMontreMobile from './me-montre-mobile';
import TraitsVitesse1Mobile from './traits-1-Mobile';
import TraitsVitesse2Mobile from './traits-2-mobile';
import TraitsVitesse3Mobile from './traits-3-mobile';
import TraitsVitesse4Mobile from './traits-4-mobile';
import TraitsFuseeDroiteMobile from './traits-fusee-droite-mobile';
import TraitsFuseeGaucheMobile from './traits-fusee-gauche-mobile';
import TransitionIllustrationBlocMobile from './transition-mobile';

export default function MobileSpace() {
  const parallax = useParallax({
    speed: 3,
  });
  const nuageFondParallax = useParallax({
    speed: 4,
  });

  return (
    <Box w='full' h='500' bg='#515478' position='relative'>
      <LuneMobile />
      <Box
        position='absolute'
        bottom='1'
        w='full'
        h='200'
        backgroundImage='https://iili.io/JFZR3kN.png'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        ref={nuageFondParallax.ref as LegacyRef<HTMLDivElement>}
      />
      <Box
        position='absolute'
        bottom='1.5'
        w='full'
        h='200'
        backgroundImage='https://iili.io/JFZAOdl.png'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        ref={parallax.ref as LegacyRef<HTMLDivElement>}
      />
      <Box
        position='absolute'
        bottom='0'
        w='full'
        h='200'
        backgroundImage='https://iili.io/JFZx042.png'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
      />
      <EtoilesLayer1Mobile />
      <EtoilesLayer2Mobile />
      <EtoilesLayer3Mobile />
      <FuseeMobile />
      <Center w='full' position='absolute' bottom='20'>
        <HStack justifyContent='space-between' position='relative' spacing={1}>
          <TraitsVitesse1Mobile />
          <TraitsVitesse2Mobile />
          <TraitsVitesse3Mobile />
          <TraitsVitesse4Mobile />
        </HStack>
      </Center>
      <TraitsFuseeDroiteMobile />
      <TraitsFuseeGaucheMobile />
      <Center position='absolute' w='full' top='100'>
        <Box position='relative'>
          <LeCielMobile />
          <MeMontreMobile />
          <LesMobile />
          <EtoilesMobile />
          <LaMobile />
          <CuriositéMobile />
          <MeMèneMobile />
          <JusquaEllesMobile />
        </Box>
      </Center>
      <LogoMobile />
      <Center w='full' position='absolute' bottom='0'>
        <TransitionIllustrationBlocMobile />
      </Center>
    </Box>
  );
}
