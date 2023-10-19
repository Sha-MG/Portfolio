import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box, Center } from '@chakra-ui/react';

import TransitionIllustrationBloc from '../transition';
import EtoilesLayer1 from './etoiles-layer1';
import EtoilesLayer2 from './etoiles-layer2';
import EtoilesLayer3 from './etoiles-layer3';
import Fusee from './fusee';
import LeCiel from './le-ciel';
import Logo from './logo';
import Lune from './lune';
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

export default function Space() {
  const parallax = useParallax({
    speed: 5,
  });
  const fuseeParallax = useParallax({
    speed: 15,
  });
  const fuseeTrait1Parallax = useParallax({
    speed: 15,
  });
  const fuseeTrait2Parallax = useParallax({
    speed: 13,
  });
  const fuseeTrait3Parallax = useParallax({
    speed: 10,
  });
  const fuseeTrait4Parallax = useParallax({
    speed: 8,
  });
  const nuageFondParallax = useParallax({
    speed: 3,
  });
  const fuseeTraitsDecorationGaucheParallax = useParallax({
    translateX: [0, -5],
    speed: 3,
  });
  const fuseeTraitsDecorationDroiteParallax = useParallax({
    translateX: [0, 5],
    speed: 3,
  });
  const luneParallax = useParallax({
    speed: -10,
  });
  const etoilesLayer1Parallax = useParallax({
    speed: -10,
  });
  const etoilesLayer2Parallax = useParallax({
    speed: 8,
  });
  const etoilesLayer3Parallax = useParallax({
    speed: 5,
  });
  const nuageHautDroiteParallax = useParallax({
    translateX: [0, 10],
  });

  return (
    <Box w='full' h='500' bg='#515478' position='relative'>
      <Box
        position='absolute'
        top='0'
        left='15vw'
        w='full'
        h='278'
        ref={luneParallax.ref as LegacyRef<HTMLDivElement>}
      >
        <Lune />
      </Box>
      <Box position='absolute' top='30' left='55vw'>
        <LeCiel />
      </Box>
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
      {/* <Box
        position='absolute'
        bottom='430'
        left='39vw'
        ref={nuageHautDroiteParallax.ref as LegacyRef<HTMLDivElement>}
      >
        <NuageHautDroite />
      </Box> */}
      <Center
        w='full'
        position='absolute'
        bottom='300'
        right='40'
        ref={nuageHautDroiteParallax.ref as LegacyRef<HTMLDivElement>}
      >
        <NuageBasDroite />
      </Center>
      {/* <Box
        position='absolute'
        bottom='330'
        left='50vw'
        ref={nuageBasGaucheParallax.ref as LegacyRef<HTMLDivElement>}
      >
        <NuageBasGauche />
      </Box> */}
      <Center
        w='full'
        position='absolute'
        bottom='180'
        ref={fuseeParallax.ref as LegacyRef<HTMLDivElement>}
      >
        <Fusee />
      </Center>
      {/* <Box
        position='absolute'
        bottom='430'
        left='45vw'
        ref={nuageHautGaucheParallax.ref as LegacyRef<HTMLDivElement>}
      >
        <NuageHautGauche />
      </Box> */}
      <Center
        position='absolute'
        top='180'
        w='full'
        h='278'
        ref={fuseeTrait1Parallax.ref as LegacyRef<HTMLDivElement>}
      >
        <TraitsVitesse1 />
      </Center>
      <Center
        position='absolute'
        top='180'
        w='full'
        h='278'
        ref={fuseeTrait2Parallax.ref as LegacyRef<HTMLDivElement>}
      >
        <TraitsVitesse2 />
      </Center>
      <Center
        position='absolute'
        top='180'
        w='full'
        h='278'
        ref={fuseeTrait3Parallax.ref as LegacyRef<HTMLDivElement>}
      >
        <TraitsVitesse3 />
      </Center>
      <Center
        position='absolute'
        top='180'
        w='full'
        h='278'
        ref={fuseeTrait4Parallax.ref as LegacyRef<HTMLDivElement>}
      >
        <TraitsVitesse4 />
      </Center>
      <Center
        position='absolute'
        top='160'
        w='full'
        h='278'
        ref={
          fuseeTraitsDecorationDroiteParallax.ref as LegacyRef<HTMLDivElement>
        }
      >
        <TraitsFuseeDroite />
      </Center>
      <Center
        position='absolute'
        top='160'
        w='full'
        h='278'
        ref={
          fuseeTraitsDecorationGaucheParallax.ref as LegacyRef<HTMLDivElement>
        }
      >
        <TraitsFuseeGauche />
      </Center>
      <Center
        h='500'
        position='absolute'
        bottom='0'
        w='full'
        ref={etoilesLayer1Parallax.ref as LegacyRef<HTMLDivElement>}
      >
        <EtoilesLayer1 />
      </Center>
      <Center
        h='500'
        position='absolute'
        bottom='0'
        w='full'
        ref={etoilesLayer2Parallax.ref as LegacyRef<HTMLDivElement>}
      >
        <EtoilesLayer2 />
      </Center>
      <Center
        h='500'
        position='absolute'
        bottom='0'
        w='full'
        ref={etoilesLayer3Parallax.ref as LegacyRef<HTMLDivElement>}
      >
        <EtoilesLayer3 />
      </Center>
      <Box position='absolute' bottom={10} right='30vh'>
        <Logo />
      </Box>
      <Center w='full' position='absolute' bottom='0'>
        <TransitionIllustrationBloc />
      </Center>
    </Box>
  );
}
