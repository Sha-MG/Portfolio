import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import useWideScreen from '@/hooks/useWideScreen';
import { Box } from '@chakra-ui/react';

import NuageDroite from './nuage-droite';
import NuageGauche from './nuage-gauche';
import Phare from './phare';
import Rocher from './rocher';
import SubBulles1 from './sub-bulles-1';
import SubBulles2 from './sub-bulles-2';
import SubBulles3 from './sub-bulles-3';
import SubBullesWide1 from './sub-bulles-wide-1';
import SubBullesWide2 from './sub-bulles-wide-2';
import SubBullesWide3 from './sub-bulles-wide-3';
import SubRocher from './subrocher';
import Texte from './texte';
import Écume from './écume';

export default function DesktopSea() {
  const backWave = useParallax({
    speed: -2,
  });
  const middleWave = useParallax({
    speed: 2,
  });
  const isWideScreen = useWideScreen();
  return (
    <Box
      w='full'
      h={{ 'base': '500', '2xl': '700' }}
      bg='#A5E7F3'
      position='relative'
    >
      <Texte />
      <NuageGauche />
      <NuageDroite />
      <Phare />
      <Rocher />
      <Écume />
      <Box
        position='absolute'
        bottom='12'
        w='full'
        h='160'
        backgroundImage='https://iili.io/JK7lpOG.png'
        backgroundPosition='top center'
        backgroundRepeat='repeat-x'
        ref={backWave.ref as LegacyRef<HTMLDivElement>}
      />
      <Box
        position='absolute'
        bottom='1'
        w='full'
        h='180'
        backgroundImage='https://iili.io/JK7lmRs.png'
        backgroundPosition='top center'
        backgroundRepeat='repeat-x'
        ref={middleWave.ref as LegacyRef<HTMLDivElement>}
      />
      <Box
        position='absolute'
        bottom='0'
        w='full'
        h='160'
        backgroundImage='https://iili.io/JK7lbJn.png'
        backgroundPosition='top center'
        backgroundRepeat='repeat-x'
      />
      <SubRocher />
      {isWideScreen ? (
        <>
          <SubBullesWide1 />
          <SubBullesWide2 />
          <SubBullesWide3 />
        </>
      ) : (
        <>
          <SubBulles1 />
          <SubBulles2 />
          <SubBulles3 />
        </>
      )}
    </Box>
  );
}
