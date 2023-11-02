import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

import NuageGaucheMobile from './nuage-gauche';
import Phare from './phare';
import Rocher from './rocher';
import SubRocherMobile from './subrocher';
import Texte from './texte';
import ÉcumeMobile from './écume';

export default function MobileSea() {
  const backWave = useParallax({
    speed: -2,
  });
  const middleWave = useParallax({
    speed: 2,
  });
  return (
    <Box w='full' h='500' bg='#A5E7F3' position='relative'>
      <Texte />
      <NuageGaucheMobile />
      <Phare />
      <Rocher />
      <ÉcumeMobile />
      <Box
        position='absolute'
        bottom='5'
        w='full'
        h='120'
        backgroundImage='https://iili.io/JK7lpOG.png'
        backgroundPosition='top center'
        backgroundRepeat='repeat-x'
        ref={backWave.ref as LegacyRef<HTMLDivElement>}
      />
      <Box
        position='absolute'
        bottom='2'
        w='full'
        h='130'
        backgroundImage='https://iili.io/JK7lmRs.png'
        backgroundPosition='top center'
        backgroundRepeat='repeat-x'
        ref={middleWave.ref as LegacyRef<HTMLDivElement>}
      />
      <Box
        position='absolute'
        bottom='0'
        w='full'
        h='110'
        backgroundImage='https://iili.io/JK7lbJn.png'
        backgroundPosition='top center'
        backgroundRepeat='repeat-x'
      />
      <SubRocherMobile />
    </Box>
  );
}
